import React from "react";
import 'react-native-gesture-handler';
import { StyleSheet, View, StatusBar, Dimensions,Image } from "react-native";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  Feather,
  AntDesign,
} from "@expo/vector-icons";

import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  HeaderBackButton,
} from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";


import EmergencyHotlinesScreen from "../screens/EmergencyHotline";
import ChatScreen from "../screens/ChatScreen";
import Events from "../screens/EventsDummy";
import Posts from "../screens/PostsDummy";
import Media from "../screens/MediaDummy";
import Feels from "../screens/Feels";
import Disclaimer from "../screens/Disclaimer";
import BlogFeed from "../screens/BlogFeed";
import BlogNav from "../navigation/BlogNav";

import Res from "../screens/ResourcesDummy";
import Twitter from "../screens/Twitter";
import { TouchableOpacity } from "react-native-gesture-handler";

const BottomTabNavigation = createBottomTabNavigator();
const HomeTab = createMaterialTopTabNavigator();
const HomeStack = createStackNavigator();
const ChatStack = createStackNavigator();
const HotlineStack = createStackNavigator();

const BottomTab = ({ navigation }) => {
  return (
    <BottomTabNavigation.Navigator
      
      tabBarOptions={{
        showLabel: false,
        inactiveTintColor:"#ACDAFF",
        activeTintColor:"#2E5F85",
        style:{
          backgroundColor: "white",
          height:60,
          borderTopColor: "#ACDAFF",
          borderTopWidth:1
        }
      }}
      
    >
      <BottomTabNavigation.Screen
        name="Feed"
        component={FeedScreen}
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
        component={Res}
        options={{
          tabBarLabel: "Resources",
          tabBarIcon: ({ color }) => (
            <Feather name="book-open" color={color} size={28} />
          ),
        }}
      />
      <BottomTabNavigation.Screen
        name="Events"
        component={Events}
        options={{
          tabBarLabel: "Events",
          tabBarIcon: ({ color }) => (
            <Feather name="calendar" color={color} size={28} />
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
      <ChatStack.Navigator initialRouteName="Disclaimer">
        <ChatStack.Screen
          name="Disclaimer"
          component={Disclaimer}
          options={{ headerShown: false }}
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
          name="Resources"
          component={EmergencyHotlinesScreen}
          options={{
            title: "Emergency Resources",
            headerTitleStyle: styles.headerTitleStyle,
            headerStyle: styles.headerStyle,
          }}
        />
        {/* <ChatStack.Screen
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
        /> */}
      </ChatStack.Navigator>
    </>
  );
};

const FeedScreen = ({ navigation }) => {
  return (
    <>
    <StatusBar barStyle="dark-content" translucent={true} />
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Feed"
        component={HomeTabScreen}
        options={{
          headerTitleAlign: "center",
          headerTitleStyle:styles.headerTitleStyle,
          headerStyle: styles.headerStyle,
          /*
          headerTitle: (
            <View style = {{paddingTop:10}}>
              <Image source={require('../assets/RunawayLogo.png')}/>
            </View>
          ),
          */
        headerLeft: () => (
          <TouchableOpacity style ={{paddingTop:20,paddingLeft:20}}>

            <Feather name="settings" size={25} color="#2E5F85" />
          </TouchableOpacity>
        ),
        }}
      />
    </HomeStack.Navigator>
    </>
  );
};
const HomeTabScreen = () => {
  return (
    <HomeTab.Navigator  tabBarOptions={{
      indicatorStyle:{backgroundColor:"#ACDAFF"},
      labelStyle:{color:"#2E5F85"}
      }}>
      <HomeTab.Screen
        name="Posts"
        component={BlogNav}
        options={{
          title: "Featured",
        }}
      />
      <HomeTab.Screen
        name="Media"
        component={Twitter}
        options={{
          title: "Feed",
        }}
      />
    </HomeTab.Navigator>
  );
};
export default function myStack() {
  return (
    <>
      <NavigationContainer>
        <HotlineStack.Navigator>
          <HotlineStack.Screen
            name="Home"
            component={BottomTab}
            options={{
              headerShown: false,
            }}
          />
          <HotlineStack.Screen
            name="Resources"
            component={EmergencyHotlinesScreen}
            options={{
              title: "Emergency Resources",
              headerTitleStyle: styles.headerTitleStyle,
              headerStyle: styles.headerStyle,
            }}
          />
        </HotlineStack.Navigator>
      </NavigationContainer>
      {/* <View style={styles.homeIndicator}></View> */}
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
    fontSize: windowW*0.08,
    lineHeight: 30,
    color: "#2E5F85",
    
  },
  headerStyle: {
    borderBottomWidth: 0,
    shadowColor: "transparent",
    backgroundColor: "#fff",
    height:windowH/10,
  },
  profilePic: {
    borderLeftWidth: 10,
  },
  profileTitle: {
    color: "#ACDAFF",
    fontSize: 20,
  },
});

// const Profile = () => {
//   return (
//     <ProfileTab.Navigator>
//       <ProfileTab.Screen name="Events" component={ProfileEvents} />
//       <ProfileTab.Screen name="Likes" component={ProfileLikes} />
//     </ProfileTab.Navigator>
//   );
// };
