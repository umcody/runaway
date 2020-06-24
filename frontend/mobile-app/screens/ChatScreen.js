import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat,InputToolbar,Send,Bubble} from 'react-native-gifted-chat'
import { StyleSheet, View,Image,TouchableOpacity } from 'react-native';

export default function ChatScreen({navigation}) {

  navigation.setOptions({
    headerRight: () => (
      <TouchableOpacity style= {{paddingRight:25}} onPress={()=>navigation.navigate('Resources')}>
        <Image source={require('../assets/ProResources.png')}/>
      </TouchableOpacity>
    ),
    headerLeft: () => (
      <TouchableOpacity style= {{paddingLeft:25}}>
        <Image source={require('../assets/ExitChat.png')}/>
      </TouchableOpacity>
    ),
  })
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
            <Image source={require('../assets/SendMessageButton.png')} />
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
          avatar: require('../assets/ExampleAvatar.png'),
        },
        /*quickReplies: {
          type: 'radio', // or 'checkbox',
          keepIt: true,
          values: [
            {
              title: 'I would like advice.',
              value: 'yes',
            },
            {
              title: 'I would love to have a listener.',
              value: 'no',
            },
          ],
        },*/
      },
    ])
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])



  return (
    <GiftedChat
      messages={messages}
      quickReply={messages.quickReplies}
      onSend={messages => onSend(messages)}
      renderInputToolbar={props => customInputToolbar(props)}
      placeholder="New Message"
      placeholderTextColor = "#2E5F85"
      textInputStyle={styles.composer}
      user={{
        _id: 1,
      }}
      alwaysShowSend={true}
      showAvatarForEveryMessage={true}
      renderSend={renderSend}
      listViewProps={{
        style: {
          paddingBottom:44,
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
        paddingLeft:20,
        color:'#2E5F85'
        
    },
    sendingContainer: {
        justifyContent: 'center',
        paddingTop:15,
        alignItems: 'flex-start',
        
      },
  });
  