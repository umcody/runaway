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

export default function DeliberateSelfHarm({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View>
            <TouchableOpacity
              style={styles.emergencyButton}
              onPress={() => {
                navigation.navigate("Browser", {
                  page: "http://www.sadag.org/images/frontpage/How_to-speak-to-a-suicidal-friend-or-family-member.png",
                });
              }}
            >
              <Text style={styles.emergencyText}>
              How to speak to a suicidal friend or family member</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={styles.emergencyButton}
              onPress={() => {
                navigation.navigate("Browser", {
                  page: "https://www.mentalhealthcommission.ca/sites/default/files/2019-03/suicide_loss_toolkit_eng.pdf",
                });
              }}
            >
              <Text style={styles.emergencyText}>
              Toolkit for people who have been impacted by a suicide loss

              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={styles.emergencyButton}
              onPress={() => {
                navigation.navigate("Browser", {
                  page: "https://www.psychologytoday.com/ca/blog/the-truth-about-exercise-addiction/201708/15-things-do-instead-self-harming",
                });
              }}
            >
              <Text style={styles.emergencyText}>
              15 Things to Do Instead of Self-Harming

              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={styles.emergencyButton}
              onPress={() => {
                navigation.navigate("Browser", {
                  page: "https://www.reddit.com/r/StopSelfHarm/comments/2mg30n/how_to_stop_self_harm_cutting_and_hitting/",
                });
              }}
            >
              <Text style={styles.emergencyText}>
              How to stop self harm (cutting and hitting)

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
    backgroundColor: "white",
    borderRadius: 30,
    width: 160,
    margin: 15,
    height: 100,
    justifyContent: "center",
    borderColor: '#FF9EDA',
    borderWidth: 1,
    alignSelf: 'center'
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
