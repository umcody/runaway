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
import {colors, fonts, padding, dimensions,margin,borderRadius, icon} from '../style/styleValues.js'

/*Blog post element
This goes into the flatlist
Each post shows the author and title*/
export default function BlogPost({title,author,date,readTime,imageURL,HandlePress}){

    function ConvertDate(date){
        var d = new Date(parseInt(date.substr(0,4)),parseInt(date.substr(6,7)),parseInt(date.substr(9,10)));
        return d.toString().substr(4,7)
    }
    return(
        <View style={{marginBottom:padding.sm}}>
            <TouchableOpacity activeOpacity={.6} style ={styles.container} onPress={HandlePress}>
                <View style = {styles.text}>
                        <Text numberOfLines={2} style = {styles.title}>{title}</Text>
                            <View style={{flexDirection:'row'}}>
                                <Text style = {styles.info}>{author}</Text>
                                <MaterialCommunityIcons name="feather" size={14} color={colors.button} />
                                <Text style ={styles.info}>· {readTime} min</Text>
                            </View>
                            <Text style={styles.info}>{ConvertDate(date)}</Text>
                </View>
                <View style={styles.image}>
                    <Image source={{uri:imageURL}} style={{flex:1,height:undefined,width:undefined,borderRadius:borderRadius.sm}}/>
                </View>             
        </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height:(dimensions.fullHeight >800) ? dimensions.fullHeight/8.5: dimensions.fullHeight/6.7,
        width:dimensions.fullWidth*.9,
        borderWidth:0,
        overflow:'hidden',
        flexDirection:'row',
        flex:1
    },
    text:{
        backgroundColor:colors.background,
        flex:3,
        paddingRight:padding.sm,
        flexDirection:'column',
    },
    title:{
        color:colors.foreground,
        fontSize:fonts.sm,
        fontFamily:fonts.subheader,
        lineHeight:fonts.mdLineHeight,
        paddingBottom:padding.sm,
        flexWrap:'wrap',
        flexShrink:1,
        
    },
    info:{
        
        color:colors.foreground,
        fontFamily:fonts.text,
        fontSize:fonts.sm-2
    },
    image: {
        flex:1,
        width:83,
        height:83,
        borderRadius:borderRadius.sm
      },
  });
  