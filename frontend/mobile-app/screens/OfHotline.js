import "react-native-gesture-handler";

import React from "react";
import { StyleSheet, Text, View, TouchableOpacity,SafeAreaView,FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import HotlineCard from "../components/HotlineCard";

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
  // null here means that the servive doesnt have the method of communication.
  // will use this with a if statement to see if the button has to be rendered or not
  const supportLines = [
    {
      title: "National Suicide Prevention Lifeline",
      phoneNumber: "8334564566",
      textNumber: "45645",
      firstText: "Hey, i need help",
      website: "https://suicidepreventionlifeline.org/",
      meantFor: "For anyone in suicidal crisis or emotional distress",
    },
    {
      title: "Crisis Text Line",
      phoneNumber: "null",
      textNumber: "741741", //you have to text HOME to the number
      firstText: "HOME",
      website: "https://www.crisistextline.org/",
      meantFor: "trained Crisis Counselors supporting people in crisis",
    },
    {
      title: "YouthLine",
      phoneNumber: "8779688491",
      textNumber: "839863", //you have to text teen2teen to the number
      firstText: "teen2teen",
      website: "https://oregonyouthline.org/",
      meantFor: "Support from teens for other teens",
    },
    {
      title: "Childhelp National Child Abuse Hotline",
      phoneNumber: "18004224453",
      textNumber: "18004224453",
      firstText: "Hey, i need help",
      website: "https://www.childhelp.org/childhelp-hotline/",
      meantFor: "Prevention of child abuse",
    },
    {
      title: "National Domestic Violence Hotline",
      phoneNumber: "18007997233",
      textNumber: "22522", //you have to text LOVEIS to the number
      firstText: "LOVEIS",
      website: "https://www.thehotline.org/",
      meantFor: "People facing domestic violence",
    },
    {
      title: "RAINN",
      phoneNumber: "8006564673",
      textNumber: "null",
      firstText: "Hey, i need help",
      website: "https://www.rainn.org/",
      meantFor: "anti-sexual assault organization",
    },
    {
      title: "The Trevor Project",
      phoneNumber: "18664887386",
      textNumber: "678678", // you have to rext START to the number
      firstText: "START",
      website: "https://www.thetrevorproject.org/",
      meantFor: "Crisis intervention and suicide prevention services for members of LGBTQ under 25",
    },
    {
      title: "Trans Lifeline",
      phoneNumber: "8775658860",
      textNumber: "null",
      firstText: "Hey, i need help",
      website: "https://www.translifeline.org/",
      meantFor: "Trans people in need of help",
    },
    {
      title: "SAMHSA National Helpline",
      phoneNumber: "18006624357",
      textNumber: "null",
      firstText: "Hey, i need help",
      website: "https://www.samhsa.gov/",
      meantFor: "Substance abuse and mental health",
    }
  ];

  return (
    <SafeAreaView style={styles.container}>

            <FlatList data={supportLines}
            nestedScrollEnabled={true}
            
                keyExtractor={(item, index) => 'key' + index}
                renderItem={({item}) => {
                    return (
                        <HotlineCard item = {item}/>
                    ) 
                }}
                showsVerticalScrollIndicator={false}
            />



   
  </SafeAreaView>
  );
}



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
