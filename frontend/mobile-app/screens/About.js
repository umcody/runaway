import React from "react";
import { StyleSheet, View, Text,ScrollView,Dimensions } from "react-native";
import BottomTray from "../components/bottomTray";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from '@expo/vector-icons'; 

export default function AboutUs() {
  return (
      <SafeAreaView style ={styles.container}>

    <ScrollView>
      <View style = {styles.about}>
      <Text style = {styles.title}>About Us</Text>
        <Text style={styles.text}>
        Runaway is a social entrepreneurial venture that aims to spread mental health awareness and make the world happier.
        Currently we're working on 3 modules:</Text>
        <Text style={styles.text}>1. Hosting events and workshops focused around mental health. </Text>
        <Text style={styles.text}>2. Our mobile app that will allow users to anonymously talk to our highly skilled and monitored set of volunteers from across the world. </Text>
        <Text style={styles.text}>3. A carefully and passionately curated positivity zone that provides users with happy art, quotes, music, inspiring stories, etc. </Text>
     <TouchableOpacity activeOpacity={.9} style={styles.button}>
        <Text>Visit Our Site</Text>
     </TouchableOpacity>
      </View>
      <TouchableOpacity style = {styles.team} activeOpacity={.9}>
        <Text style = {styles.subtitle}>Meet the Team</Text>
        <Ionicons name="ios-arrow-forward" size={30} color="#fff" style={{position:'absolute',right:20}}/>
      </TouchableOpacity>
      <TouchableOpacity style = {styles.partners} activeOpacity={.9}>
        <Text style = {styles.pSubtitle}>Our Partners</Text>
        <Ionicons name="ios-arrow-forward" size={30} color="#2E5F85" style={{position:'absolute',right:20}}/>
      </TouchableOpacity>
    </ScrollView>
      </SafeAreaView>
  );
}
const windowW = Dimensions.get("window").width;
const windowH = Dimensions.get("window").height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff'
  },
  title: {
    fontFamily: "System",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: windowW*0.08,
    lineHeight: 30,
    color: "#2E5F85",
    paddingBottom:10,
    textDecorationLine: 'underline'
  },
  subtitle: {
    fontFamily: "System",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: windowW*0.07,
    lineHeight: 40,
    color: "#fff",
  },
  pSubtitle:{
    fontFamily: "System",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: windowW*0.07,
    lineHeight: 40,
    color: "#2E5F85",
  },
  about:{
      padding:20,
      backgroundColor:"#E3F1FC"
  },
  text:{
      color:"#2E5F85",
      paddingBottom:10,
      fontSize:18
  },
  team:{
      backgroundColor:'#2E5F85',
      width:'100%',
      padding:20,
      flexDirection:'row',
      alignItems:'center'
  },
  button:{
      backgroundColor:"#FF9EDA",
      justifyContent:'center',
      alignItems:'center',
      paddingVertical:10,
      borderRadius:20,
      marginTop:20,
  },
  partners:{
    padding:20,
    backgroundColor:"#ACDAFF",
    flexDirection:'row',
    alignItems:'center'
  }
});
