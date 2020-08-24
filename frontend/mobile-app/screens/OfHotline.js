import "react-native-gesture-handler";

import React, { Fragment } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import HotlineCard from "../components/HotlineCard";
import * as WebBrowser from "expo-web-browser";
import { LinearGradient } from "expo-linear-gradient";
import {
  colors,
  fonts,
  padding,
  dimensions,
  margin,
  borderRadius,
  icon,
} from "../style/styleValues.js";
import supportLines from "../assets/hotlines/listOfHotlines.json";

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
    <SafeAreaView style={styles.container}>
      <FlatList
        data={supportLines}
        nestedScrollEnabled={true}
        keyExtractor={(item, index) => "key" + index}
        renderItem={({ item }) => {
          return <HotlineCard item={item} />;
        }}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },

  cardView: {
    backgroundColor: colors.background,
    margin: 1,
    borderRadius: 10,
    borderWidth: 0,
    width: dimensions.fullWidth * 0.9,
    height: dimensions.fullHeight / 6,
    backgroundColor: colors.background,
    justifyContent: "center",
    paddingLeft: padding.sm,
  },
  title: {
    width: dimensions.fullWidth,
    color: colors.foreground,
    fontSize: fonts.lg,
    fontFamily: fonts.main,
  },
});
