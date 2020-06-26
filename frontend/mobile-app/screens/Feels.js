import React from "react";
import {
  Button,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";

export default function Chat({ navigation }) {
  return (
    <View style={styles.profile}>
      <Text>This is the feelings screen screen</Text>
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
  buttonDismiss: {
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
});
