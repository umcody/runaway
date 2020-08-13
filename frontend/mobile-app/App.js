import React from "react";
import Navigation from "./navigation/index";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StyleSheet, StatusBar, Platform } from "react-native";
import { WebView } from "react-native-webview";
import { Instagram, Twitter, Facebook } from "react-native-openanything";
import FeelingSurvey from "./screens/FeelingSurvey";

import { AntDesign, Feather, MaterialCommunityIcons } from "@expo/vector-icons";

export default function App() {
  return (
    <SafeAreaProvider>
      {Platform.OS === "ios" ? (
        <StatusBar barStyle="dark-content" translucent={true} />
      ) : null}
      {/* <Navigation/> */}
      <FeelingSurvey />
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  socialBar: {
    flexDirection: "row",
  },
});
