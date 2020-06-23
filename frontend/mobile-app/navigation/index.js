import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Welcome from "../screens/Welcome";
import Chat from "../screens/Chat";
import Resources from "../screens/Resources";

const Stack = createStackNavigator();

export default function myStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="Resources" component={Resources} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
