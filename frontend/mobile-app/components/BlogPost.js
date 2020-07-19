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
  import { MaterialCommunityIcons,AntDesign } from '@expo/vector-icons'; 
  
const {width,height}= Dimensions.get('window') 
/*Blog post element
This goes into the flatlist
Each post shows the author and title*/
export default function BlogPost({title,author,HandlePress}){
    return(
        <SafeAreaView>
            <TouchableOpacity activeOpacity={.8} style ={styles.container} onPress={HandlePress}>
            <View style = {styles.text}>
                        <Text style = {styles.title}>{title}</Text>
                        <View style = {styles.extras}>
                            <View style={{flexDirection:'row'}}>
                                <Text style = {styles.info}>{author}</Text>
                                <MaterialCommunityIcons name="feather" size={14} color="#FF9EDA" />
                                <Text style ={styles.info}> • 3 min</Text>
                            </View>
                            <Text style={styles.info}>Date</Text>
                            <AntDesign name="ellipsis1" size={30} color="#2E5F85" />
                        </View>
                    </View>
            <View style={styles.image}>
                <Image source={require("../images/sample.jpg")} style={{flex:1,height:undefined,width:undefined,borderRadius:10}}/>
            </View>             
        </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        height:height/5,
        width:width*.9,
        borderWidth:1,
        borderColor: '#fff',
        justifyContent:'space-between',
        alignItems:'flex-start',
        overflow:'hidden',
        flexDirection:'row'
    },
    text:{
        backgroundColor:'#fff',
        
        paddingBottom:15,
    },
    title:{
        color:'#2E5F85',
        fontSize:20,
        paddingBottom:10,
    },
    extras:{
       
    },
    profile:{
       
    },
    info:{
        color:'#2E5F85',
        paddingRight:5,
        paddingBottom:5
    },
    image: {
        width:100,
        height:100,
        borderRadius:30
        
      },
  });
  