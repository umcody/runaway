import React from 'react';
import { StyleSheet, Text, View, Dimensions,Linking } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {colors, fonts, padding, dimensions,margin,borderRadius, icon} from '../style/styleValues.js'






import * as WebBrowser from "expo-web-browser";


const HotlineCard = ({hotline}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.cardView}
                onPress={() => {
                    WebBrowser.openBrowserAsync("https://www." +item.url)
                  }}>
                <Text style={styles.title}>{hotline.title}</Text>
                <Text style={styles.title}>{hotline.phoneNumber}</Text>
                <Text style={styles.title}>{hotline.textNumber}</Text>                
                <Text style={styles.title}>{hotline.website}</Text>
                <Text style={styles.title}>{hotline.meantFor}</Text>
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
        margin: margin.sm,
        borderRadius: 10,
        borderWidth: 0,
        width: dimensions.fullWidth* .9,
        height: dimensions.fullHeight/6,
        backgroundColor:colors.primary,
        justifyContent:'center',
        paddingLeft:padding.sm,
        elevation:2,
        shadowOffset: {
        width: 0,
        height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        },
    title: {
        width: dimensions.fullWidth,
        color: colors.foreground,
        fontSize: fonts.md,
        fontFamily: fonts.text
    },
  });

export default HotlineCard