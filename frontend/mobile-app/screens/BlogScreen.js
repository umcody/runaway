import React, { useState } from 'react'
import { View, Text, Button,TextInput } from "react-native";
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from "@expo/vector-icons";
import axios from 'axios';

export default function BlogScreen({navigation,route}) {
  
  const {blog,pageNumber,url} = route.params;
  /*
  const [blogs,setBlogs] = useState([])
  
  axios.get('http://192.168.1.251:7000/api/volunteer/blog/get/' + pageNumber, {
    params:{p:pageNumber},
  })
  .then(function (response) {
    setBlogs(response)
  })
  .catch(function (error) {
    console.log(error);
  },[pageNumber]);
*/
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity onPress ={()=>navigation.goBack()} >
        <Ionicons name="md-arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Text>{blog.title} by {blog.author}</Text>
      <Text>{blog.content}</Text>
    </View>
  );
}