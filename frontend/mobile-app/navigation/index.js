import React from "react";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  Feather,
} from "@expo/vector-icons";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import Welcome from "../screens/Welcome";
import Chat from "../screens/Chat";
import Events from "../screens/Events";
import Posts from "../screens/Posts";
import Media from "../screens/Media";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const BottomTab = createMaterialBottomTabNavigator();
const HomeTab = createMaterialTopTabNavigator();
const HomeStack = createStackNavigator();

const FeedScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Feed"
        component={HomeTabScreen}
        options={{ headerAlign: center }}
      />
    </HomeStack.Navigator>
  );
};
const HomeTabScreen = () => {
  return (
    <HomeTab.Navigator>
      <HomeTab.Screen
        name="Posts"
        component={Posts}
        options={{
          title: "Posts",
        }}
      />
      <HomeTab.Screen
        name="Media"
        component={Media}
        options={{
          title: "Media",
        }}
      />
    </HomeTab.Navigator>
  );
};
export default function myStack() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        barStyle={{
          backgroundColor: "white",
          paddingBottom: 10,
          borderTopWidth: 2,
          borderTopColor: "#ACDAFF",
        }}
        labeled={false}
        inactiveColor="#ACDAFF"
        activeColor="#2E5F85"
      >
        <BottomTab.Screen
          name="Feed"
          component={FeedScreen}
          options={{
            tabBarLabel: "Feed",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="home-outline"
                color={color}
                size={26}
              />
            ),
          }}
        />
        <BottomTab.Screen
          name="Chat"
          component={Chat}
          options={{
            tabBarLabel: "Chat",
            tabBarIcon: ({ color }) => (
              <MaterialIcons
                name="chat-bubble-outline"
                color={color}
                size={26}
              />
            ),
          }}
        />
        <BottomTab.Screen
          name="Events"
          component={Events}
          options={{
            tabBarLabel: "Chat",
            tabBarIcon: ({ color }) => (
              <Feather name="calendar" color={color} size={26} />
            ),
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}
