import React from "react";
import 'react-native-gesture-handler';
import { Linking, StyleSheet, View, StatusBar, Dimensions,Image } from "react-native";
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
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";


import EmergencyHotlinesScreen from "../screens/EmergencyHotline";
import ChatScreen from "../screens/ChatScreen";
import Posts from "../screens/PostsDummy";
import Media from "../screens/MediaDummy";
import Feels from "../screens/Feels";
import Disclaimer from "../screens/Disclaimer";
import PostChatSurvey from "../screens/PostChatSurvey";
import PreChatModal from "../screens/PreChatSurvey/ModalSurvey";
import PreChatSurvey from "../screens/PreChatSurvey/Survey";
import AboutUs from "../screens/AboutUs";
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
const SettingsDrawer = createDrawerNavigator();

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
                  navigation.dispatch(StackActions.replace("Disclaimer"));
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
                  navigation.dispatch(StackActions.replace("Disclaimer"));
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
            <Feather
              style={{ paddingLeft: 25 }}
              onPress={() => navigation.openDrawer()}
              name="info"
              size={30}
              color="#FF9EDA"
            />
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

const TemporaryStack = () => {
  return (
    <HotlineStack.Navigator>
      <HotlineStack.Screen
        name="EmergencyResources"
        component={EmergencyHotlinesScreen}
        options={{
          title: "Emergency Resources",
          headerTitleStyle: styles.headerTitleStyle,
          headerStyle: styles.headerStyle,
        }}
      />
    </HotlineStack.Navigator>
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
        <SettingsDrawer.Screen name="About Us" component={AboutUs} />
        <SettingsDrawer.Screen name="FAQs" component={BottomTab} />
        <SettingsDrawer.Screen name="Privacy Policy" component={BottomTab} />
        <SettingsDrawer.Screen name="Usage" component={BottomTab} />
        <SettingsDrawer.Screen name="Sign In" component={BottomTab} />
      </SettingsDrawer.Navigator>
    </NavigationContainer>
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
