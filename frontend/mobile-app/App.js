import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ChatScreen from "./screens/ChatScreen";
import Resources from "./screens/Resources";
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
        headerTitleStyle: {
          fontFamily: 'Arial',
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: 24,
          lineHeight: 28,
          textAlign: 'center',
          color: '#2E5F85'

        },
      }} />
      <Stack.Screen name="Notifications" component={Resources} />
    
    </Stack.Navigator>
    </NavigationContainer>
  );
}
