import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as WebBrowser from "expo-web-browser";
import { Feather,Ionicons } from "@expo/vector-icons";
import TeamCard from "../components/MemberInfo";
import {colors, fonts, padding, dimensions,margin,borderRadius, icon} from '../style/styleValues.js'

// about us page 

export default function AboutUs({navigation}) {
  navigation.setOptions(
    {headerLeft: () => (
    <Ionicons name="ios-arrow-back" size={icon.md} color="#FF9EDA" style={{ paddingLeft: padding.md }} onPress={() => navigation.goBack()}/>
  ),})
  return (
    <View style={styles.container}>
      <ScrollView style={{flex:1}}>
        <View style={styles.about}>
          <Text style={styles.title}>Runaway</Text>
          <Text style={styles.text}>
            Runaway is a social entrepreneurial venture that aims to spread
            mental health awareness and make the world happier. </Text>
          <TouchableOpacity activeOpacity={0.9} style={styles.button} onPress={() => {
          WebBrowser.openBrowserAsync("https://www.runawayapp.com/");
        }}>
            <Text style={{ color: colors.background, fontSize: fonts.md,fontFamily:fonts.subheader }}>
              Visit Our Site
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.team} activeOpacity={0.9}>
          <Text style={styles.subtitle}>Team</Text>
          <Text style={styles.text2}>
            Meet the team behind Runaway.
          </Text>
          <View style={{ alignItems: "center", width: "100%" }}>

            <Text style={styles.teamTitle}>Founder</Text>
            <TeamCard name="Satvik Sethi" role="Chief Executive Officer"></TeamCard>

            <Text style={styles.teamTitle}>Marketing</Text>
            <TeamCard name="Megan Reilly" role="Director of Marketing"></TeamCard>
            <TeamCard name="Joanna Lai" role="Social Media Manager"></TeamCard>
            <TeamCard name="Tanvi Singh" role="Public Relations"></TeamCard>

            <Text style={styles.teamTitle}>Content & Media</Text>
            <TeamCard name="Jacob West" role="Director of Content "></TeamCard>
            <TeamCard name="Maggie Dunsford" role="Blogger"></TeamCard>
            <TeamCard name="Jessica Goldman" role="Blogger"></TeamCard>
            <TeamCard name="Antonia Geraci" role="Blogger"></TeamCard>
            <TeamCard name="Cat Young" role="Blogger"></TeamCard>
            <TeamCard name="Taylor Summerfield" role="Graphic Artist"></TeamCard>

            <Text style={styles.teamTitle}>Ambassadors</Text>
            <TeamCard name="Alea Watson" role="Director of Ambassador Program"></TeamCard>
            <TeamCard name="Emily Erb" role="Student Ambassador"></TeamCard>
            <TeamCard name="Matthew Arthur" role="Student Ambassador"></TeamCard>
            <TeamCard name="Chrity Dey" role="Student Ambassador"></TeamCard>
            <TeamCard name="Aditi Kapoor" role="Student Ambassador"></TeamCard>
            <TeamCard name="Diego Martinez" role="Student Ambassador"></TeamCard>

            <Text style={styles.teamTitle}>Volunteers</Text>
            <TeamCard name="Smrithi Sampath" role="Director of Volunteer Program"></TeamCard>

            <Text style={styles.teamTitle}>Technology Team</Text>
            <TeamCard name="Will Hunter" role="Practicum Advisor"></TeamCard>
            <TeamCard name="Rithwik Nichenametla" role="Project Manager"></TeamCard>
            <TeamCard name="Pranaya Jajoo" role="Project Manager"></TeamCard>
            <TeamCard name="Hojung Lee" role="Product Designer"></TeamCard>
            <TeamCard name="Kimberly Ezeama" role="Product Designer"></TeamCard>
            <TeamCard name="Cody Um" role="Lead Engineer"></TeamCard>
            <TeamCard name="Yasir Azizi" role="Front-end Developer"></TeamCard>
            <TeamCard name="Alex Chao" role="Front-end Developer"></TeamCard>
            <TeamCard name="William Maue" role="Front-end Developer"></TeamCard>
            <TeamCard name="Ethan Ma" role="Front-end Developer"></TeamCard>
            <TeamCard name="Rohan Sidhu" role="Back-end Developer"></TeamCard>
            <TeamCard name="Cedric Blaise" role="Back-end Developer"></TeamCard>
            <TeamCard name="Dongjoo Lee" role="Back-end Developer"></TeamCard>
          </View>
        </View>
        {/*<View style={styles.partners}>
          <Text style={styles.subtitle}>Our Partners</Text>
      </View>*/}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  title: {
    fontFamily: fonts.main,
    fontSize: fonts.lg,
    lineHeight: fonts.lgLineHeight,
    color: colors.background,
    paddingBottom: padding.sm,
    textDecorationLine: "underline",
  },
  subtitle: {
    fontFamily: fonts.main,
    fontSize: fonts.lg,
    lineHeight: fonts.lgLineHeight,
    color: colors.tertiary,
    paddingBottom: padding.sm,
    textDecorationLine: "underline",
  },
  about: {
    padding: padding.md,
    backgroundColor: colors.tertiary,
  },
  text: {
    color: colors.background,
    paddingBottom: padding.sm,
    fontSize: fonts.sm,
    fontFamily:fonts.text
  },
  text2: {
    color: colors.tertiary,
    paddingBottom: padding.sm,
    fontSize: fonts.sm,
    fontFamily:fonts.text
  },
  team: {
    backgroundColor: colors.secondary,
    width: dimensions.fullWidth,
    padding: padding.md,
    flexDirection: "column",
    alignItems: "baseline",
  },
  button: {
    backgroundColor: colors.button,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: padding.sm,
    borderRadius: borderRadius.md,
    marginTop: margin.md,
    marginHorizontal:50
  },
  partners: {
    padding: padding.md,
    backgroundColor: colors.secondary,
    flexDirection: "row",
    alignItems: "center",
  },
  teamTitle: {
    fontFamily: fonts.main,
    fontSize: fonts.lg,
    lineHeight: fonts.lgLineHeight,
    color: colors.tertiary,
    paddingVertical: padding.sm,
  },
});
