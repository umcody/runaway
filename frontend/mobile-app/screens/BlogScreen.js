import React, { useState } from 'react'
import { SafeAreaView, Text, View, StyleSheet,Image,ActivityIndicator,ImageBackground,StatusBar,} from "react-native";
import {TouchableOpacity,ScrollView } from 'react-native-gesture-handler';
import { Ionicons,MaterialCommunityIcons } from "@expo/vector-icons";
import HTML from 'react-native-render-html';
import useBlogUrl from "../components/useBlogUrl"
import {colors, fonts, padding, dimensions,margin,borderRadius, icon} from '../style/styleValues.js'
import { color } from 'react-native-reanimated';
import { createIconSet } from 'react-native-vector-icons';
import { Colors } from 'react-native/Libraries/NewAppScreen';

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


  // creates time object and returns string format
  function ConvertDate(date){
      var d = new Date(parseInt(date.substr(0,4)),parseInt(date.substr(6,7)),parseInt(date.substr(9,10)));
      return d.toString().substr(4,7)
  }
  
  return (
    <SafeAreaView style={{ flex: 1,backgroundColor:colors.background}}>
      <ScrollView style={{ flex: 1, }} contentContainerStyle={{flex:1,alignItems:'flex-start'}}>
        {/* loading indicator if the page is loading
        else show html content from database, uses HTML parser to convert into jsx*/}
        {loading ? <ActivityIndicator /> : <View>
          <ImageBackground source={{uri:blog.imageURL}} style={styles.image}>
          <TouchableOpacity onPress={()=>navigation.goBack()} style={styles.back}>
              <Ionicons name="ios-arrow-back" size={icon.lg} color={colors.background} style={styles.shadow} />
          </TouchableOpacity>
          </ImageBackground>
          <Text style={styles.title}>{blog.title}</Text>
          <View style={{flexDirection:'row'}}>
            <Text style={styles.author}>{blog.author}</Text>
            <MaterialCommunityIcons name="feather" size={icon.xs} color={colors.button} />
            <Text style={styles.author}>{(ConvertDate(blog.date))}</Text>
            <Text style={styles.author}>{blog.readTime} min read</Text>
          </View>
          <HTML baseFontStyle= {{color: colors.foreground,fontFamily:fonts.text, fontSize:fonts.sm}} html={blog.content} containerStyle={styles.content} /> 
        </View>}
      </ScrollView>
      <Text>{error && 'Server Connection Error'}</Text>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  title: {
    fontSize:fonts.lg,
    fontFamily:fonts.main,
    paddingTop:padding.md,
    paddingLeft: padding.md,
    paddingBottom:padding.sm
  },
  image:{
    width:dimensions.fullWidth,
    height:dimensions.fullHeight*.4,
    resizeMode:'contain'
  },
  author: {
    fontFamily:fonts.text,
    paddingTop: 5,
    paddingLeft: 20,
    fontSize:fonts.sm,
  },
  content: {
    paddingTop: 20,
    paddingLeft: 20,
  },
  back:{
    width:icon.lg,height:icon.lg,
    marginLeft:margin.md,marginTop:margin.lg, 
  },
  shadow:{
    position: 'absolute', zIndex:1,
    shadowOpacity: 0.3,
    textShadowRadius: 4,
    textShadowOffset: {
        width: 0,
        height: 2,  
    },
  }
});
