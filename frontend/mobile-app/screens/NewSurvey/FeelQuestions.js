import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import Happy from "./Emojis/Happy";
import Thankful from "./Emojis/Thankful";
import Anxious from "./Emojis/Anxious";
import Worried from "./Emojis/Worried";
import Embarrased from "./Emojis/Embarrased";
import Sad from "./Emojis/Sad";
import Angry from "./Emojis/Angry";
import VerySad from "./Emojis/VerySad";
import Meh from "./Emojis/Meh";
import Content from "./Emojis/Content";
import Shameful from "./Emojis/Shameful";
import Confused from "./Emojis/Confused";

export default function Feel({ title, value, setValue }) {
  const [borderColor, setBorderColor] = useState("#FFFFFF");

  function Emoji(a) {
    if (a == "Happy") {
      return <Happy width={50} height={50} />;
    }
    if (a == "Thankful") {
      return <Thankful width={50} height={50} />;
    }
    if (a == "Anxious") {
      return <Anxious width={50} height={50} />;
    }
    if (a == "Worried") {
      return <Worried width={50} height={50} />;
    }
    if (a == "Embarrased") {
      return <Embarrased width={50} height={50} />;
    }
    if (a == "Sad") {
      return <Sad width={50} height={50} />;
    }
    if (a == "Angry") {
      return <Angry width={50} height={50} />;
    }
    if (a == "Very Sad") {
      return <VerySad width={50} height={50} />;
    }
    if (a == "Meh") {
      return <Meh width={50} height={50} />;
    }
    if (a == "Content") {
      return <Content width={50} height={50} />;
    }
    if (a == "Shameful") {
      return <Shameful width={50} height={50} />;
    }
    if (a == "Confused") {
      return <Confused width={50} height={50} />;
    }
  }

  const styles = StyleSheet.create({
    text: {
      fontSize: 14,
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
      paddingVertical: 10,
      paddingHorizontal: 5,
    },
    picture: {
      justifyContent: "center",
      alignSelf: "center",
      paddingTop: 10,
      paddingBottom: 10,
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
        <View style={styles.picture}>{Emoji(title)}</View>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}
