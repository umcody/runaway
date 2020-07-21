import React, { useState } from 'react'
import { SafeAreaView, Text, View, StyleSheet,Image,ActivityIndicator,ImageBackground} from "react-native";
import {TouchableOpacity,ScrollView } from 'react-native-gesture-handler';
import { Ionicons } from "@expo/vector-icons";
import HTML from 'react-native-render-html';
import useBlogUrl from "../components/useBlogUrl"
// shows the blog page 
export default function BlogScreen({navigation,route}) {
  //sends in url prop
  const {url} = route.params;
  //get request to obtain blog object
  const {
    blog,
    loading,
    error
    }  = useBlogUrl(url)

  return (
    <SafeAreaView style={{ flex: 1,backgroundColor:'#fff'}}>
      <ScrollView style={{ flex: 1, }} contentContainerStyle={{alignItems:'baseline'}}>
      <ImageBackground source={{uri:blog.imageURL}} style={{width:"100%",height:250,resizeMode:'contain'}}>
        <TouchableOpacity onPress={()=>navigation.goBack()} style={{width:35,height:35,marginLeft:20,marginTop:20}}>
            <Ionicons name="ios-arrow-back" size={35} color="black" style={{ position: 'absolute', zIndex:1}} />
        </TouchableOpacity>
        </ImageBackground>
        <Text style={styles.title}>{blog.title}</Text>
        <Text style={styles.author}>by {blog.author}</Text>
        {/* loading indicator if the page is loading
        else show html content from database, uses HTML parser to convert into jsx*/}
        {loading ? <ActivityIndicator /> : <HTML html={blog.content} containerStyle={styles.content} /> }
      </ScrollView>
      <Text>{error && 'Server Connection Error'}</Text>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  title: {
    fontSize:30,
    fontWeight:'bold',
    paddingTop:20,
    paddingLeft: 20,
  },
  author: {
    paddingTop: 5,
    paddingLeft: 20,
  },
  content: {
    paddingTop: 20,
    paddingLeft: 20,
  },
});
