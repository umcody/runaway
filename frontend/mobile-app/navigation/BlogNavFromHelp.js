//same thing as BlogNav.js but different header for the site map functionality
import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import BlogFeed from "../screens/BlogFeed";
import BlogScreen from "../screens/BlogScreen";
import { Ionicons, Feather } from "@expo/vector-icons";
// Different blog nav for sitemap because this allows a back button instead of the info panel
export default function BlogNavFromHelp({ navigation }) {
  const Stack = createStackNavigator();
  return (
    <View style={styles.container}>
      <Stack.Navigator screenOptions={{ gestureEnabled: false }}>
        <Stack.Screen
          name="Feed"
          component={BlogFeed}
          options={{
            title: "Blogs",
            headerTitleStyle: styles.headerTitleStyle,
            headerStyle: styles.headerStyle2,
            headerLeft: () => (
              <TouchableOpacity
                style={{ paddingLeft: 25 }}
                onPress={() => {
                  return navigation.goBack("Feed");
                }}
              >
                <Ionicons name="ios-arrow-back" size={35} color="#FF9EDA" />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="Blog"
          component={BlogScreen}
          options={{
            headerShown: false,
            gestureResponseDistance: { horizontal: 500 },
          }}
        />
      </Stack.Navigator>
    </View>
  );
}
const windowW = Dimensions.get("window").width;
const windowH = Dimensions.get("window").height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerTitleStyle: {
    fontFamily: "System",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 24,
    lineHeight: 30,
    color: "#2E5F85",
  },
  headerStyle: {
    borderBottomWidth: 0,
    shadowColor: "transparent",
    backgroundColor: "#fff",
    height: windowH / 10,
  },
  headerStyle2: {
    borderBottomWidth: 1,
    shadowColor: "transparent",
    backgroundColor: "#fff",
    height: windowH / 9,
    borderBottomColor: "#ACDAFF",
  },
});
