import React from "react";
import {StyleSheet, Dimensions} from 'react-native'
// Creating a main style doc for consistency.

export const dimensions = {
  fullHeight: Dimensions.get('window').height,
  fullWidth: Dimensions.get('window').width
}
 // primary is blue, secondary is light blue, tertiary is dark blue 
export const colors  = {
  primary: '#ACDAFF',
  secondary: '#E3F1FC',
  tertiary: '#2E5F85',
  black: "#000",
  white: "#fff",
  pink: "#FF9EDA"
}
/* Text Groupings - Every Major grouping is 32 pts apart - 
individual feature is 8 pts apart - maintain 20 pts on either side of the app */
export const padding = {
  sm: 8,
  md: 20,
  lg: 32,
}
// headings use lg and primary, subheading use md and secondary, text use sm and tertiary
export const fonts = {
  sm: 16,
  md: 18,
  lg: 21,
  primary: 'Lato',
  secondary:'Raleway Medium',
  tertiary:'Avenir Book',
  lgLineHeight: 25,
  mdLineHeight: 21
}
// default style for screen headers
const stylesDefault = StyleSheet.create({
  header: {
    borderBottomWidth: 0,
    shadowColor: colors.primary,
    backgroundColor: colors.white,
    height: dimensions.fullHeight / 9,
    elevation:2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  headerTitle: {
    fontFamily: fonts.primary,
    fontSize: fonts.lg,
    lineHeight: fonts.lgLineHeight,
    color:colors.tertiary
  },
  subheading: {
    fontFamily: fonts.secondary,
    fontSize: fonts.md,
    lineHeight: fonts.mdLineHeight,
    color:colors.tertiary
  },
  text: {
    fontFamily: fonts.tertiary,
    fontSize: fonts.sm,
    lineHeight: fonts.mdLineHeight,
  },
  button:{
    backgroundColor: colors.pink,
    borderRadius: 30,
    width:dimensions.fullWidth/2
  },
  //next three based off of the disclaimer modal and its style.
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
  },
});
