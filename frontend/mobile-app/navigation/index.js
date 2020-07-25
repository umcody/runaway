import React from "react";
import "react-native-gesture-handler";
import { Linking, StyleSheet, StatusBar, Dimensions } from "react-native";

import {
  MaterialCommunityIcons,
  MaterialIcons,
  Feather,
  AntDesign,
} from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";

import { NavigationContainer, StackActions } from "@react-navigation/native";
import {
  createStackNavigator,
  HeaderBackButton,
} from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";

import EmergencyHotlinesScreen from "../screens/EmergencyHotline";
import ChatScreen from "../screens/ChatScreen";
import Feels from "../screens/Feels";
import PostChatSurvey from "../screens/PostChatSurvey";
import PreChatModal from "../screens/PreChatSurvey/ModalSurvey";
import PreChatSurvey from "../screens/PreChatSurvey/Survey";
import AboutUs from "../screens/AboutUs";
import BlogNav from "../navigation/BlogNav";
import SiteMapNav from "./SiteMapNav";
import SignInPage from "../screens/SignInPage";






import ResourceNav from "./ResourceNav";















const BottomTabNavigation = createBottomTabNavigator();
const ChatStack = createStackNavigator();
const SettingsDrawer = createDrawerNavigator();
const AboutStack = createStackNavigator();

const windowW = Dimensions.get("window").width;
const windowH = Dimensions.get("window").height;

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        onPress={() => {
          Linking.openURL("https://www.instagram.com/runaway.app/");
        }}
        label="Instagram"
        icon={() => <AntDesign name="instagram" size={32} color="#FF9EDA" />}
      />
      <DrawerItem
        onPress={() => {
          Linking.openURL("https://www.facebook.com/runawayapp/");
        }}
        label="Facebook"
        icon={() => <Feather name="facebook" size={32} color="#FF9EDA" />}
      />
      <DrawerItem
        onPress={() => {
          Linking.openURL("https://twitter.com/runaway_app");
        }}
        label="Twitter"
        icon={() => <Feather name="twitter" size={32} color="#FF9EDA" />}
      />
      <DrawerItem
        onPress={() => {
          WebBrowser.openBrowserAsync("https://www.runawayapp.com/");
        }}
        label="Website"
        icon={() => (
          <MaterialCommunityIcons name="web" size={32} color="#FF9EDA" />
        )}
      />
    </DrawerContentScrollView>
  );
}

const BottomTab = ({ navigation }) => {
  return (
    <BottomTabNavigation.Navigator
      tabBarOptions={{
        showLabel: false,
        inactiveTintColor: "#ACDAFF",
        activeTintColor: "#2E5F85",
        style: {
          backgroundColor: "white",
          height: windowH * 0.085,
          borderTopColor: "#ACDAFF",
          borderTopWidth: 1,
        },
      }}
    >
      <BottomTabNavigation.Screen
        name="Feed"
        component={BlogNav}
        options={{
          tabBarLabel: "Feed",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="home-outline"
              color={color}
              size={33}
            />
          ),
        }}
      />
      <BottomTabNavigation.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarVisible: false,
          tabBarLabel: "Chat",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="chat-bubble-outline" color={color} size={28} />
          ),
        }}
      />











      <BottomTabNavigation.Screen
        name="Resources"
        component={ResourceNav}
        options={{
          tabBarLabel: "Resources",
          tabBarIcon: ({ color }) => (
            <Feather name="book-open" color={color} size={28} />
          ),
        }}
      />












    </BottomTabNavigation.Navigator>
  );
};

const Chat = ({ navigation }) => {
  return (
    <>
      <StatusBar barStyle="dark-content" translucent={true} />
      <ChatStack.Navigator initialRouteName="Feels">
        <ChatStack.Screen
          name="PreChatModal"
          component={PreChatModal}
          options={{ headerShown: false }}
        />

        <ChatStack.Screen
          name="PreChatSurvey"
          component={PreChatSurvey}
          options={{
            headerTitle: "PreChat Survey",
            headerTitleAlign: "center",
            headerTitleStyle: {
              color: "#2E5F85",
            },
            headerLeft: () => (
              <HeaderBackButton
                labelVisible={false}
                onPress={() => {
                  navigation.dispatch(StackActions.replace("Feels"));
                  navigation.navigate("Feed");
                }}
              />
            ),
          }}
        />
        <ChatStack.Screen
          name="Feels"
          component={Feels}
          options={{
            headerTitle: "How are you feeling?",
            headerTitleAlign: "center",
            headerTitleStyle: {
              color: "#2E5F85",
            },
            headerLeft: () => (
              <HeaderBackButton
                labelVisible={false}
                onPress={() => {
                  navigation.dispatch(StackActions.replace("Feels"));
                  navigation.navigate("Feed");
                }}
              />
            ),
          }}
        />
        <ChatStack.Screen
          name="Chat"
          component={ChatScreen}
          options={{
            title: "Chat",
            headerTitleStyle: styles.headerTitleStyle,
            headerStyle: styles.headerStyle,
          }}
        />

        <ChatStack.Screen
          name="PostSurvey"
          component={PostChatSurvey}
          options={{ headerShown: false }}
        />

        <ChatStack.Screen
          name="EmergencyResources"
          component={EmergencyHotlinesScreen}
          options={{
            title: "Emergency Resources",
            headerTitleStyle: styles.headerTitleStyle,
            headerStyle: styles.headerStyle,
          }}
        />
      </ChatStack.Navigator>
    </>
  );
};

const About = () => {
  return (
    <AboutStack.Navigator>
      <AboutStack.Screen
        name="About"
        component={AboutUs}
        options={{
          title: "",
          headerTitleStyle: styles.headerTitleStyle,
          headerStyle: styles.headerStyle,
        }}
      />
    </AboutStack.Navigator>
  );
};
export default function MyDrawer() {
  return (
    <NavigationContainer>
      <SettingsDrawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <SettingsDrawer.Screen
          name="Home"
          component={BottomTab}
          options={{
            headerShown: false,
          }}
        />
        <SettingsDrawer.Screen name="About Us" component={About} />
        <SettingsDrawer.Screen name="FAQs" component={BottomTab} />
        <SettingsDrawer.Screen name="Privacy Policy" component={BottomTab} />
        <SettingsDrawer.Screen name="Help" component={SiteMapNav} />
        <SettingsDrawer.Screen name="Sign In" component={SignInPage} />
      </SettingsDrawer.Navigator>
    </NavigationContainer>
  );
}

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
    lineHeight: 30,
    color: "#2E5F85",
  },
  headerStyle: {
    borderBottomWidth: 0,
    shadowColor: "transparent",
    backgroundColor: "#fff",
    height: windowH / 9,
    borderBottomColor: "#ACDAFF",
  },
  profilePic: {
    borderLeftWidth: 10,
  },
  profileTitle: {
    color: "#ACDAFF",
    fontSize: 20,
  },
});
