import React, { useState, useCallback, useEffect } from "react";
import socketioclient from "socket.io-client";
import {
  GiftedChat,
  InputToolbar,
  Send,
  Bubble,
} from "react-native-gifted-chat";
import { StyleSheet, View, TouchableOpacity, Modal, Text } from "react-native";
import { AntDesign, FontAwesome5, Feather } from "@expo/vector-icons";

//This is the chat screen and messaging components
export default function ChatScreen({ navigation }) {
  //setting header right and left buttons for navigation
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
        onPress={() => navigation.navigate("Feed")}
      >
        <Feather name="x" size={35} color="#FF9EDA" />
      </TouchableOpacity>
    ),
  });

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
            marginRight:20,
            padding: 8,
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


  //const [queue, setQueue] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [roomNum, setRoomNum] = useState(0);
  const [messages, setMessages] = useState([]);
  const [queue, setQueue] = useState([]);
  const [modalVisible, setModalVisible] = useState(true);

  //Joins room and updates queue
  function socket_joinRoom(room) {
    setRoomNum(room);
    socket.emit("joinRoom", room);
    socket.emit("pushQueue", room);
  }


  useEffect(() => {
    socket = socketioclient("http://127.0.0.1:7000");
    //generate random #
    let random_room = Math.floor((Math.random() * 1000) + 1);

    socket_joinRoom(random_room);

    //When the server responds with "updateMessage"
    socket.on("updateMessage", function (message) {
      console.log("message recieved");

      let temp = [{
        _id: 1,
        text:message,
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: require("../assets/exampleAvatar.png"),
        }
      }];

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
        //quick reply- where user can click on the bubble to reply a message. (NOT IMPLEMENTED)
        /*quickReplies: {
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
        },*/
      },
    ]);
    //when exiting the component
    return () => {
      socket.disconnect();
    }
  }, [])

  //When clicked, call sendMessage function to send message to the server
  function sendMessage(message) {
    socket.emit("sendMessage", message);
  }

// ** GIFTEDCHAT.APPEND NOT WORKING!
  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) => 
      GiftedChat.append(previousMessages, messages)
    );
    sendMessage(messages[0].text)
  }, []);


  const setQuickReply = ()=>{
    console.log("clicked!");
    if(messages.quickReplies){
      return messages.quickReplies;
    }else{
      return null
    }
  }

  return (
    <View style={{ flex:1, backgroundColor: "#fff" }}>
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
        listViewProps={{// styling of the list of messages to have a white background
          style: {
            backgroundColor: "white",
          },
        }}
        renderBubble={renderBubble}
        timeTextStyle={{ //disable date and time
          right: {
            display: "none",
          },
          left: {
            display: "none",
          },
        }}
      />
    </View>
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
    alignItems: 'center'
  },
  sendingContainer: {
    justifyContent: "center",
    paddingTop: 5,
    paddingLeft: 5,
    alignItems: "flex-start",
  },
});
