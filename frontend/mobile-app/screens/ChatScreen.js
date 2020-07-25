import React, { useState, useCallback, useEffect } from "react";
import socketioclient from "socket.io-client";
import {
  GiftedChat,
  InputToolbar,
  Send,
  Bubble,
} from "react-native-gifted-chat";
import { StyleSheet, View, TouchableOpacity, Modal, Text } from "react-native";
import axios from "axios";
import { AntDesign, FontAwesome5, Feather } from "@expo/vector-icons";
import {SafeAreaView } from 'react-native-safe-area-context';
import QuickReplies from 'react-native-gifted-chat/lib/QuickReplies';
import WaitingPage from './WaitingPage';

//This is the chat screen and messaging components
export default function ChatScreen({ navigation }) {
  //const [queue, setQueue] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [roomNum, setRoomNum] = useState(0);
  const [messages, setMessages] = useState([]);
  const [volunteerJoined, setVolunteerJoined] = useState(false);
  const [queue, setQueue] = useState([]);
  const [modalVisible, setModalVisible] = useState(true);
  const [text, setText] = useState("");


  let socket;

  // conditional header depending on if user is in waiting screen or chat room
  //right now waiting screen wont show for testing purposes
  if (volunteerJoined==false){
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={{ paddingRight: 25 }}
          onPress={() => navigation.navigate("Resources")}
        >
          <AntDesign name="exclamationcircleo" size={30} color="#FF9EDA" />
        </TouchableOpacity>
      ),
      headerLeft: () => (
        <TouchableOpacity
          style={{ paddingLeft: 25 }}
          onPress={() => {
            return navigation.navigate("PostSurvey", { messages: messages });
          }}
        >
          <Feather name="x" size={35} color="#FF9EDA" />
        </TouchableOpacity>
      ),
    });
  }
  else {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          style={{ paddingLeft: 25 }}
          onPress={() => {
            return navigation.pop();
          }}
        >
          <Feather name="x" size={35} color="#FF9EDA" />
        </TouchableOpacity>
      ),
      headerTitle:''
    });
  }

  // message bubble rendering and styling
  function renderBubble(props) {
    return (
      <Bubble
        {...props}
        //text styling
        textStyle={{
          left: {
            color: "white",
          },
          right: {
            color: "#2E5F85",
          },
        }}
        //bubble styling
        wrapperStyle={{
          left: {
            backgroundColor: "#2E5F85",
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            borderBottomRightRadius: 30,
            borderBottomLeftRadius: 0,
            padding: 8,
            marginBottom: 5,
          },
          right: {
            backgroundColor: "#E3F1FC",
            padding: 8,
            marginRight:20,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            borderBottomRightRadius: 0,
            borderBottomLeftRadius: 30,
            marginBottom: 5,
          },
        }}
      />
    );
  }
  // creating the send button component
  function renderSend(props) {
    return (
      <Send {...props}>
        <View style={styles.sendingContainer}>
          <FontAwesome5 name="arrow-alt-circle-up" size={30} color="#FF9EDA" />
        </View>
      </Send>
    );
  }

  // the rendering of the bottom tool bar
  const customInputToolbar = (props) => {
    return (
      <InputToolbar
        {...props}
        containerStyle={{
          paddingBottom: 10,
          backgroundColor: "#fff",
          alignItems: "center",
          justifyContent: "center",
          borderTopColor: "#E3F1FC",
        }}
        primaryStyle={{ width: 330 }}
      />
    );
  };

  //Joins room and updates queue
  function socket_joinRoom(room) {
    setRoomNum(room);
    socket.emit("joinRoom", room);
    socket.emit("pushQueue", room);
  }

  useEffect(() => {
    socket = socketioclient("https://runaway-practicum.herokuapp.com/");
    //generate random #
    let random_room = Math.floor(Math.random() * 1000 + 1);

    socket_joinRoom(random_room);

    //When the volunteer enters the chat
    socket.on("volunteerJoined",function(){
      console.log("volunteer joined");
      setVolunteerJoined(true);
    })


    //When the server responds with "updateMessage"
    socket.on("updateMessage", function (message) {
      console.log("message recieved");

      let temp = [
        {
          _id: 1,
          text: message,
          createdAt: new Date(),
          user: {
            _id: 2,
            name: "React Native",
            avatar: require("../assets/exampleAvatar.png"),
          },
        },
      ];

      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, temp)
      );

      //This is where u should handle new messages. ("message" var is the new message)
      setNewMessage(message);
    });
    // Default messages that show up at first
    // This is all for testing purposes
    setMessages([
      {
        _id: 1,
        text:
          "Hello, my name is Ronnie. \n \nAre you seeking for advice from this session? I’m more than happy to just listen as well.",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: require("../assets/exampleAvatar.png"),
        },
        //quick reply- where user can click on the bubble to reply a message.
        quickReplies: {
          type: "radio", // or 'checkbox',
          keepIt: true,
          values: [
            {
              title: "I would like advice.",
              value: "advice",
            },
            {
              title: "I would love to have a listener.",
              value: "listen",
            },
          ],
        },
      },
    ]);
    //when exiting the component
    return () => {
      socket.disconnect();
    };
  }, []);

  //When clicked, call sendMessage function to send message to the server
  function sendMessage(message) {
    socket.emit("sendMessage", message);
  }

  // ** GIFTEDCHAT.APPEND NOT WORKING!
  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
    sendMessage(messages[0].text);
  }, []);

   // dont know how this works but when quickreplies are pressed it sends a messages
   const onQuickReply = replies => {
    const createdAt = new Date()
    if (replies.length === 1) {
      onSend([
        {
          createdAt,
          _id: Math.round(Math.random() * 1000000),
          text: replies[0].title,
          user:{_id:1},
        },
      ])
    } else if (replies.length > 1) {
      onSend([
        {
          createdAt,
          _id: Math.round(Math.random() * 1000000),
          text: replies.map(reply => reply.title).join(', '),
          user:{_id:1},
        },
      ])
    } else {
      console.warn('replies param is not set correctly')
    }
  }
// this renders the quick reply buttons
// it is set that when # of messages > 1, they dissapear
  const renderQuickReplies = (props) => {
    return(
      <QuickReplies color='#2E5F85'{...props} style={{
        container: {justifyContent:'flex-end'}}}
        />
    )
  }
  return (
    <SafeAreaView style={{ flex:1, backgroundColor: "#fff" }}>
    {volunteerJoined ==false? 
      <GiftedChat
        messages={messages}
        //quickReply={setQuickReply} NOT WORKING FOR NOW...
        //onQuickReply={(quickReply) => onQuickReply(quickReply)}
        onSend={(messages) => onSend(messages)}
        renderInputToolbar={(props) => customInputToolbar(props)}
        placeholder="New Message"
        placeholderTextColor="#2E5F85"
        textInputStyle={styles.composer} //styling of text input
        minInputToolbarHeight={60}
        messagesContainerStyle={{
          backgroundColor: "#fff",
        }}
        user={{
          _id: 1,
        }}
        alwaysShowSend={true}
        renderSend={renderSend}
        listViewProps={{
          // styling of the list of messages to have a white background
          style: {
            backgroundColor: "white",
          },
        }}
        renderBubble={renderBubble}
        timeTextStyle={{
          //disable date and time
          right: {
            display: "none",
          },
          left: {
            display: "none",
          },
        }}
        onQuickReply={onQuickReply}
        renderQuickReplies={
          (props) => {if(messages.length ===1){return(renderQuickReplies(props))} else{return(null)}}}
        quickReplyStyle={{
          marginLeft:101,
          width:170,
          flexDirection:'row',
          justifyContent:'flex-start',
          alignItems:'center',
        }}
      />
    :
          <WaitingPage/>
    }
    </SafeAreaView> 
  );
}
const styles = StyleSheet.create({
  composer: {
    backgroundColor: "#E3F1FC",
    borderRadius: 30,
    borderWidth: 5,
    borderColor: "#E3F1FC",
    paddingLeft: 10,
    paddingRight: 20,
    color: "#2E5F85",
    minHeight: 35,
    alignItems: "center",
  },
  sendingContainer: {
    justifyContent: "center",
    paddingTop: 5,
    paddingLeft: 5,
    alignItems: "flex-start",
  },
});
