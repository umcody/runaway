import React, { useState } from 'react'
import { SafeAreaView, Text, View, StyleSheet,Image,ActivityIndicator,ImageBackground} from "react-native";
import {TouchableOpacity,ScrollView } from 'react-native-gesture-handler';
import { Ionicons,MaterialCommunityIcons } from "@expo/vector-icons";
import HTML from 'react-native-render-html';
import useBlogUrl from "../components/useBlogUrl"
import { TextInput } from 'react-native-paper';
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

  function ConvertDate(date){
      var d = new Date(parseInt(date.substr(0,4)),parseInt(date.substr(6,7)),parseInt(date.substr(9,10)));
      return d.toString().substr(4,7)
  }
  return (
    <SafeAreaView style={{ flex: 1,backgroundColor:'#fff'}}>
      <ScrollView style={{ flex: 1, }} contentContainerStyle={{alignItems:'flex-start'}}>
        {/* loading indicator if the page is loading
        else show html content from database, uses HTML parser to convert into jsx*/}
        {loading ? <ActivityIndicator /> : <View>
          <ImageBackground source={{uri:blog.imageURL}} style={{width:"100%",height:250,resizeMode:'contain'}}>
          <TouchableOpacity onPress={()=>navigation.goBack()} style={styles.back}>
              <Ionicons name="ios-arrow-back" size={32} color="white" style={styles.shadow} />
          </TouchableOpacity>
          </ImageBackground>
          <Text style={styles.title}>{blog.title}</Text>
          <View style={{flexDirection:'row'}}>
            <Text style={styles.author}>{blog.author}</Text>
            <MaterialCommunityIcons name="feather" size={18} color="#FF9EDA" style={{paddingHorizontal:5,marginTop:3}} />
            <Text style={styles.author}>{(ConvertDate(blog.date))}</Text>
            <Text style={styles.author}>{blog.readTime} min read</Text>
          </View>
          <HTML html={blog.content} containerStyle={styles.content} /> 
        </View>}
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
    paddingBottom:10
  },
  author: {
    paddingTop: 5,
    paddingLeft: 20,
    fontSize:14
  },
  content: {
    paddingTop: 20,
    paddingLeft: 20,
  },
  back:{
    width:35,height:35,
    marginLeft:20,marginTop:"15%", 
  },
  shadow:{
    position: 'absolute', zIndex:1,shadowColor: 'black',
    shadowOpacity: 0.5,
    textShadowRadius: 4,
    textShadowOffset: {
        width: 2,
        height: 2,  
    },
  }
});
