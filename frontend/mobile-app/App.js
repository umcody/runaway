import React from "react";
import Navigation from "./navigation/index";
import SignInPage from "./screens/SignInPage";

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from "react-native";
import { WebView } from "react-native-webview";
import { Instagram, Twitter, Facebook } from "react-native-openanything";

import { AntDesign, Feather, MaterialCommunityIcons } from "@expo/vector-icons";

export default function App() {
  return <Navigation />;
}
const styles = StyleSheet.create({
  socialBar: {
    flexDirection: "row",
  },
});

