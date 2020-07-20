import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

export default function Media(props) {
  return (
    <View style={styles.overall}>
      <Text>Whatever text is needed</Text>
      <TextInput
        clearButtonMode="always"
        style={styles.userInput}
        placeholder="User Name"
      />
      <TextInput
        clearButtonMode="always"
        style={styles.userInput}
        placeholder="Not sure what else"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  overall: {
    alignItems: "center",
  },
  userInput: {
    fontSize: 18,
    paddingBottom: 15,
    borderRadius: 3,
    borderColor: "#ACDAFF",
    borderWidth: 1,
    width: "70%",
    alignItems: "center",
    paddingHorizontal: 5,
    paddingVertical: 10,
    alignContent: "center",
  },
});
