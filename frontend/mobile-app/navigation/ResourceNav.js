import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import ResourceScreen from "../screens/ResourceMain";
import OfResources from '../screens/OfResources'
import Browser from "../screens/Browser";

const Stack = createStackNavigator();

function ResourceNav() {
  return (
      <Stack.Navigator initialRouteName="ResourceScreen">
        <Stack.Screen
          name="Resources"
          component={ResourceScreen}
          options={{ title: "Resources" }}
        />
        <Stack.Screen
          name='Links'
          component={OfResources}
          options={{ title: "Resources" }}
        />
        <Stack.Screen
          name="Browser"
          component={Browser}
          options={{ title: "Browser" }}
        />
      </Stack.Navigator>
  );
}

export default ResourceNav;