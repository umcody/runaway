import "react-native-gesture-handler";

import React from "react";
import { StyleSheet, Text, View, TouchableOpacity,SectionList,SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

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

  const DATA = [
    {
      title: "",
      data: ["National Suicide Prevention Hotline", "Crisis Text Line"]
    },
    {
      title: "For Kids and Teens",
      data: ["YouthLine", "Childhelp National Child Abuse Hotline"]
    },
    {
      title: "Domestic and Sexual Violence",
      data: ["National Domestic Abuse Hotline", "National Deaf Domestic Abuse Hotline", "RAINN"]
    },
    {
      title: "LGBTQIA+",
      data: ["The Trevor Project", "Trans Lifeline"]
    },
    {
      title: "Drug or Alcohol Abuse",
      data: ["SAMHSA National Helpline"]
    }
  ];

  const Item = ({ title }) => (
    <TouchableOpacity
      style={styles.emergencyButton}
      onPress={() => {
        alert("you clicked me");
      }}
    >
      <Text style={styles.emergencyText}>{title}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
    <SectionList
    showsVerticalScrollIndicator={false}
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => <Item title={item} />}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.header}>{title}</Text>
      )}
      stickySectionHeadersEnabled={false}
    />
  </SafeAreaView>
  );
}

/*
<View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
      }}
    >
      <View style={styles.container}>
      <TouchableOpacity
      style={styles.emergencyButton}
      onPress={() => {
        alert("you clicked me");
      }}
    >
      <Text style={styles.emergencyText}>National Suicide</Text>
      <Text style={styles.emergencyText}> Prevention Hotline</Text>
    </TouchableOpacity>
  </View>

  <View style={styles.container}>
    <TouchableOpacity
      style={styles.emergencyButton}
      onPress={() => {
        alert("you clicked me");
      }}
    >
      <Text style={styles.emergencyText}>The Trevor Project Hotline</Text>
    </TouchableOpacity>
  </View>

  <View style={styles.container}>
    <TouchableOpacity
      style={styles.emergencyButton}
      onPress={() => {
        alert("you clicked me");
      }}
    >
      <Text style={styles.emergencyText}>Local Hotline</Text>
    </TouchableOpacity>
  </View>
</View>
*/

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:"#fff",
    justifyContent:'center',
    alignItems:'center'
  },
  emergencyButton: {
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 30,
    borderColor: '#FF9EDA',
    borderWidth: 1,
    width: 300,
    height:60,
    justifyContent:'center'
  },
  emergencyText: {
    color: "#2E5F85",
    fontSize: 16,
    fontFamily: "System",
    textAlign: "center",
    fontStyle: "normal",
  },
  header:{
    textAlign:'center',
    color: "#2E5F85",
    fontSize: 18,
    paddingVertical:16
  }
});
