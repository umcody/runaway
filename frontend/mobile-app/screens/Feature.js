import React from 'react'
import { SafeAreaView, Text, View, StyleSheet,Image,Dimensions} from "react-native";
import {TouchableOpacity,ScrollView } from 'react-native-gesture-handler';
import { AntDesign } from "@expo/vector-icons";
import BlogNav from "../navigation/BlogNav";
import Res from "../screens/ResourcesDummy";

const {width,height}= Dimensions.get('window') 
// directs to feature pages
export default function Feature({navigation,route}) {
  const {category} = route.params;

  return (
    <SafeAreaView style={{ flex: 1,backgroundColor:'#fff'}}>
    {category=="Feed" ? <BlogNav/> :  category=="Resources" ? <Res/> : <Text>FAQ PAGE</Text>}
      
    </SafeAreaView>
  );
}