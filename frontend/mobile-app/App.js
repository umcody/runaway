import React, {useState,useEffect} from "react";
import Navigation from "./navigation/index";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {StatusBar} from "react-native";
import * as Font from 'expo-font'
import {AppLoading} from 'expo'
import {colors} from "./style/styleValues"
import * as  Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';
import data from './Notifications';

// handler to show notification from requests
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});
// cancel all scheduled notifs so no duplicate notifications occur
Notifications.cancelAllScheduledNotificationsAsync();
// get a random quote
const randIndex = Math.floor(Math.random() * data.length);
const notif = data[randIndex]
// schedule a daily notif
Notifications.scheduleNotificationAsync({
  content: {
    title: "Runaway",
    body: notif,
  },
  trigger: {
    hour: 20,
    minute: 36,
    repeats: true,
  },
});

// load fonts before app is shown
async function getFonts(){
  await Font.loadAsync({
    "Lato": require('./assets/fonts/Lato-Regular.ttf'),
    "Lato-Black": require("./assets/fonts/Lato-Black.ttf"),
    "Raleway": require('./assets/fonts/Raleway-Medium.ttf'),
    "Raleway-Bold": require('./assets/fonts/Raleway-Bold.ttf'),
    "Avenir": require('./assets/fonts/Avenir-Book.otf')
  })
}

export default function App() {
  const [fontLoaded,setFontLoaded] =useState(false);
  // get notification permissions.
  useEffect(() => {
    getPushNotificationPermissions();

  });
  const getPushNotificationPermissions = async () => {
    const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
    let finalStatus = existingStatus;

    // only ask if permissions have not already been determined, because
    // iOS won't necessarily prompt the user a second time.
    if (existingStatus !== 'granted') {
      // Android remote notification permissions are granted during the app
      // install, so this will only ask on iOS
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      finalStatus = status;
    }

    // Stop here if the user did not grant permissions
    if (finalStatus !== 'granted') {
      return;
    }
    console.log(finalStatus)

  }
// makes sure fonts are loaded
  if (fontLoaded){
    return (
      <SafeAreaProvider>
         <StatusBar barStyle="dark-content" backgroundColor={colors.background} translucent={true} />
        <Navigation/>
      </SafeAreaProvider>
    )
  }
  else {
  return(<AppLoading startAsync = {getFonts} onFinish={()=> setFontLoaded(true)}/>)
    }
    
}