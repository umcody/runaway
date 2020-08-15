import React, { useState } from "react";

import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default function WhatBringsYou({ question, value, setValue }) {
  const [textColor, setTextColor] = useState("#2E5F85");
  const [backColor, setBackColor] = useState("#FFFFFF");

  const styles = StyleSheet.create({
    text: {
      fontSize: 18,
      paddingHorizontal: 40,
      paddingVertical: 9,
      color: textColor,
      textAlign: "center",
    },
    button: {
      borderColor: "#ACDAFF",
      borderRadius: 30,
      borderWidth: 1,
      backgroundColor: backColor,
      width: 300,
      alignSelf: "center",
      justifyContent: "center",
    },
    overAll: {
      flexDirection: "row",
    },
  });

  return (
    <View style={styles.overAll}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setValue(!value);
          if (!value) {
            setBackColor("#FFFFFF");
            setTextColor("#2E5F85");
          } else {
            setBackColor("#2E5F85");
            setTextColor("#FFFFFF");
          }
        }}
      >
        <Text style={styles.text}>{question}</Text>
      </TouchableOpacity>
    </View>
  );
}
