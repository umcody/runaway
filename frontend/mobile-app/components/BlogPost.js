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
            <TouchableOpacity activeOpacity={.8} style ={styles.container} onPress={HandlePress}>
            <View style = {styles.text}>
                    <Text style = {styles.title}>{title}</Text>
                    <View style = {styles.extras}>
                        <View style={{flexDirection:'row'}}>
                            <Text style = {styles.info}>{author}</Text>
                            <MaterialCommunityIcons name="feather" size={14} color={colors.button} />
                            <Text style ={styles.info}>· {readTime} min</Text>
                        </View>
                        <Text style={styles.info}>{ConvertDate(date)}</Text>
                        <AntDesign name="ellipsis1" size={icon.md} color={colors.foreground} />
                    </View>
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
        height:(dimensions.fullHeight >800) ? dimensions.fullHeight/7: dimensions.fullHeight/5,
        width:dimensions.fullWidth*.9,
        borderWidth:0,
        justifyContent:'space-between',
        overflow:'hidden',
        flexDirection:'row',
    },
    text:{
        backgroundColor:colors.background,
    },
    title:{
        color:colors.foreground,
        fontSize:fonts.md,
        fontFamily:fonts.subheader,
        lineHeight:fonts.mdLineHeight,
        paddingBottom:padding.sm,
    },
    extras:{
       flex:1
    },
    info:{
        color:colors.foreground,
        paddingRight:padding.sm,
        paddingBottom:padding.sm,
        fontFamily:fonts.text,
        fontSize:fonts.sm
    },
    image: {
        width:100,
        height:100,
        borderRadius:borderRadius.sm
      },
  });
  