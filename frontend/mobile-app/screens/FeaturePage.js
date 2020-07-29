//List of features in a specific category

import React from 'react'
import {Text, View, StyleSheet,Image,Dimensions} from "react-native";
import {TouchableOpacity,ScrollView } from 'react-native-gesture-handler';
import { AntDesign } from "@expo/vector-icons";
import { Link } from '@react-navigation/native';
import {SafeAreaView } from 'react-native-safe-area-context';
const {width,height}= Dimensions.get('window') 
// shows the feature category
export default function FeaturePage({navigation,route}) {
  const {category} = route.params;

  const TEXT =[
    {
      id:1,
      text: "The chat feature allows users to anonymously talk to our highly skilled and monitored set of volunteers from across the world." +
      "The whole motive is to provide users with an anonymous environment wherein they can share their challenges, " +
      "thoughts, and feelings in 1-on-1 chat rooms, and be heard by our volunteers via active listening. This not only provides users" +
       "with emotional relief, but also gets them in the habit of opening up to others and seeking help by reaching out."
    },
    {
      id:2,
      text: "Positive publications and posts to start your day off right (or put it back on track)! Our bloggers use their creativity"+
      "to bring you fun and meaningful articles; we hope their words leave you feeling happy and inspired."
    },
    {
      id:3,
      text: "Our carefully and passionately curated positivity zone that provides users with happy art, quotes, music, inspiring stories, etc. "+
      "in order to lift their spirits and bring some happiness to them. Thus, we’ve established a page on our website where we aggregate a variety " +
      "of content that we believe will help cheer people up and provide them with a positive way to spend their time."
    },
    {
      id:4,
      text: "Our goal is to make the world happier! We take part by offering public events and seminars to generate awareness for mental health, illness," +
      "and other related disorders. "
    },
    {
      id:5,
      text: "Want to know more about Runaway? Check out our frequently asked questions"
    }
  ]
  const ChatFeatureCard = ({title}) => {
    return(
      <View style ={styles.cardContainer}>
        <Text style={styles.featureTitle}>Chat</Text>
        <Text>
        {TEXT[0].text}
        </Text>
        <TouchableOpacity onPress={()=>navigation.navigate('Chat')} style={styles.navigate}>
        <Text style={{fontSize:16,color : "#2E5F85" }}>Go to {title}</Text>
        </TouchableOpacity>
      </View>
    )
  }

  const FeatureCard = ({title,category,index}) => {
    return(
      <View style ={styles.cardContainer}>
        <Text style={styles.featureTitle}>{title}</Text>
        <Text>
        {TEXT[index].text}
        </Text>
        <TouchableOpacity onPress={()=>navigation.replace('Feature',{category:category})} style={styles.navigate}>
               <Text style={{fontSize:16,color : "#2E5F85" }}>Go to {title}</Text>
          </TouchableOpacity>
      </View>
    )
  }
  return (
    <View style={{ flex: 1,backgroundColor:'#fff'}}>
      <ScrollView style={{ flex: 1, }} contentContainerStyle={{alignItems:'baseline'}}  >
          <View style={styles.content}>
              <Text style ={styles.title}>{category}</Text>
              <TouchableOpacity onPress={()=>navigation.goBack()} style={{paddingTop:30,paddingRight:20}}>
               <AntDesign name="close" size={30} color="#fff" />
              </TouchableOpacity>
          </View>
          {category =="Messaging" ? 
              <ChatFeatureCard title="Chat"/>
            :
          category =="Feed" ?
              (<View><FeatureCard title="Runaway Blogs" category ={category} index={1}/><FeatureCard title="Media" category ={category} index = {2}/></View>)
            :
          category =="Resources" ?
              <FeatureCard title="Resources" category ={category} index={3}/>
            :
              <FeatureCard title="FAQs" category ={category} index={4}/>
          }

      </ScrollView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color:'#000',
    fontSize:21,
    paddingTop:30,
    paddingLeft:30,
    
  },
  content: {
    height:height/4,width:width,
    backgroundColor:'#ACDAFF',
    justifyContent:'space-between',
    alignItems:'flex-start',
    overflow:'hidden',
    flexDirection:'row'
  },
  cardContainer: {
    padding:30,
    borderBottomWidth:1,width:"100%",borderColor:"#ACDAFF"
  },
  featureTitle:{
    fontSize:24, fontWeight:'bold', color : "#2E5F85",paddingBottom:10
  },
  featureDescription:{
   
  },
  navigate:{
    paddingTop:30,paddingRight:20
  }
});