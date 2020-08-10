import React from 'react'
import { SafeAreaView, Text, View, StyleSheet,ActivityIndicator,ImageBackground, Image} from "react-native";
import {TouchableOpacity,ScrollView } from 'react-native-gesture-handler';
import { Feather } from "@expo/vector-icons";
import HTML from 'react-native-render-html';
import useBlogUrl from "../components/useBlogUrl"
import {colors, fonts, padding, dimensions,margin, icon,borderRadius} from '../style/styleValues.js'

// shows the announcement page 
export default function Announcement({navigation,route}) {
  //sends in url prop
  const {item} = route.params;
  //get request to obtain blog object

  return (
    <SafeAreaView style={styles.container}>
        <TouchableOpacity onPress={()=>navigation.navigate('Feed')} style={styles.back}>
                <Feather name="x" size={icon.lg} color={colors.foreground}/>
        </TouchableOpacity>
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.content}>{item.content}</Text>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
    container:{ 
        flex: 1,
        backgroundColor:colors.secondary,
    },
    title: {
        fontSize:fonts.lg,
        fontFamily:fonts.main,
        paddingTop:padding.md,
        paddingLeft: padding.md,
        paddingBottom:padding.sm,
        color:colors.foreground
    },
    image:{
        height:250,width:'100%',
        alignItems:'flex-end'
    },
    content: {
        fontSize:fonts.md,
        fontFamily:fonts.text,
        paddingTop: padding.md,
        paddingLeft: padding.md,
        color:colors.foreground
    },
    back:{
        width:icon.lg,height:icon.lg,
        marginLeft:margin.md,marginTop:margin.md, 
    },
});
