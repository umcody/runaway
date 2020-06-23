import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat,InputToolbar,Send, Composer,Bubble} from 'react-native-gifted-chat'
import { StyleSheet, TextInput, View,Image } from 'react-native';

export default function ChatScreen() {

  function renderBubble(props){
    return (
      <Bubble
        {...props}
        textStyle={{
          left: {
            color: 'white',
          },
          right: {
            color: '#2E5F85',
          },
        }}
        wrapperStyle={{
          left: {
            backgroundColor: '#2E5F85',
            
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            borderBottomRightRadius:30,
            borderBottomLeftRadius:0,
            padding:10,
            marginBottom:5
          },
          right: {
            backgroundColor: '#E3F1FC',
            
            padding:10,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            borderBottomRightRadius:0,
            borderBottomLeftRadius:30,
            marginBottom:5
          },
        }}
      />
    );
  }
   function renderSend(props){
    return (
        <Send {...props}>
          <View style={styles.sendingContainer}>
            <Image source={require('../assets/SendMessageButton.png')} style={{height:35,width:35}} />
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
          avatar: '.assets/ExampleAvatar.png',
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
      placeholder="New Message"
      placeholderTextColor = "#2E5F85"
      textInputStyle={styles.composer}
      user={{
        _id: 1,
      }}
      alwaysShowSend={true}
      showUserAvatar={true}
      showAvatarForEveryMessage={true}
      renderSend={renderSend}
      listViewProps={{
        style: {
          backgroundColor: 'white',
        },
      }}
      renderBubble={renderBubble}
      
      
    />
  )
}
const styles = StyleSheet.create({
    composer: {    
        backgroundColor:'#E3F1FC',
        borderRadius:30,
        borderWidth:5,
        borderColor:'#E3F1FC',
        height:40,
        width:20,
        
    },
    sendingContainer: {
        justifyContent: 'center',
        paddingTop:7,
        alignItems: 'flex-start',
        
      },
  });
  