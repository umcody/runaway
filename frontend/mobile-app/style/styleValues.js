import React from "react";
import {StyleSheet, Dimensions} from 'react-native'
// Creating a main style doc for consistency.
// import {colors, fonts, padding, dimensions,margin,borderRadius, icon} from '../style/styleValues.js' for all files using styling
import * as Font from 'expo-font';
export const dimensions = {
  fullHeight: Dimensions.get('window').height,
  fullWidth: Dimensions.get('window').width
}
 // primary is blue, secondary is light blue, tertiary is dark blue 
 // background is white, foreground is black, button is pink
export const colors  = {
  primary: '#ACDAFF',
  secondary: '#E3F1FC',
  tertiary: '#2E5F85',
  foreground: "#000",
  background: "#fff",
  button: "#FF9EDA"
}
/* Text Groupings - Every Major grouping is 32 pts apart - 
individual feature is 8 pts apart - maintain 20 pts on either side of the app */
export const padding = {
  sm: 8,
  md: 20,
  lg: 32,
}

export const margin = {
  sm: 8,
  md: 20,
  lg: 32,
}

export const borderRadius = {
  sm: 10,
  md: 20,
  lg: 30,
}

export const icon = {
  xs:18,
  sm: 25,
  md: 28,
  lg: 32,
}
// headings use lg and primary, subheading use md and secondary, text use sm and tertiary

export const fonts = {
  sm: 16,
  md: 18,
  lg: 21,
  main: 'Lato',
  subheader:'Raleway',
  text:'Avenir',
  mainBold:'Lato-Black',
  subheaderBold:'Raleway-Bold',
  lgLineHeight: 25,
  mdLineHeight: 21
}
// default style for screen headers
export const stylesDefault = StyleSheet.create({
  headerTitleStyle: {
    fontFamily: fonts.main,
    fontSize: fonts.lg,
    lineHeight: fonts.lgLineHeight,
    color: colors.tertiary,
  },
  headerStyle: {
    borderBottomWidth: 0,
    shadowColor: colors.primary,
    borderBottomColor:colors.primary,
    backgroundColor: colors.background,
    height:dimensions.fullHeight/8,
    elevation:2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
  },
  subheading: {
    fontFamily: fonts.subheader,
    fontSize: fonts.md,
    lineHeight: fonts.mdLineHeight,
    color:colors.tertiary
  },
  text: {
    fontFamily: fonts.text,
    fontSize: fonts.sm,
    lineHeight: fonts.mdLineHeight,
  },
  button:{
    backgroundColor: colors.pink,
    borderRadius: 30,
    width:dimensions.fullWidth/2
  },
  /*next three based off of the disclaimer modal and its style.
  modalMessage: {
    color: darkBlue,
    fontStyle: "normal",
    fontSize: 24,
    alignItems: "center",
    textAlign: "center",
    padding: 10,
  },
  modalContainer: {
    alignSelf: "center",
    backgroundColor: white,
    width: 270,
    alignItems: "center",
    height: 367,
    marginTop: windowH / 2 - 183.5,
    borderRadius: 30,
  },
  modalButton: {
    borderRadius: 30,
    borderWidth: 2,
    backgroundColor: pink,
    borderColor: pink,
    height: 35,
    marginTop: 7,
    width: 100,
    alignItems: "center",
    textAlign: "center",
  },*/
});
