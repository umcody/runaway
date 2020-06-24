import React from "react";
import { StyleSheet, Text, View,TouchableOpacity, Image } from "react-native";
import ChatScreen from "./screens/ChatScreen";
import EmergencyHotlinesScreen from "./screens/emergencHotline";
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>

    <Stack.Navigator>
      <Stack.Screen name="Chat" component={ChatScreen}
      options={{
        title: 'Chat',
        headerTitleStyle: styles.headerTitleStyle,
        headerStyle: styles.headerStyle,
        
      }} />
      <Stack.Screen name="Resources" component={EmergencyHotlinesScreen}
      options={{
        title: 'Emergency Resources',
        headerTitleStyle: styles.headerTitleStyle,
        headerStyle: styles.headerStyle,
        
      }}  />
    
    </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  headerTitleStyle: {    
    fontFamily: 'System',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 24,
    lineHeight: 28,
    textAlign: 'center',
    color: '#2E5F85',
      
  },
  headerStyle:{
    borderBottomWidth:0,
    shadowColor: 'transparent',
    backgroundColor: '#fff'
  }
});