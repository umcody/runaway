import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

/* the above changes allow us to use navigation in our app so
we can connect the different pages of the chat feautre*/

import terminateButton from './assets/terminateChat.png'

import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';



function ChatScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Chat Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
  
  
        <TouchableOpacity onPress={()=>{alert("you clicked me")}}>
          <Image source={require("./assets/terminateChat.png")}/>
        </TouchableOpacity>
  
        <TouchableOpacity onPress={() => navigation.navigate('Emergency Hotlines')}>
          <Image source={require("./assets/emergencyHotlines.png")}/>
        </TouchableOpacity>
  
  
  
  
        <Text>Hello!</Text>
      </View>
    );
  }
  

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FF9EDA',
      alignItems: 'center',
      justifyContent: 'center',
    },
    emergencyButton: {
      backgroundColor: '#FF9EDA',
      borderRadius: 30,
      width: 335,
      margin: 20,
      height: 200,
      justifyContent: 'center',
    
    },
    emergencyText: {
      color: 'white',
      fontSize: 24,
      fontFamily: 'Roboto',
      textAlign: 'center',
      fontWeight: 'bold',
      fontStyle: 'normal',
  
  
    }
  });
  
  
  