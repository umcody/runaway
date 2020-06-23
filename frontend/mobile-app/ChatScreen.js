import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat,InputToolbar,Send} from 'react-native-gifted-chat'
import { StyleSheet, TextInput, View,Image } from 'react-native';

export default function ChatScreen() {

   function renderSend(props){
    return (
        <Send {...props}>
          <View style={styles.sendingContainer}>
            <Image source={require('./assets/SendMessageButton.png')} style={{height:40,width:40}} />
          </View>
        </Send>
      );
   }

  const customInputToolbar = props =>{
      return (
              <InputToolbar
              {...props}
              containerStyle ={{
                  paddingBottom:10,
                  backgroundColor:'#fff',
              }}/>
         
      )
  }

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello, my name is Ronnie.',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: './assets/exampleAvatar.png',
        },
      },
    ])
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])

  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      renderInputToolbar={props => customInputToolbar(props)}
      textInputStyle={styles.composer}
      user={{
        _id: 1,
      }}
      alwaysShowSend={true}
      showUserAvatar={true}
      renderSend={renderSend}
    />
  )
}
const styles = StyleSheet.create({
    composer: {    
        backgroundColor:'#E3F1FC',
        borderRadius:30,
        borderWidth:5,
        borderColor:'#E3F1FC',
        height:40
    },
    sendingContainer: {
        justifyContent: 'center',
        paddingTop:15,
        alignItems: 'flex-start',
        
      },
  });
  