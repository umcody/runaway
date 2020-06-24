import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

/* the above changes allow us to use navigation in our app so
we can connect the different pages of the chat feautre*/

import terminateButton from './assets/terminateChat.png'

import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';





function DetailsScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>Tapping "Go to Details... again" will allow us to 
          express the intent to add another route regardless of the 
          existing navigation history. done with push.
          Each time you call push we add a new route to the navigation
          stack. When you call navigate it first tries to find an existing
          route with that name, and only pushes a new route if there isn't
          yet one on the stack.
        </Text>
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
        />
        <Button
          title="Go to Details... again"
          onPress={() => navigation.push('Details')}
        />
        <Button 
          title="Go back" 
          onPress={() => navigation.goBack()} 
        />
        <Button
          title="Go back to first screen in stack"
          onPress={() => navigation.popToTop()}
        />
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
  
  