import React from "react";
import { StyleSheet } from "react-native";

// Creating a main style doc for consistency.

const regularBlue = "#ACDAFF";

const darkBlue = "#2E5F85";

const lightBlue = "#E3F1FC";

const white = "#FFFFFF";

const pink = "#FF9EDA";

const stylesDefault = StyleSheet.create({
  mainText: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 24,
    lineHeight: 28,
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
