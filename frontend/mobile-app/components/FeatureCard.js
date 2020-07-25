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
        <SafeAreaView>
        <TouchableOpacity activeOpacity={.95} style ={styles.container} onPress={HandlePress}>
                    <Text style = {styles.title}>{category}</Text>
        </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop:50,
        borderRadius:10,
        height:height/3,
        width:width*.9,
        borderWidth:1,
        borderColor: '#e5e6e9',
        justifyContent:'flex-start',
        alignItems:'flex-start',
        overflow:'hidden',
        flex:1,
        backgroundColor:'#2E5F85',
        
    },
    title:{
        color:'#fff',
        fontSize:30,
        paddingTop:30,
        paddingLeft:30,
        fontWeight:'bold',
    },
    extras:{
       
    },
    profile:{
       
    },
    info:{
        color:'#9E9EA7'
    },

  });