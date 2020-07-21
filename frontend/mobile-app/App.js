import React from "react";
import Navigation from "./navigation/index";
import { SafeAreaProvider } from 'react-native-safe-area-context';
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
  return (
    <SafeAreaProvider>
      <Navigation/>
    </SafeAreaProvider>
  )
  
}
const styles = StyleSheet.create({
  socialBar: {
    flexDirection: "row",
  },
});
