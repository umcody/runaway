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
import {
  colors,
  fonts,
  padding,
  dimensions,
  margin,
  borderRadius,
  icon,
} from "../style/styleValues.js";
import { ScrollView } from "react-native-gesture-handler";

export default function PrivacyPolicy({ navigation }) {
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
        <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>
      PRIVACY POLICY
      </Text>
      <Text style={styles.mainText}>             
      Updated: 2020-07-21
          </Text>
      <Text style={styles.mainText}>
      
      This Privacy Policy explains how we (RunAway) collect,
      use and share your information when you use our website, mobile
      application and other online products and services (we call all these
      the "Services") or when you otherwise interact with us.
      We may change this Privacy Policy from time to time. If we do,
      we will let you know by revising the date at the top of the policy
      or providing you with additional notice (such as adding a statement
      to our homepage or sending you a notification).
      </Text>
      <Text style={styles.title}>
      HOW WE COLLECT AND USE INFORMATION
      </Text>
      <Text style={styles.subHeading}>
      INFORMATION YOU PROVIDE TO US
      </Text>
      <Text style={styles.mainText}>
      Account Information: When you use our mobile application, a username will be
      randomly assigned to you that you may change or delete at any time. Your username
      is publicly displayed when you interact with the Services, such as when you post a
      RunAway or send a chat message to another user. Please keep in mind that if your username
      contains your real name or is the same as how you identify yourself on other online services,
      people who see it may determine your identity. We may also ask you for, or you may choose to
      provide, additional information, such as age or gender, that will be associated with your
      RunAway account. This information may identify, relate to, describe, reference, is reasonably
      capable of being associated with, or could reasonably be linked, directly or indirectly, with a
      particular consumer, household, or device (“personal information”). Personal information does not
      include: (a) Publicly available information from government records; (b) Deidentified or aggregated
      consumer information; or (c) Information excluded from the California Consumer Protection Act’s scope,
      like: (i) health or medical information covered by the Health Insurance Portability and Accountability
      Act of 1996 (HIPAA) and the California Confidentiality of Medical Information Act (CMIA) or clinical
      trial data; (ii) personal information covered by certain sector-specific privacy laws, including the
      Fair Credit Reporting Act (FCRA), the Gramm-Leach-Bliley Act (GLBA) or California Financial Information
      Privacy Act (FIPA), and the Driver’s Privacy Protection Act of 1994.
      </Text>
        </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        borderWidth: 12,
        borderColor: 'white',
      },
      title: {
        fontFamily: fonts.main,
        fontSize: fonts.lg,
        lineHeight: fonts.lgLineHeight,
        color: colors.tertiary,
        paddingBottom: padding.md,
        textDecorationLine: "underline",
      },
  subHeading: {
    width: dimensions.fullWidth,
    color: colors.tertiary,
    fontSize: fonts.md,
    fontFamily: fonts.main,
    paddingBottom: padding.sm,

  },
  mainText: {
    width: dimensions.fullWidth,
    color: colors.primary,
    fontSize: fonts.sm,
    fontFamily: fonts.main,
    textAlign: 'center',

  }












});
