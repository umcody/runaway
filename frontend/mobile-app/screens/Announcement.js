import React from 'react'
import { SafeAreaView, Text, StyleSheet, ImageBackground,View,StatusBar,Platform} from "react-native";
import {TouchableOpacity } from 'react-native-gesture-handler';
import { Feather } from "@expo/vector-icons";
import {colors, fonts, padding,margin, icon, dimensions} from '../style/styleValues.js'
import { useIsFocused } from '@react-navigation/native';
import HTML from 'react-native-render-html';

function FocusAwareStatusBar(props) {
    const isFocused = useIsFocused();
      
    return isFocused ? <StatusBar {...props} backgroundColor="transparent"/> : null;
  }
// shows the announcement page 
export default function Announcement({navigation,route}) {
  //sends in url prop
  const {item} = route.params;
  //get request to obtain blog object

  return (
    <View style={styles.container}>
        {(Platform.OS ==="android") ? <FocusAwareStatusBar barStyle="light-content" />
        : <FocusAwareStatusBar hidden/>}
        <ImageBackground source={{uri:item.image}} style={{flex:1}} resizeMode="cover" blurRadius={90}>
            <ImageBackground source={{uri:item.image}} style={styles.image} resizeMode="contain">
                    <TouchableOpacity onPress={()=>navigation.goBack()} style={styles.back}>
                            <Feather name="x" size={icon.lg} color={colors.background}/>
                    </TouchableOpacity>
                    <View style={{paddingTop:100,justifyContent:'center', alignItems:'center'}}>
                        <Text style={styles.title}>{item.name}</Text>
                        <HTML baseFontStyle= {{color: colors.background,fontFamily:fonts.text, fontSize:30}} html={item.content} containerStyle={styles.content} />
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
        fontSize:50,
        fontFamily:fonts.mainBold,
        paddingTop:padding.md,
        //paddingLeft: padding.md,
        paddingBottom:padding.sm,
        color:colors.background,
    },
    image:{
        flex:1,
        alignItems:'flex-start'
    },
    content: {
        //paddingLeft: padding.md,
        width:dimensions.fullWidth,
        justifyContent:'center',
        alignItems:'center'
    },
    back:{
        width:icon.lg,height:icon.lg,
        marginLeft:margin.md,marginTop:margin.lg, 
    },
});
