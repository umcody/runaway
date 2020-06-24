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
import { Image, StyleSheet, TouchableOpacity } from "react-native";

const BottomTab = createMaterialBottomTabNavigator();
const HomeTab = createMaterialTopTabNavigator();
const HomeStack = createStackNavigator();

const FeedScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Feed"
        component={HomeTabScreen}
        options={{
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 30,
            color: "#2E5F85",
          },
          headerRight: (props) => {
            <TouchableOpacity>
              <Image
                style={styles.profile}
                source={require("../images/profileButton.png")}
              />
            </TouchableOpacity>;
          },
        }}
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

const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  profile: {
    position: "absolute",
    left: 30,
    top: 55,
    width: 32,
    height: 32,
  },
});
