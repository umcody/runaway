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
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
{/* ############################################################################################################ */}
          <View style={styles.buttonRow}>
            <View /*style={styles.container}*/>
              <TouchableOpacity
                style={styles.emergencyButton}
                onPress={() => navigation.navigate('General Resources')}
              >
                <Text style={styles.emergencyText}>General Resources</Text>
              </TouchableOpacity>
            </View>

            <View /*style={styles.container}*/>
              <TouchableOpacity
                style={styles.emergencyButton}
                onPress={() => navigation.navigate('LGBTQIA+')}
              >
                <Text style={styles.emergencyText}>LGBTQIA+</Text>
              </TouchableOpacity>
            </View>
          </View>
{/* ############################################################################################################ */}
          <View style={styles.buttonRow}>
            <View /*style={styles.container}*/>
              <TouchableOpacity
                style={styles.emergencyButton}
                onPress={() => navigation.navigate('Kids and Teens')}
              >
                <Text style={styles.emergencyText}>Kids and Teens</Text>
              </TouchableOpacity>
            </View>

            <View /*style={styles.container}*/>
              <TouchableOpacity
                style={styles.emergencyButton}
                onPress={() => navigation.navigate('Substance Related Disorders')}
              >
                <Text style={styles.emergencyText}>Substance Related Disorders</Text>
              </TouchableOpacity>
            </View>
          </View>
{/* ############################################################################################################ */}
          <View style={styles.buttonRow}>
            <View /*style={styles.container}*/>
              <TouchableOpacity
                style={styles.emergencyButton}
                onPress={() => navigation.navigate('Mood Related Disorders')}
              >
                <Text style={styles.emergencyText}>Mood Related Disorders</Text>
              </TouchableOpacity>
            </View>

            <View /*style={styles.container}*/>
              <TouchableOpacity
                style={styles.emergencyButton}
                onPress={() => navigation.navigate('Anxiety and Trauma Related Disorders')}
              >
                <Text style={styles.emergencyText}>Anxiety and Trauma Related Disorders</Text>
              </TouchableOpacity>
            </View>
          </View>
{/* ############################################################################################################ */}
          <View style={styles.buttonRow}>
            <View /*style={styles.container}*/>
              <TouchableOpacity
                style={styles.emergencyButton}
                onPress={() => navigation.navigate('Psychotic Disorders')}
              >
                <Text style={styles.emergencyText}>Psychotic Disorders</Text>
              </TouchableOpacity>
            </View>

            <View /*style={styles.container}*/>
              <TouchableOpacity
                style={styles.emergencyButton}
                onPress={() => navigation.navigate('Deliberate Self Harm')}
              >
                <Text style={styles.emergencyText}>Deliberate Self Harm</Text>
              </TouchableOpacity>
            </View>
          </View>
{/* ############################################################################################################ */}
          <View style={styles.buttonRow}>
            <View /*style={styles.container}*/>
              <TouchableOpacity
                style={styles.emergencyButton}
                onPress={() => navigation.navigate('Eating Disorders')}
              >
                <Text style={styles.emergencyText}>Eating Disorders</Text>
              </TouchableOpacity>
            </View>

            <View /*style={styles.container}*/>
              <TouchableOpacity
                style={styles.emergencyButton}
                onPress={() => navigation.navigate('Domestic and Sexual Violence')}
              >
                <Text style={styles.emergencyText}>Domestic and Sexual Violence</Text>
              </TouchableOpacity>
            </View>
          </View>
{/* ############################################################################################################ */}
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
    fontSize: 20,
    fontFamily: "System",
    textAlign: "center",
    fontWeight: "normal",
    fontStyle: "normal",
  },
  buttonRow: {
    flexDirection: "row",
    flex: 1,
  },
});
