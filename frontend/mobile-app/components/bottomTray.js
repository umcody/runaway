import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";

export default function BottomTray(props) {
  return (
    <>
      <View style={styles.bottomView}>
        <TouchableOpacity onPress={() => props.navigation.goto("Welcome")}>
          <Image
            style={styles.homeButtom}
            source={require("../images/homeButton.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.goto("Chat")}>
          <Image
            style={styles.chatButton}
            source={require("../images/chatButton.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.goto("Resources")}>
          <Image
            style={styles.resourceButton}
            source={require("../images/resourceButton.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.homeIndicator}></View>
    </>
  );
}

const windowW = Dimensions.get("window").width;
const windowH = Dimensions.get("window").height;

const styles = StyleSheet.create({
  homeButtom: {
    position: "absolute",
    left: 53,
    top: 22,
    width: 32,
    height: 32,
  },
  chatButton: {
    position: "absolute",
    left: windowW / 2 - 16,
    top: 22,
    width: 32,
    height: 32,
  },
  resourceButton: {
    position: "absolute",
    left: windowW - 53 - 32,
    top: 22,
    width: 32,
    height: 32,
  },
  bottomView: {
    position: "absolute",
    height: 1,
    top: windowH - 92,
    width: windowW,
    backgroundColor: "#ACDAFF",
  },
  homeIndicator: {
    position: "absolute",
    height: 5,
    top: windowH - 13,
    left: windowW / 2 - 67.5,
    width: 135,
    backgroundColor: "#FF9EDA",
    borderRadius: 2.5,
  },
});
