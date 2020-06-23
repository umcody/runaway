import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";

import BottomTray from "../components/bottomTray";

function welcome() {
  return (
    <View style={styles.start}>
      <TouchableOpacity>
        <Image
          style={styles.profile}
          source={require("../images/profileButton.png")}
        />
      </TouchableOpacity>
      <View>
        <BottomTray />
      </View>
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
});

export default welcome;
