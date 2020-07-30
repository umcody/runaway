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
import { dimensions, margin, borderRadius,colors, padding, fonts } from '../style/styleValues';
 
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
        marginTop:margin.md,
        borderRadius:borderRadius.sm,
        height:(dimensions.fullHeight >800) ? dimensions.fullHeight/5: dimensions.fullHeight/4,
        width:dimensions.fullWidth*.9,
        borderWidth:0,
        justifyContent:'center',
        alignItems:'flex-start',
        overflow:'hidden',
        flex:1,
        backgroundColor:colors.primary,
        
    },
    title:{
        color:colors.foreground,
        fontFamily:fonts.main,
        fontSize:fonts.lg,
        paddingLeft:padding.lg,
        
    },
  });