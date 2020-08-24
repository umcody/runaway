import React from 'react';
import { StyleSheet, Text, View, Dimensions,Linking } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {colors, fonts, padding, dimensions,margin,borderRadius, icon} from '../style/styleValues.js'
import * as WebBrowser from "expo-web-browser";
import { LinearGradient } from "expo-linear-gradient";

// card for each resource
const NewsCard = ({item}) => {
    return (
        <View style={styles.container}>
            
            <TouchableOpacity 
            style={{elevation:2,
                shadowOffset: {
                width: 0,
                height: 1.5,
                },
                shadowOpacity: 0.2,
                shadowRadius: 1,}}

                onPress={() => {
                    WebBrowser.openBrowserAsync("https://www." +item.url)
                  }}>
                <LinearGradient start={[0, 0.5]}
                  end={[1, 0.5]}
                  colors={['#ACDAFF', '#FF9EDA','#E3F1FC']}
                  style={{borderRadius: 10,marginVertical:margin.sm}}>
                      <View style={styles.cardView}>
                        <Text style={styles.title}>{item.title}</Text>                
                      </View>       
                  </LinearGradient>      
            </TouchableOpacity>           
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.background,        
        alignItems: 'center',
        flex:1,
    },
    cardView: {
        backgroundColor: colors.background,
        margin: 1,
        borderRadius: 10,
        borderWidth: 0,
        width: dimensions.fullWidth* .9,
        height: dimensions.fullHeight/6,
        backgroundColor:colors.background,
        justifyContent:'center',
        paddingLeft:padding.sm,
        paddingRight:padding.sm
    },
    title: {
        width: dimensions.fullWidth* .85,
        color: colors.foreground,
        fontSize: fonts.md,
        fontFamily: fonts.text,
        flexWrap:'wrap',
        flexShrink:1,   
    },  
  });
  
export default NewsCard