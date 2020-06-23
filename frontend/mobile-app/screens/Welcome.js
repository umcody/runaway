import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";

export default function Welcome({ navigation }) {
  return (
    <View style={styles.start}>
      <TouchableOpacity>
        <Image
          style={styles.profile}
          source={require("../images/profileButton.png")}
        />
      </TouchableOpacity>
      <View style={styles.bottomView}>
        <TouchableOpacity>
          <Image
            style={styles.homeButtom}
            source={require("../images/homeButton.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.push("Chat")}>
          <Image
            style={styles.chatButton}
            source={require("../images/chatButton.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.resourceButton}
            source={require("../images/resourceButton.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.homeIndicator}></View>
    </View>
  );
}
const windowW = Dimensions.get("window").width;
const windowH = Dimensions.get("window").height;

const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  profile: {
    position: "absolute",
    left: 30,
    top: 55,
    width: 32,
    height: 32,
  },
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
    marginVertical: 22,
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
