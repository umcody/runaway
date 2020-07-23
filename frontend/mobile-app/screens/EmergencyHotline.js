import "react-native-gesture-handler";

import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function EmergencyHotlinesScreen({ navigation }) {
  navigation.setOptions({
    headerLeft: () => (
      <TouchableOpacity
        style={{ paddingLeft: 25 }}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="ios-arrow-back" size={30} color="#FF9EDA" />
      </TouchableOpacity>
    ),
  });
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
      }}
    >
      <View /*style={styles.container}*/>
        <TouchableOpacity
          style={styles.emergencyButton}
          onPress={() => {
            alert("you clicked me");
          }}
        >
          <Text style={styles.emergencyText}>National Suicide</Text>
          <Text style={styles.emergencyText}> Prevention Hotline</Text>
        </TouchableOpacity>
      </View>

      <View /*style={styles.container}*/>
        <TouchableOpacity
          style={styles.emergencyButton}
          onPress={() => {
            alert("you clicked me");
          }}
        >
          <Text style={styles.emergencyText}>The Trevor Project Hotline</Text>
        </TouchableOpacity>
      </View>

      <View /*style={styles.container}*/>
        <TouchableOpacity
          style={styles.emergencyButton}
          onPress={() => {
            alert("you clicked me");
          }}
        >
          <Text style={styles.emergencyText}>Local Hotline</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FF9EDA",
    alignItems: "center",
    justifyContent: "center",
  },
  emergencyButton: {
    backgroundColor: "#FF9EDA",
    borderRadius: 30,
    width: 335,
    margin: 20,
    height: 150,
    justifyContent: "center",
  },
  emergencyText: {
    color: "white",
    fontSize: 24,
    fontFamily: "System",
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "normal",
  },
});
