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

export default function ChatScreen({ navigation }) {

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


  function renderBubble(props) {
    return (
      <Bubble
        {...props}
        textStyle={{
          left: {
            color: "white",
          },
          right: {
            color: "#2E5F85",
          },
        }}
        wrapperStyle={{
          left: {
            backgroundColor: "#2E5F85",

            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            borderBottomRightRadius: 30,
            borderBottomLeftRadius: 0,
            padding: 10,
            marginBottom: 5,
          },
          right: {
            backgroundColor: "#E3F1FC",

            padding: 10,
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
  function renderSend(props) {
    return (
      <Send {...props}>
        <View style={styles.sendingContainer}>
          <FontAwesome5 name="arrow-alt-circle-up" size={30} color="#FF9EDA" />
        </View>
      </Send>
    );
  }

  const customInputToolbar = (props) => {
    return (
      <InputToolbar
        {...props}
        containerStyle={{
          paddingBottom: 10,
          backgroundColor: "#fff",
          alignItems: "center",
          justifyContent: "flex-end",
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
  const [text, setText] = useState('');

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

      setMessages((previousMessages) => {
        temp = [{
          _id: 1,
          text:message,
          createdAt: new Date(),
          user: {
            _id: 2,
            name: "React Native",
            avatar: require("../assets/exampleAvatar.png"),
          }
        }];
        GiftedChat.append(previousMessages, messages)
      });

      //This is where u should handle new messages. ("message" var is the new message)
      setNewMessage(message);
    });

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
    }
  }, [])

  //When clicked, call sendMessage function to send message to the server
  function sendMessage(message) {
    socket.emit("sendMessage", message);
  }

// ** GIFTEDCHAT.APPEND NOT WORKING!
  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) => {
      console.log(previousMessages);
      GiftedChat.append(previousMessages, messages);
      sendMessage(messages[0].text);
      console.log("message sent!");
      console.log("////////////////");
    });
  }, []);

  const onQuickReply = (quickReply) => {
    setText(quickReply.values.title);
  };


  return (
    <>
      <GiftedChat
        text={text}
        onInputTextChanged={setText}
        messages={messages}
        onSend={(messages) => onSend(messages)}
        renderInputToolbar={(props) => customInputToolbar(props)}
        placeholder="New Message"
        placeholderTextColor="#2E5F85"
        textInputStyle={styles.composer}
        minInputToolbarHeight={50}
        messagesContainerStyle={{
          paddingBottom: 15,
          backgroundColor: "#fff",
        }}
        user={{
          _id: 1,
        }}
        alwaysShowSend={true}
        renderSend={renderSend}
        listViewProps={{
          style: {
            paddingBottom: 44,
            backgroundColor: "white",
          },
        }}
        renderBubble={renderBubble}
        timeTextStyle={{
          right: {
            display: "none",
          },
          left: {
            display: "none",
          },
        }}
      />
    </>
  );
}
const styles = StyleSheet.create({
  composer: {
    backgroundColor: "#E3F1FC",
    borderRadius: 30,
    borderWidth: 5,
    borderColor: "#E3F1FC",
    paddingLeft: 20,
    paddingRight: 20,
    color: "#2E5F85",
    minHeight: 30,
  },
  sendingContainer: {
    justifyContent: "center",
    paddingTop: 5,
    paddingLeft: 5,
    alignItems: "flex-start",
  },
});
