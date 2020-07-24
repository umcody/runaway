import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: 'white', }}>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
{/* ############################################################################################################ */}
          <View style={styles.buttonRow}>

            
            <View>
              <TouchableOpacity
                style={styles.emergencyButton}
                onPress={() => {navigation.navigate('Links', { endPoint: 'api/volunteer/resource' })
              }}
              >
                <Text style={styles.emergencyText}>General Resources</Text>
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity
                style={styles.emergencyButton}
                onPress={() => {navigation.navigate('Links', { endPoint: 'api/volunteer/resource?filter=LGBTQIA%2B' })
              }}
              >
                <Text style={styles.emergencyText}>LGBTQIA+</Text>
              </TouchableOpacity>
            </View>
          </View>
{/* ############################################################################################################ */}
          <View style={styles.buttonRow}>
          <View>
              <TouchableOpacity
                style={styles.emergencyButton}
                onPress={() => {navigation.navigate('Links', { endPoint: 'api/volunteer/resource?filter=Kids%20and%20Teens' })}}
              >
                <Text style={styles.emergencyText}>Kids and Teens</Text>
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity
                style={styles.emergencyButton}
                onPress={() => {navigation.navigate('Links', { endPoint: 'api/volunteer/resource?filter=Substance%20Related%20Disorders' })}}
              >
                <Text style={styles.emergencyText}>Substance Related Disorders</Text>
              </TouchableOpacity>
            </View>
          </View>
{/* ############################################################################################################ */}
          <View style={styles.buttonRow}>
          <View>
              <TouchableOpacity
                style={styles.emergencyButton}
                onPress={() => {navigation.navigate('Links', { endPoint: 'api/volunteer/resource?filter=Mood%20Related%20Disorders' })}}
              >
                <Text style={styles.emergencyText}>Mood Related Disorders</Text>
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity
                style={styles.emergencyButton}
                onPress={() => {navigation.navigate('Links', { endPoint: 'api/volunteer/resource?filter=Anxiety%20and%20Trauma%20Related%20Disorders' })}}
              >
                <Text style={styles.emergencyText}>Anxiety and Trauma Related Disorders</Text>
              </TouchableOpacity>
            </View>
          </View>
{/* ############################################################################################################ */}
          <View style={styles.buttonRow}>
          <View>
              <TouchableOpacity
                style={styles.emergencyButton}
                onPress={() => {navigation.navigate('Links', { endPoint: 'api/volunteer/resource?filter=Psychotic%20Disorders' })}}
              >
                <Text style={styles.emergencyText}>Psychotic Disorders</Text>
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity
                style={styles.emergencyButton}
                onPress={() => {navigation.navigate('Links', { endPoint: 'api/volunteer/resource?filter=Deliberate%20Self%20Harm' })}}
              >
                <Text style={styles.emergencyText}>Deliberate Self Harm</Text>
              </TouchableOpacity>
            </View>
          </View>
{/* ############################################################################################################ */}
          <View style={styles.buttonRow}>
          <View>
              <TouchableOpacity
                style={styles.emergencyButton}
                onPress={() => {navigation.navigate('Links', { endPoint: 'api/volunteer/resource?filter=Eating%20Disorders' })}}
              >
                <Text style={styles.emergencyText}>Eating Disorders</Text>
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity
                style={styles.emergencyButton}
                onPress={() => {navigation.navigate('Links', { endPoint: 'api/volunteer/resource?filter=Domestic%20and%20Sexual%20Violence' })}}
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
