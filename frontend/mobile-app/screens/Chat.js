import React from "react";
import { StyleSheet, View, Text } from "react-native";
import BottomTray from "../components/bottomTray";

export default function Chat(props) {
  return (
    <View style={styles.home}>
      <View style={styles.profile}>
        <Text>This is a chat screen</Text>
      </View>

      <View>
        <BottomTray navigation={props.navigation} />
      </View>
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
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
});
