import React, { useState } from 'react'
import { View, Text, Button,TextInput } from "react-native";
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from "@expo/vector-icons";
export default function BlogScreen({navigation,route}) {
  
  const {url,title,author} = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity onPress ={()=>navigation.goBack()} >
        <Ionicons name="md-arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Text>{title} by {author}</Text>
      <Text>{url}</Text>
    </View>
  );
}