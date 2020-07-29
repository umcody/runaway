import React, { Component } from 'react'
import { StyleSheet, View ,Text,SafeAreaView,Dimensions,Image} from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import BlogFeed from '../screens/BlogFeed';
import BlogScreen from '../screens/BlogScreen';
import { Ionicons,Feather} from "@expo/vector-icons";
import {colors, fonts, padding, dimensions,margin,borderRadius, icon} from '../style/styleValues.js'

// stack nav for blog post to blog page 
//for now this is used as the homepage
export default function BlogNav({navigation}){
    const Stack = createStackNavigator();
    //header logo
    function LogoTitle() {
      return (
        <Image source={require('../assets/RunawayLogo.png')} resizeMode="contain" style={{ width: 55}}/>
      );
    }
    return (
        <View style = {styles.container}>
            <Stack.Navigator>
            <Stack.Screen
          name="Feed"
          component={BlogFeed}
          options={{ title: "Blogs", headerTitleStyle: styles.headerTitleStyle,
          headerStyle: styles.headerStyle,
          headerTitleAlign: "center",
          headerTitle: props => <LogoTitle {...props} /> ,
          headerLeft: () => (
            <Feather
              style={{ paddingLeft: padding.md,paddingTop:padding.sm }}
              onPress={() => navigation.openDrawer()}
              name="menu"
              size={icon.sm}
              color={colors.foreground}
            />
            
          ),
              }}
            />
        <Stack.Screen name="Blog" component={BlogScreen} options={{ headerShown:false, gestureResponseDistance:{horizontal: 500}
          }}/>
            </Stack.Navigator>
       </View>
        
    )
}
const windowH = Dimensions.get("window").height;
const styles = StyleSheet.create({
	container: {
    flex:1,
  },
  headerStyle: {
    borderBottomWidth: 0,
    shadowColor: "#ACDAFF",
    backgroundColor: "#fff",
    height: windowH / 8,
    borderBottomColor: "#ACDAFF",
    elevation:2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});