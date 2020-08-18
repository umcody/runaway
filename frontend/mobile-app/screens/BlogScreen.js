import React from 'react'
import { SafeAreaView, Text, View, StyleSheet,ActivityIndicator,ImageBackground} from "react-native";
import {TouchableOpacity,ScrollView } from 'react-native-gesture-handler';
import { Ionicons,MaterialCommunityIcons } from "@expo/vector-icons";
import HTML from 'react-native-render-html';
import useBlogUrl from "../components/useBlogUrl"
import {colors, fonts, padding, dimensions,margin, icon} from '../style/styleValues.js'

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
    var d = new Date(parseInt(date.substr(0,5)),parseInt(date.substr(5,7))-1,parseInt(date.substr(8,10)));
    return d.toDateString().substr(0,10)
}
  
  return (
    <SafeAreaView style={{ flex: 1,backgroundColor:colors.background}}>
      <ScrollView style={{ flex: 1, }} contentContainerStyle={{flex:1,alignItems:'flex-start'}}>
        {/* loading indicator if the page is loading
        else show html content from database, uses HTML parser to convert into jsx*/}
        {loading ? <ActivityIndicator /> : <View>
          <ImageBackground source={{uri:blog.imageURL}} style={styles.image}>
          <View style={{flex:1,backgroundColor:"rgba(0, 0, 0, 0.1)"}}>
          <TouchableOpacity onPress={()=>navigation.navigate('Feed')} style={styles.back}>
              <Ionicons name="ios-arrow-back" size={icon.lg} color={colors.background} />
          </TouchableOpacity>
          </View>
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
    fontFamily:fonts.mainBold,
    paddingTop:padding.md,
    paddingLeft: padding.md,
    paddingBottom:padding.sm,
    color:colors.foreground
  },
  image:{
    width:dimensions.fullWidth,
    height:dimensions.fullHeight*.4,
    resizeMode:'contain'
  },
  author: {
    fontFamily:fonts.subheader,
    paddingTop: padding.sm,
    paddingLeft: padding.md,
    fontSize:fonts.sm,
    color:colors.foreground,
  },
  content: {
    paddingTop: padding.md,
    paddingLeft: padding.md,
  },
  back:{
    width:icon.lg,height:icon.lg,
    marginLeft:margin.md,marginTop:margin.lg, 
  },

});
