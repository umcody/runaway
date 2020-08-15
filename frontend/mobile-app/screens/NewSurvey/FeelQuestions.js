import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";

export default function Feel({ title, value, setValue }) {
  const [borderColor, setBorderColor] = useState("#FFFFFF");

  const styles = StyleSheet.create({
    text: {
      fontSize: 16,
      paddingHorizontal: 10,
      paddingVertical: 10,
      color: "#2E5F85",
      textAlign: "center",
    },
    button: {
      borderColor: borderColor,
      borderRadius: 30,
      borderWidth: 2,
      backgroundColor: "#FFFFFF",
      width: 115,
      height: 100,
      justifyContent: "center",
      alignContent: "center",
    },
    overAll: {
      flexDirection: "row",
      padding: 10,
    },
    picture: {
      justifyContent: "center",
      alignSelf: "center",
      width: 50,
      height: 50,
      paddingTop: 10,
      top: 10,
    },
  });

  return (
    <View style={styles.overAll}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setValue(!value);
          if (!value) {
            setBorderColor("#2E5F85");
          } else {
            setBorderColor("#FFFFFF");
          }
        }}
      >
        <Image style={styles.picture} source={require("./Emojis/Happy.png")} />
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}
