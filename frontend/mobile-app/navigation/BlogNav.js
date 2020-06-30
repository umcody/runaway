import React, { Component } from 'react'
import { StyleSheet, View ,Text,SafeAreaView} from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import BlogFeed from '../screens/BlogFeed';
import BlogScreen from '../screens/BlogScreen';

export default function BlogNavigator(){
    const Stack = createStackNavigator();
    return (
        <View style = {styles.container}>
            <Stack.Navigator>
            <Stack.Screen
          name="Feed"
          component={BlogFeed}
          options={{ title: 'Feed', headerTitleStyle: {
            color: '#000F1E',
          },}}
        />
        <Stack.Screen name="Blog" component={BlogScreen} />
            </Stack.Navigator>
       </View>
        
    )
}
const styles = StyleSheet.create({
	container: {
    flex:1,

	},
});