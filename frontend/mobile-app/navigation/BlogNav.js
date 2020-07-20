import React, { Component } from 'react'
import { StyleSheet, View ,Text,SafeAreaView,Dimensions} from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import BlogFeed from '../screens/BlogFeed';
import BlogScreen from '../screens/BlogScreen';
// stack nav for blog post to blog page
export default function BlogNavigator(){
    const Stack = createStackNavigator();
    return (
        <View style = {styles.container}>
            <Stack.Navigator>
            <Stack.Screen
          name="Feed"
          component={BlogFeed}
          options={{ title: 'Blogs', headerTitleStyle: styles.headerTitleStyle,
          headerStyle: styles.headerStyle
          }}
        />
        <Stack.Screen name="Blog" component={BlogScreen} options={{ headerShown:false, gestureResponseDistance:{horizontal: 500}
          }}/>
            </Stack.Navigator>
       </View>
        
    )
}
const windowW = Dimensions.get("window").width;
const windowH = Dimensions.get("window").height;
const styles = StyleSheet.create({
	container: {
    flex:1,
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
});