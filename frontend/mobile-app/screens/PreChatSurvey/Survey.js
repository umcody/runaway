import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  Dimensions,
} from "react-native";

export default function PreChatSurveyModal() {
  <ScrollView style={styles.scroll}></ScrollView>;
}

const windowW = Dimensions.get("window").width;
const windowH = Dimensions.get("window").height;

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: 10,
    marginVertical: 10,
  },
  text: {},
});
