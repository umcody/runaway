import React, { PureComponent } from 'react'
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Dimensions,
    Image,
    Text,
    SafeAreaView,
  } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
const {width,height}= Dimensions.get('window') 
/*Blog post element
This goes into the flatlist
Each post shows the author and title*/
export default function FeatureCard({category,HandlePress}){
    return(
        <View style={{elevation:2,
            shadowOffset: {
            width: 0,
            height: 1,
            },
            shadowOpacity: 0.2,
            shadowRadius: 4,}}>
        <TouchableOpacity activeOpacity={.95} style ={styles.container} onPress={HandlePress}>
                    <Text style = {styles.title}>{category}</Text>
        </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop:16,
        borderRadius:10,
        height:height/4,
        width:width*.9,
        borderWidth:0,
        justifyContent:'center',
        alignItems:'flex-start',
        overflow:'hidden',
        flex:1,
        backgroundColor:'#ACDAFF',
        
    },
    title:{
        color:'#000',
        fontSize:21,
        
        paddingLeft:30,
        
    },
    extras:{
       
    },
    profile:{
       
    },
    info:{
        color:'#9E9EA7'
    },

  });