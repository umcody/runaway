import React from 'react'
import { SafeAreaView, Text, View, StyleSheet,Image,Dimensions} from "react-native";
import {TouchableOpacity,ScrollView } from 'react-native-gesture-handler';
import { AntDesign } from "@expo/vector-icons";
import BlogNavFromHelp from "../navigation/BlogNavFromHelp";
import OfResources from "../screens/OfResources";

const {width,height}= Dimensions.get('window') 
// directs to feature pages
export default function Feature({navigation,route}) {
  const {category} = route.params;

  return (
    <View style={{ flex: 1,backgroundColor:'#fff'}}>
    {category=="Feed" ? <BlogNavFromHelp navigation={navigation}/> :  category=="Resources" ? <OfResources/> : <Text>FAQ PAGE</Text>}
    </View>
  );
}