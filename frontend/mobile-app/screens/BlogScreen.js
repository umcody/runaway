import React, { useState } from 'react'
import { View, Text, Button,TextInput } from "react-native";
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';

export default function BlogScreen({navigation,route}) {
  
  const {title,author,date} = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{title} by {author} {date}</Text>
    </View>
  );
}