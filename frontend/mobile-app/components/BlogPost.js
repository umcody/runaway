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
export default function BlogPost({title,author,date,readTime,imageURL,HandlePress}){

    function ConvertDate(date){
        var d = new Date(parseInt(date.substr(0,4)),parseInt(date.substr(6,7)),parseInt(date.substr(9,10)));
        return d.toString().substr(4,7)
    }
    return(
        <View>
            <TouchableOpacity activeOpacity={.8} style ={styles.container} onPress={HandlePress}>
            <View style = {styles.text}>
                    <Text style = {styles.title}>{title}</Text>
                    <View style = {styles.extras}>
                        <View style={{flexDirection:'row'}}>
                            <Text style = {styles.info}>{author}</Text>
                            <MaterialCommunityIcons name="feather" size={14} color="#FF9EDA" />
                            <Text style ={styles.info}>{readTime}</Text>
                        </View>
                        <Text style={styles.info}>{ConvertDate(date)}</Text>
                        <AntDesign style={{position:'absolute',bottom:0}}name="ellipsis1" size={30} color="#2E5F85" />
                    </View>
            </View>
            <View style={styles.image}>
                <Image source={{uri:imageURL}} style={{flex:1,height:undefined,width:undefined,borderRadius:10}}/>
            </View>             
        </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height:height/5.5,
        width:width*.9,
        borderWidth:1,
        borderColor: '#fff',
        justifyContent:'space-between',
        overflow:'hidden',
        flexDirection:'row'
    },
    text:{
        backgroundColor:'#fff',
    },
    title:{
        color:'#2E5F85',
        fontSize:20,
        paddingBottom:10,
        fontWeight:'bold'
    },
    extras:{
       flex:1
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
        borderRadius:20
        
      },
  });
  