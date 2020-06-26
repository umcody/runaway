import React from "react";
import {
  Button,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";

export default function Chat({ navigation }) {
  const feelingsCol1 = [
    { title: "Happy", id: 1 },
    { title: "Fearful", id: 2 },
    { title: "Shameful", id: 3 },
    { title: "Embarrassed", id: 4 },
    { title: "Disgusted", id: 5 },
  ];

  const feelingsCol2 = [
    { title: "Sad", id: 1 },
    { title: "Angry", id: 2 },
    { title: "Frustrated", id: 3 },
    { title: "Stressed", id: 4 },
    { title: "Surprised", id: 5 },
  ];

  const FeelingsList = ({ title }) => {
    return (
      <View>
        <TouchableOpacity style={styles.feels}>
          <Text>{title}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.profile}>
      <View style={styles.col1}>
        <FlatList
          data={feelingsCol1}
          renderItem={({ item }) => <FeelingsList title={item.title} />}
        />
      </View>
      <View style={styles.col2}>
        <FlatList
          data={feelingsCol2}
          renderItem={({ item }) => <FeelingsList title={item.title} />}
        />
      </View>
      <TouchableOpacity
        style={styles.buttonDismiss}
        onPress={() => {
          navigation.navigate("Chat");
        }}
      >
        <Text style={{ color: "#FFFFFF", fontSize: 25 }}>Next</Text>
      </TouchableOpacity>
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
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
  },
  buttonDismiss: {
    position: "absolute",
    top: windowH - 125,
    borderRadius: 30,
    borderWidth: 2,
    backgroundColor: "#FF9EDA",
    borderColor: "#FF9EDA",
    height: 35,
    marginTop: 7,
    width: 100,
    alignItems: "center",
    textAlign: "center",
  },
  col1: {
    position: "absolute",
    left: windowW / 4 - 63,
  },
  col2: {
    position: "absolute",
    left: 3 * (windowW / 4) - 63,
  },
  feels: {
    fontSize: 20,
    marginTop: 100,
    borderColor: "#ACDAFF",
    borderWidth: 2,
    backgroundColor: "#E3F1FC",
    alignItems: "center",
    width: 126,
    height: 126,
    paddingTop: 50,
  },
});
