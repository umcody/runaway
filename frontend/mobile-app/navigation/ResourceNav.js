import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/ResourceParts/Home";
import GeneralResources from "../screens/ResourceParts/generalResources";
import LGBTQIA from "../screens/ResourceParts/LGBTQIA";
import KidsAndTeens from "../screens/ResourceParts/kidsAndTeens";
import SubstanceRelatedDisorders from "../screens/ResourceParts/substanceRelatedDisorders";
import MoodRelatedDisorders from "../screens/ResourceParts/moodRelatedDisorders";
import AnxietyAndTraumaRelatedDisorders from "../screens/ResourceParts/anxietyAndTraumaRelatedDisorders";
import PsychoticDisorders from "../screens/ResourceParts/psychoticDisorders";
import DeliberateSelfHarm from "../screens/ResourceParts/deliberateSelfHarm";
import EatingDisorders from "../screens/ResourceParts/eatingDisorders";
import DomesticAndSexualViolence from "../screens/ResourceParts/domesticAndSexualViolence";
import Browser from "../screens/ResourceParts/Browser";



const Stack = createStackNavigator();

function ResourceNav() {
  return (
    <>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Resources"
          component={HomeScreen}
          options={{ title: "Resources" }}
        />

        <Stack.Screen name="General Resources" component={GeneralResources} />

        <Stack.Screen name="LGBTQIA+" component={LGBTQIA} />

        <Stack.Screen name="Kids and Teens" component={KidsAndTeens} />

        <Stack.Screen
          name="Substance Related Disorders"
          component={SubstanceRelatedDisorders}
        />

        <Stack.Screen
          name="Mood Related Disorders"
          component={MoodRelatedDisorders}
        />

        <Stack.Screen
          name="Anxiety and Trauma Related Disorders"
          component={AnxietyAndTraumaRelatedDisorders}
        />

        <Stack.Screen
          name="Psychotic Disorders"
          component={PsychoticDisorders}
        />

        <Stack.Screen
          name="Deliberate Self Harm"
          component={DeliberateSelfHarm}
        />

        <Stack.Screen name="Eating Disorders" component={EatingDisorders} />

        <Stack.Screen
          name="Domestic and Sexual Violence"
          component={DomesticAndSexualViolence}
        />

        <Stack.Screen
          name="Browser"
          component={Browser}
          options={{ title: "Browser" }}
        />
      </Stack.Navigator>
    </>
  );
}

export default ResourceNav;
