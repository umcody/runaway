import React, { Component } from 'react'
import { StyleSheet, View ,Text,SafeAreaView,Dimensions} from "react-native";
import { createStackNavigator,CardStyleInterpolators} from '@react-navigation/stack';
import FeaturePage from '../screens/FeaturePage';
import SiteMap from '../screens/SiteMap';
import FAQ from '../screens/FAQ';
import {Feather,Ionicons} from "@expo/vector-icons";
import {colors, fonts, padding, dimensions,margin,borderRadius, icon} from '../style/styleValues.js'

// stack nav for feature cards
export default function SiteMapNav({navigation}){
    const Stack = createStackNavigator();
    return (
        <View style = {styles.container}>
            <Stack.Navigator mode="modal">
            <Stack.Screen
          name="SiteMap"
          component={SiteMap}
          options={{ title: 'App Features', headerTitleStyle: styles.headerTitleStyle, headerStyle:styles.headerStyle,
          headerLeft: () => (
            <Ionicons name="ios-arrow-back" size={icon.md} color={colors.background} style={{ paddingLeft: padding.md }} onPress={() => navigation.goBack()}/>
          ),}}
        />
        <Stack.Screen name="Features" component={FeaturePage}
        options={{cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,gestureDirection:'vertical',
        gestureResponseDistance:dimensions.fullHeight/2,headerShown:false,cardOverlayEnabled:true,
        }} />
        <Stack.Screen
          name="FAQ"
          component={FAQ}
        />
            </Stack.Navigator>
       </View>
        
    )
}

const styles = StyleSheet.create({
	container: {
    flex:1,
    },
    headerTitleStyle: {
      fontFamily: fonts.main,
      fontSize: fonts.lg,
      lineHeight: fonts.lgLineHeight,
      color: colors.background,
        
      },
      headerStyle: {
        borderBottomWidth: 0,
        shadowColor: colors.tertiary,
        borderBottomColor:colors.tertiary,
        backgroundColor: colors.tertiary,
        height:dimensions.fullHeight/8,
        elevation:2,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 3.84,
      },
});