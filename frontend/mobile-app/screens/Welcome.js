import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";

function welcome() {
  return (
    <View style={styles.start}>
      <TouchableOpacity>
        <Text style={styles.profile}></Text>
      </TouchableOpacity>
      <View style={styles.bottomView}>
        <TouchableOpacity>
          <Text style={styles.homeButtom}></Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.chatButton}></Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.resourceButton}></Text>
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
    marginVertical: 55,
    borderColor: "#ACDAFF",
    borderWidth: 1,
    borderRadius: 5,
    width: 32,
    height: 32,
    borderWidth: 3,
  },
  homeButtom: {
    position: "absolute",
    left: 53,
    marginVertical: 22,
    borderColor: "#ACDAFF",
    borderWidth: 1,
    borderRadius: 5,
    width: 32,
    height: 32,
    borderWidth: 3,
  },
  chatButton: {
    position: "absolute",
    left: windowW / 2 - 16,
    marginVertical: 22,
    borderColor: "#ACDAFF",
    borderWidth: 1,
    borderRadius: 5,
    width: 32,
    height: 32,
    borderWidth: 3,
  },
  resourceButton: {
    position: "absolute",
    left: windowW - 53 - 32,
    marginVertical: 22,
    borderColor: "#ACDAFF",
    borderWidth: 1,
    borderRadius: 5,
    width: 32,
    height: 32,
    borderWidth: 3,
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

export default welcome;
