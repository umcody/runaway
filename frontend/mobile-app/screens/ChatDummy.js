import React from "react";
import { StyleSheet, View, Text } from "react-native";
import BottomTray from "../components/bottomTray";

export default function Chat() {
  return (
    <View style={styles.profile}>
      <Text>This is a chat screen</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  profile: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
