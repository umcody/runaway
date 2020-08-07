import React from "react";
import "react-native-gesture-handler";
import { Linking, StyleSheet, StatusBar, Dimensions,View,Text } from "react-native";

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

import EmergencyHotlinesScreen from "../screens/OfHotline";
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

//styling
import {stylesDefault, icon, colors, dimensions,padding,fonts, margin} from '../style/styleValues'
import { Colors } from "react-native/Libraries/NewAppScreen";

const BottomTabNavigation = createBottomTabNavigator();
const ChatStack = createStackNavigator();
const SettingsDrawer = createDrawerNavigator();
const AboutStack = createStackNavigator();
const RootStack = createStackNavigator();


function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
    <View
      style={{
        backgroundColor: colors.background,
        justifyContent: 'center',
        paddingLeft:15
      }}
    >
      <Text style={{ fontSize:fonts.lg,
        fontFamily:fonts.main,
        paddingVertical:padding.md, color:colors.foreground}}>
        Information Pane
      </Text>
    </View>
      <DrawerItemList {...props} />
      <DrawerItem
        onPress={() => {
          Linking.openURL("https://www.instagram.com/runaway.app/");
        }}
        label="Instagram"
        labelStyle={{fontFamily:fonts.text,fontSize:fonts.sm-2}}
        icon={() => <AntDesign name="instagram" size={icon.md} color={colors.button} />}
      />
      <DrawerItem
        onPress={() => {
          Linking.openURL("fb://page/1789760617938894");
        }}
        label="Facebook"
        labelStyle={{fontFamily:fonts.text,fontSize:fonts.sm-2}}
        icon={() => <Feather name="facebook" size={icon.md} color={colors.button} />}
      />
      <DrawerItem
        onPress={() => {
          Linking.openURL("https://twitter.com/runaway_app");
        }}
        label="Twitter"
        labelStyle={{fontFamily:fonts.text,fontSize:fonts.sm-2}}
        icon={() => <Feather name="twitter" size={icon.md} color={colors.button} />}
      />
      <DrawerItem
        onPress={() => {
          WebBrowser.openBrowserAsync("https://www.runawayapp.com/");
        }}
        labelStyle={{fontFamily:fonts.text,fontSize:fonts.sm-2}}
        label="Website"
        icon={() => (
          <MaterialCommunityIcons name="web" size={icon.md} color={colors.button} />
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
        inactiveTintColor: colors.primary,
        activeTintColor: colors.tertiary,
        style: {
          backgroundColor: colors.background,
          height: (dimensions.fullHeight >800) ? dimensions.fullHeight*.1: dimensions.fullHeight * 0.085,
          borderTopColor: colors.secondary,
          borderTopWidth: 1,
          elevation:1
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
              size={icon.lg}
            />
          ),
        }}
      />
      <BottomTabNavigation.Screen
        name="PreChat"
        component={Chat}
        options={{
          tabBarLabel: "Chat",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="chat-bubble-outline" color={color} size={icon.md} />
          ),
        }}
/>
      <BottomTabNavigation.Screen
        name="Resources"
        component={ResourceNav}
        options={{
          tabBarLabel: "Resources",
          tabBarIcon: ({ color }) => (
            <Feather name="book-open" color={color} size={icon.md} />
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
            headerStyle: stylesDefault.headerStyle,
            headerTitleStyle: stylesDefault.headerTitleStyle,
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
          title: "About Us",
          headerTitleAlign: "center",
          headerTitleStyle: styles.headerTitleStyle,
          headerStyle: styles.headerStyle,
        }}
      />
    </AboutStack.Navigator>
  );
};
const MyDrawer = () =>{
  return (
      <SettingsDrawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        edgeWidth={0}
        drawerContentOptions={{
          backgroundColor:colors.background,
          activeTintColor: colors.tertiary,
          activeBackgroundColor:colors.secondary,
          inactiveBackgroundColor: colors.background,
          itemStyle: { marginBottom: margin.sm },
          labelStyle:{fontSize:fonts.sm,fontFamily:fonts.text,}
        }}
      >
        <SettingsDrawer.Screen
          name="Home"
          component={BottomTab}
          options={{
            headerShown: false,
          }}
        />
        <SettingsDrawer.Screen name="About Us" component={About} />
        {/*<SettingsDrawer.Screen name="FAQs" component={BottomTab} />*/}
        <SettingsDrawer.Screen name="Privacy Policy" component={BottomTab} />
        <SettingsDrawer.Screen name="Help" component={SiteMapNav} />
        <SettingsDrawer.Screen name="Sign In" component={SignInPage} />
      </SettingsDrawer.Navigator>
    
  );
}

export default function MyApp(){
  return(
    <NavigationContainer>
      <RootStack.Navigator>
      {/* <RootStack.Screen
        name="Sign"
        component={SignInPage}
        options={{
          headerShown: false,
        }}
      /> */}
      <RootStack.Screen
        name="Home"
        component={MyDrawer}
        options={{
          headerShown: false,
        }}
      />
      <RootStack.Screen
          name="Chat"
          component={ChatScreen}
          options={{
            title: "Chat",
            headerTitleAlign: "center",
            headerTitleStyle: styles.headerTitleStyle,
            headerStyle: styles.headerStyle,
            gestureEnabled:false
          }}
        />
        <RootStack.Screen
          name="PostSurvey"
          component={PostChatSurvey}
          options={{ headerShown: false,gestureEnabled:false}}
          
        />
        <RootStack.Screen
          name="EmergencyResources"
          component={EmergencyHotlinesScreen}
          options={{
            title: "Emergency Resources",
            headerTitleStyle: styles.headerTitleStyle,
            headerStyle: styles.headerStyle,
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}
const styles = StyleSheet.create({
  headerTitleStyle: stylesDefault.headerTitleStyle,

  headerStyle: stylesDefault.headerStyle,
});
