import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Chat() {
  return (
    <View style={styles.container}>
      <Text>This is a chat screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
