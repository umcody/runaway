import React, { Component } from "react";
import { StyleSheet, View, Text, SafeAreaView, Dimensions } from "react-native";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import FeaturePage from "../screens/FeaturePage";
import SiteMap from "../screens/SiteMap";
import Feature from "../screens/Feature";
import { Feather } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");
// stack nav for feature cards
export default function SiteMapNav({ navigation }) {
  const Stack = createStackNavigator();
  return (
    <View style={styles.container}>
      <Stack.Navigator screenOptions={{ gestureEnabled: false }}>
        <Stack.Screen
          name="SiteMap"
          component={SiteMap}
          options={{
            title: "App Features",
            headerTitleStyle: styles.headerTitleStyle,
            headerStyle: styles.headerStyle,
            headerLeft: () => (
              <Feather
                style={{ paddingLeft: 25 }}
                onPress={() => navigation.openDrawer()}
                name="info"
                size={30}
                color="#FF9EDA"
              />
            ),
          }}
        />
        <Stack.Screen
          name="Features"
          component={FeaturePage}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
            gestureDirection: "vertical",
            gestureResponseDistance: height / 2,
            headerShown: false,
            cardOverlayEnabled: true,
          }}
        />
        <Stack.Screen
          name="Feature"
          component={Feature}
          options={{ headerShown: false }}
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
    height: windowH / 9,
    borderBottomColor: "#ACDAFF",
  },
});
