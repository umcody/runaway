import React, { useCallback } from "react";
import "react-native-gesture-handler";
import {
  Linking,
  StyleSheet,
  StatusBar,
  Dimensions,
  View,
  Text,
  Platform
} from "react-native";
import RunawaySvg from "../components/svgs/Runaway";
import { HomeGradient, HomeGray } from "../components/svgs/Home";
import { ChatGradient, ChatGray } from "../components/svgs/Chat";
import { ResGradient, ResGray } from "../components/svgs/Resources";
import { Ig, Fb, Twitter, Web } from "../components/svgs/Social";
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
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import Announcement from "../screens/Announcement";
import EmergencyHotlinesScreen from "../screens/OfHotline";
import ChatScreen from "../screens/ChatScreen";
// import Feels from "../screens/Feels";
import PostChatSurvey from "../screens/PostChatSurvey";
import Survey from "../screens/NewSurvey/Survey";
// import PreChatModal from "../screens/PreChatSurvey/ModalSurvey";
// import PreChatSurvey from "../screens/PreChatSurvey/Survey";
import AboutUs from "../screens/AboutUs";
import BlogNav from "../navigation/BlogNav";
import SiteMapNav from "./SiteMapNav";
import SignInPage from "../screens/SignInPage";
import ResourceNav from "./ResourceNav";

//styling
import {
  stylesDefault,
  icon,
  colors,
  dimensions,
  padding,
  fonts,
  margin,
} from "../style/styleValues";
import { TouchableOpacity } from "react-native-gesture-handler";

const BottomTabNavigation = createBottomTabNavigator();
const ChatStack = createStackNavigator();
const SettingsDrawer = createDrawerNavigator();
const AboutStack = createStackNavigator();
const RootStack = createStackNavigator();

function CustomDrawerContent(props) {
  const supported = Linking.canOpenURL("fb://page/1789760617938894");
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL("fb://page/1789760617938894");

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL("fb://page/1789760617938894");
    } else {
      Linking.openURL("https://www.facebook.com/runawayapp/");
    }
  });
  return (
    <DrawerContentScrollView {...props}>
      <View
        style={{
          flex: 1,
          backgroundColor: colors.background,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <RunawaySvg style={{ paddingVertical: 40 }} />
      </View>
      <DrawerItemList {...props} />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginTop: 50,
        }}
      >
        <TouchableOpacity
          style={styles.icon}
          onPress={() => {
            Linking.openURL("https://www.instagram.com/runaway.app/");
          }}
        >
          <Ig />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon} onPress={handlePress}>
          <Fb />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => {
            Linking.openURL("https://twitter.com/runaway_app");
          }}
        >
          <Twitter />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            WebBrowser.openBrowserAsync("https://www.runawayapp.com/");
          }}
        >
          <Web />
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
}

const BottomTab = () => {
  return (
    <BottomTabNavigation.Navigator
      tabBarOptions={{
        showLabel: false,
        inactiveTintColor: colors.primary,
        activeTintColor: colors.tertiary,
        style: {
          backgroundColor: colors.background,
          height:
            dimensions.fullHeight > 800 ? dimensions.fullHeight * 0.09 : 50,
            borderTopColor: Platform.OS ==="ios" ? colors.primary : colors.background ,
            borderTopWidth: .5 ,
            elevation: 4,
        },
      }}
    >
      <BottomTabNavigation.Screen
        name="Feed"
        component={BlogNav}
        options={{
          tabBarLabel: "Feed",
          tabBarIcon: ({ focused }) =>
            focused ? <HomeGradient /> : <HomeGray />,
        }}
      />
      <BottomTabNavigation.Screen
        name="PreChat"
        component={Chat}
        options={{
          tabBarLabel: "Chat",
          tabBarIcon: ({ focused }) =>
            focused ? <ChatGradient /> : <ChatGray />,
        }}
      />
      <BottomTabNavigation.Screen
        name="Resources"
        component={ResourceNav}
        options={{
          tabBarLabel: "Resources",
          tabBarIcon: ({ focused }) =>
            focused ? <ResGradient /> : <ResGray />,
        }}
      />
    </BottomTabNavigation.Navigator>
  );
};

const Chat = ({ navigation }) => {
  return (
    <>
      <StatusBar barStyle="dark-content" translucent={true} />
      <ChatStack.Navigator initialRouteName="Survey">
        <ChatStack.Screen
          name="Survey"
          component={Survey}
          options={{
            headerShown: false,
            headerLeft: () => (
              <HeaderBackButton
                labelVisible={false}
                onPress={() => {
                  navigation.dispatch(StackActions.replace("Survey"));
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

const  Emergency = () => {
  return (
    <AboutStack.Navigator>
      <AboutStack.Screen
        name="EmergencyResources"
          component={EmergencyHotlinesScreen}
        options={{
          title: "Emergency Resources",
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
        <SettingsDrawer.Screen name="Emergency Resources" component={Emergency} />
        {/*<SettingsDrawer.Screen name="FAQs" component={BottomTab} />*/}
        <SettingsDrawer.Screen name="Privacy Policy" component={BottomTab} />
        <SettingsDrawer.Screen name="Help" component={SiteMapNav} />
        <SettingsDrawer.Screen name="Sign In" component={SignInPage} />
      </SettingsDrawer.Navigator>
    
  );
}

export default function MyApp() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name="App"
          component={MyDrawer}
          options={{
            headerShown: false,
          }}
        />
        <RootStack.Screen
          name="Announcement"
          component={Announcement}
          options={{
            headerShown: false,
            gestureResponseDistance: { horizontal: 500 },
            cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
            gestureDirection: "vertical",
            gestureResponseDistance: dimensions.fullHeight,
            cardOverlayEnabled: true,
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
            gestureEnabled: false,
          }}
        />
        <RootStack.Screen
          name="PostSurvey"
          component={PostChatSurvey}
          options={{ headerShown: false, gestureEnabled: false }}
        />





        <RootStack.Screen
          name="Emergency Resources"
          component={Emergency}
          options={{
            title: "Emergency Resources",
            headerShown: false
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  headerTitleStyle: stylesDefault.headerTitleStyle,
  headerStyle: stylesDefault.headerStyle,
  icons: {
    marginTop: 100,
  },
});
