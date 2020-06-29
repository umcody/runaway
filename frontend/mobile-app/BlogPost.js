import React, { PureComponent } from 'react'
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Dimensions,
    Image,
    Text,
    ImageBackground,
    SafeAreaView
  } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
const {width,height}= Dimensions.get('window') 

export default function BlogPost({title,author,HandlePress}){
    
    
    
    
    return(
        <SafeAreaView>
        <TouchableOpacity  style ={styles.container} onPress={HandlePress}>
        <Image source={require("./images/sample.jpg")} style={styles.image} imageStyle={{ borderRadius: 30 }}/>
                <View style = {styles.footer}>
                    <Text style = {styles.title}>{title}</Text>
                    <View style = {styles.extras}>
                        <Text style = {styles.info}>{author}</Text>
                    </View>
                </View>
        </TouchableOpacity>
        <FontAwesome name="heart-o" size={22} color="black" style ={{paddingLeft:20,paddingTop:5}} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop:50,
        borderRadius:30,
        height:height/3,
        width:width*.9,
        borderWidth:1,
        borderColor: '#e5e6e9',
        justifyContent:'flex-end',
        alignItems:'flex-start',
        overflow:'hidden'
        
    },
    footer:{
        backgroundColor:'#fff',
        width:'100%',
        paddingLeft:20,
        paddingTop:10,
        height:'30%',
        paddingBottom:25,
    },
    title:{
        color:'#000',
        fontSize:20,
        paddingBottom:10,
    },
    extras:{
       
    },
    profile:{
       
    },
    info:{
        color:'#9E9EA7'
    },
    image: {
        
        resizeMode: "contain",
        
      },
  });
  