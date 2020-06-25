import React from "react";

import { StyleSheet, View, StatusBar, Dimensions } from "react-native";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  Feather,
} from "@expo/vector-icons";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import EmergencyHotlinesScreen from "../screens/EmergencyHotline";
import ChatScreen from "../screens/ChatScreen";
import Events from "../screens/EventsDummy";
import Posts from "../screens/PostsDummy";
import Media from "../screens/MediaDummy";

const BottomTab = createMaterialBottomTabNavigator();
const HomeTab = createMaterialTopTabNavigator();
const HomeStack = createStackNavigator();
const Stack = createStackNavigator();

const Chat = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" translucent={true} />
      <Stack.Navigator>
        <Stack.Screen
          name="Chat"
          component={ChatScreen}
          options={{
            title: "Chat",
            headerTitleStyle: styles.headerTitleStyle,
            headerStyle: styles.headerStyle,
          }}
        />
        <Stack.Screen
          name="Resources"
          component={EmergencyHotlinesScreen}
          options={{
            title: "Emergency Resources",
            headerTitleStyle: styles.headerTitleStyle,
            headerStyle: styles.headerStyle,
          }}
        />
        <Stack.Screen
          name="Home"
          component={HomeTabScreen}
          options={{
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontSize: 30,
              color: "#2E5F85",
            },
            headerLeft: (props) => (
              <MaterialIcons
                onPress={() => {}}
                name="face"
                color="#ACDAFF"
                size={25}
              />
            ),
          }}
        />
      </Stack.Navigator>
    </>
  );
};

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
          headerLeft: (props) => (
            <MaterialIcons
              onPress={() => {}}
              name="face"
              color="#ACDAFF"
              size={25}
            />
          ),
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
    <>
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
                  size={28}
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
                  size={25}
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
                <Feather name="calendar" color={color} size={25} />
              ),
            }}
          />
        </BottomTab.Navigator>
      </NavigationContainer>
      <View style={styles.homeIndicator}></View>
      {/* <View style={styles.profile}>
        <MaterialIcons
          onPress={() => {}}
          name="face"
          color="ACDAFF"
          size={25}
        />
      </View> */}
    </>
  );
}

const windowW = Dimensions.get("window").width;
const windowH = Dimensions.get("window").height;

const styles = StyleSheet.create({
  homeIndicator: {
    backgroundColor: "#FF9EDA",
    position: "absolute",
    height: 5,
    top: windowH - 13,
    left: windowW / 2 - 67.5,
    width: 135,
    borderRadius: 2.5,
  },
  profile: {
    position: "absolute",
    left: 15,
    top: 25,
    width: 32,
    height: 32,
  },
  headerTitleStyle: {
    fontFamily: "System",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 24,
    lineHeight: 28,
    textAlign: "center",
    color: "#2E5F85",
  },
  headerStyle: {
    borderBottomWidth: 0,
    shadowColor: "transparent",
    backgroundColor: "#fff",
  },
});
