import React, { Component } from 'react'
import { StyleSheet, View ,Text,SafeAreaView,Dimensions,Image} from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import BlogFeed from '../screens/BlogFeed';
import BlogScreen from '../screens/BlogScreen';
import { Ionicons,Feather} from "@expo/vector-icons";
// stack nav for blog post to blog page 
//for now this is used as the homepage
export default function BlogNav({navigation}){
    const Stack = createStackNavigator();
    //header logo
    function LogoTitle() {
      return (
        <Image source={require('../assets/RunawayLogo.png')} resizeMode="contain" style={{ width: 60}}/>
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
              style={{ paddingLeft: 25 }}
              onPress={() => navigation.openDrawer()}
              name="menu"
              size={30}
              color="#FF9EDA"
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
    elevation:0
  },
});