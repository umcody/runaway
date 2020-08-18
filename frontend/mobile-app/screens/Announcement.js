import React from 'react'
import { SafeAreaView, Text, StyleSheet, ImageBackground,View} from "react-native";
import {TouchableOpacity } from 'react-native-gesture-handler';
import { Feather } from "@expo/vector-icons";
import {colors, fonts, padding,margin, icon} from '../style/styleValues.js'
// shows the announcement page 
export default function Announcement({navigation,route}) {
  //sends in url prop
  const {item} = route.params;
  //get request to obtain blog object

  return (
    <View style={styles.container}>
        <ImageBackground source={{uri:item.image}} style={{flex:1}} resizeMode="cover" blurRadius={50}>
            <ImageBackground source={{uri:item.image}} style={styles.image} resizeMode="contain">
                    <TouchableOpacity onPress={()=>navigation.popToTop()} style={styles.back}>
                            <Feather name="x" size={icon.lg} color={colors.background}/>
                    </TouchableOpacity>
                    <View style={{justifyContent:'center'}}>
                        <Text style={styles.title}>{item.name}</Text>
                        <Text style={styles.content}>{item.content}</Text>
                    </View>
            </ImageBackground>
        </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
    container:{ 
        flex: 1,
        backgroundColor:colors.background,
    },
    title: {
        fontSize:fonts.lg,
        fontFamily:fonts.mainBold,
        paddingTop:padding.md,
        paddingLeft: padding.md,
        paddingBottom:padding.sm,
        color:colors.background
    },
    image:{
        flex:1,
        alignItems:'flex-start'
    },
    content: {
        fontSize:fonts.md,
        fontFamily:fonts.text,
        paddingTop: padding.md,
        paddingLeft: padding.md,
        color:colors.background
    },
    back:{
        width:icon.lg,height:icon.lg,
        marginLeft:margin.md,marginTop:margin.lg, 
    },
});
