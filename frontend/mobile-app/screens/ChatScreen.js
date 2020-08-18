import React, { useState, useCallback, useEffect,useRef } from "react";
import socketioclient from "socket.io-client";
import {
  GiftedChat,
  InputToolbar,
  Send,
  Bubble,
} from "react-native-gifted-chat";
import { StyleSheet, View, TouchableOpacity,BackHandler,AppState,Platform } from "react-native";
import { AntDesign, FontAwesome5, Feather } from "@expo/vector-icons";
import {colors, fonts, padding, dimensions,margin,borderRadius, icon,stylesDefault} from '../style/styleValues.js'
import QuickReplies from "react-native-gifted-chat/lib/QuickReplies";
import WaitingPage from "./WaitingPage";

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
  const [socket, setSocket] = useState(socketioclient("https://runaway-practicum.herokuapp.com/"));

  //const appState = useRef(AppState.currentState);
  // conditional header depending on if user is in waiting screen or chat room
  if (volunteerJoined){
    navigation.setOptions({
      headerStyle:stylesDefault.headerStyle,
      headerRight: () => (
        <TouchableOpacity
          style={{ paddingRight: padding.md }}
          onPress={() => navigation.navigate("EmergencyResources")}
        >
          <AntDesign
            name="exclamationcircleo"
            size={icon.md}
            color={colors.button}
          />
        </TouchableOpacity>
      ),
      headerTitle: "Chat",
      headerLeft: () => (
        <TouchableOpacity
          style={{ paddingLeft: padding.md }}
          onPress={() => {
            disconnectSocket();
            return navigation.navigate("PostSurvey", { messages: messages });
          }}
        >
          <Feather name="x" size={icon.lg} color={colors.button} />
        </TouchableOpacity>
      ),
    });
  } else {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          style={{ paddingLeft: padding.md }}
          onPress={() => {
            disconnectSocket();
            return navigation.navigate("Feed");
          }}
        >
          <Feather name="x" size={icon.lg} color={colors.button} />
        </TouchableOpacity>
      ),
      headerTitle: "",
      headerStyle: styles.headerStyle,
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
            color: colors.background,
            fontSize: fonts.sm,
            fontFamily: fonts.text,
          },
          right: {
            color: colors.tertiary,
            fontSize: fonts.sm,
            fontFamily: fonts.text,
          },
        }}
        //bubble styling
        wrapperStyle={{
          left: {
            backgroundColor: colors.tertiary,
            borderTopLeftRadius: borderRadius.lg,
            borderTopRightRadius: borderRadius.lg,
            borderBottomRightRadius: borderRadius.lg,
            borderBottomLeftRadius: 0,
            padding: padding.sm,
            paddingBottom:0,
            marginBottom: margin.sm,
          },
          right: {
            backgroundColor: colors.secondary,
            padding: padding.sm,
            paddingBottom:0,
            marginRight: margin.lg,
            borderTopLeftRadius: borderRadius.lg,
            borderTopRightRadius: borderRadius.lg,
            borderBottomRightRadius: 0,
            borderBottomLeftRadius: borderRadius.lg,
            marginBottom: padding.sm,
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
          <FontAwesome5
            name="arrow-alt-circle-up"
            size={icon.lg}
            color={colors.button}
          />
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
          paddingBottom: padding.sm,
          backgroundColor: colors.background,
          alignItems: "center",
          justifyContent: "center",
          borderTopColor: colors.secondary,
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
    //generate random #
    let random_room = Math.floor(Math.random() * 1000 + 1);

    socket_joinRoom(random_room);

    //When the volunteer enters the chat
    socket.on("volunteerJoined", function () {
      console.log("volunteer joined");
      setVolunteerJoined(true);
    });

    //When the server responds with "updateMessage"
    socket.on("updateMessage", function (message) {
      console.log("message recieved");
      console.log(message);
      let temp = [
        {
          _id: Math.round(Math.random() * 1000000),
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
      console.log("LOG2");
      socket.disconnect();
    };
  }, []);

  function disconnectSocket(){
    console.log("LOG");
    socket.emit("disconnectUser","user");
  }

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
  const onQuickReply = (replies) => {
    const createdAt = new Date();
    if (replies.length === 1) {
      onSend([
        {
          createdAt,
          _id: Math.round(Math.random() * 1000000),
          text: replies[0].title,
          user: { _id: 1 },
        },
      ]);
    } else if (replies.length > 1) {
      onSend([
        {
          createdAt,
          _id: Math.round(Math.random() * 1000000),
          text: replies.map((reply) => reply.title).join(", "),
          user: { _id: 1 },
        },
      ]);
    } else {
      console.warn("replies param is not set correctly");
    }
  };
  // this renders the quick reply buttons
  // it is set that when # of messages > 1, they dissapear
  const renderQuickReplies = (props) => {
    return <QuickReplies color={colors.tertiary} {...props} />;
  };
  //android back button should leave the room.
  const backAction = () => {
    disconnectSocket();
    navigation.navigate("Feed")
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backAction);

    return () =>
      BackHandler.removeEventListener("hardwareBackPress", backAction);
  }, []);
  // supposed to disconnect user if they exit the app
  /*
  useEffect(() => {
    AppState.addEventListener('change', handleChange);  
  
    return () => {
      AppState.removeEventListener('change', handleChange);  
    }
  }, []);
  const handleChange = (appState) => {
      
    if (appState === "background") {
      disconnectSocket();
    }
    if(appState ==="active"){
      let random_room = Math.floor(Math.random() * 1000 + 1);
      setVolunteerJoined(false)
      socket_joinRoom(random_room);
    }
  }*/
  // show wait page or chat page depending on if volunteer joined
  return (
    <View style={{ flex:1, backgroundColor: colors.background}}>
    {volunteerJoined? 
      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        renderInputToolbar={(props) => customInputToolbar(props)}
        placeholder="New Message"
        placeholderTextColor={colors.tertiary}
        //textInputProps={{multiline}}
        textInputStyle={styles.composer} //styling of text input
        minInputToolbarHeight={60}
        messagesContainerStyle={{
          backgroundColor: colors.background,
        }}
        user={{
          _id: 1,
        }}
        alwaysShowSend={true}
        renderSend={renderSend}
        listViewProps={{
          // styling of the list of messages to have a white background
           style: {
              backgroundColor: colors.background,
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
          renderQuickReplies={(props) => {
              return renderQuickReplies(props);
          }}
          quickReplyStyle={{
            marginLeft: 120,
            width: 160,
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
          bottomOffset={7}
        />
      : 
        <WaitingPage />
      }
    </View>
  );
}
const styles = StyleSheet.create({
  composer: {
    backgroundColor: colors.secondary,
    borderRadius: 20,
    marginTop:5,
    borderColor: colors.secondary,
    paddingLeft: 20,
    paddingRight: 20,
    color: colors.tertiary,
    alignItems: "center",
    overflow:'hidden',
  },
  sendingContainer: {
    justifyContent: "center",
    paddingTop: 5,
    paddingLeft: 5,
    alignItems: "flex-start",
  },
  headerStyle: {
    borderBottomWidth: 0,
    shadowColor: "transparent",
    height: dimensions.fullHeight / 8,
    elevation: 0,
    backgroundColor: colors.background,
  },
});
