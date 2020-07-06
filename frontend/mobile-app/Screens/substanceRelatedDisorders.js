import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { WebView } from "react-native-webview";

export default function KidsAndTeens({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View>
            <TouchableOpacity
              style={styles.emergencyButton}
              onPress={() => {
                navigation.navigate("Browser", {
                  page: "https://www.samhsa.gov/",
                });
              }}
            >
              <Text style={styles.emergencyText}>
                Substance Abuse and Mental Health Services Administration
                (SAMHSA)
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
    color: "#2E5F85",
    fontSize: 24,
    fontFamily: "System",
    textAlign: "center",
    fontWeight: "normal",
    fontStyle: "normal",
  },
});
