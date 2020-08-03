//List of features in a specific category

import React from 'react'
import {Text, View, StyleSheet,Image,Dimensions} from "react-native";
import {TouchableOpacity,ScrollView } from 'react-native-gesture-handler';
import { AntDesign } from "@expo/vector-icons";
import { Link } from '@react-navigation/native';
import {SafeAreaView } from 'react-native-safe-area-context';
import { colors,fonts,padding,margin,icon, dimensions } from '../style/styleValues';
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
        <Text style={styles.featureTitle}>{title}</Text>
        <Text style={styles.featureDescription}>
        {TEXT[0].text}
        </Text>
        <TouchableOpacity onPress={()=>navigation.navigate('PreChat')} style={styles.navigate}>
        <Text style={styles.link}>Go to Messaging</Text>
        </TouchableOpacity>
      </View>
    )
  }
  const FeedFeatureCard = ({title}) => {
    return(
      <View style ={styles.cardContainer}>
        <Text style={styles.featureTitle}>{title}</Text>
        <Text style={styles.featureDescription}>
        {TEXT[1].text}
        </Text>
        <TouchableOpacity onPress={()=>navigation.navigate('Feed')} style={styles.navigate}>
        <Text style={styles.link}>Go to Feed</Text>
        </TouchableOpacity>
      </View>
    )
  }

  const ResourcesFeatureCard = ({title}) => {
    return(
      <View style ={styles.cardContainer}>
        <Text style={styles.featureTitle}>{title}</Text>
        <Text style={styles.featureDescription}>
        {TEXT[3].text}
        </Text>
        <TouchableOpacity onPress={()=>navigation.navigate("Resources")} style={styles.navigate}>
               <Text style={styles.link}>Go to {title}</Text>
          </TouchableOpacity>
      </View>
    )
  }
  const FAQFeatureCard = ({title}) => {
    return(
      <View style ={styles.cardContainer}>
        <Text style={styles.featureTitle}>{title}</Text>
        <Text style={styles.featureDescription}>
        {TEXT[3].text}
        </Text>
        <TouchableOpacity onPress={()=>navigation.navigate("FAQ")} style={styles.navigate}>
               <Text style={styles.link}>Go to {title}</Text>
          </TouchableOpacity>
      </View>
    )
  }
  return (
    <View style={{ flex: 1,backgroundColor:colors.background}}>
          <View style={styles.content}>
              <Text style ={styles.title}>{category}</Text>
              <TouchableOpacity onPress={()=>navigation.goBack()} style={{paddingTop:padding.lg,paddingRight:padding.md}}>
               <AntDesign name="close" size={icon.md} color={colors.background} />
              </TouchableOpacity>
          </View>
          {category =="Messaging" ? 
              <ChatFeatureCard title="Chat"/>
            :
          category =="Feed" ?
             <FeedFeatureCard title="Runaway Blogs"/>
            :
          category =="Resources" ?
              <ResourcesFeatureCard title="Resources"/>
            :
              <FAQFeatureCard title="FAQs"/>
          }
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color:colors.foreground,
    fontSize:fonts.lg,
    fontFamily:fonts.main,
    paddingTop:padding.lg,
    paddingLeft:padding.lg,
    
  },
  content: {
    height:dimensions.fullHeight/4,width:dimensions.fullWidth,
    backgroundColor:colors.primary,
    justifyContent:'space-between',
    alignItems:'flex-start',
    overflow:'hidden',
    flexDirection:'row'
  },
  cardContainer: {
    padding:padding.lg,width:dimensions.fullWidth,borderColor:colors.primary
  },
  featureTitle:{
    fontSize:fonts.lg, fontFamily:fonts.main, color : colors.tertiary,paddingBottom:padding.sm
  },
  featureDescription:{
   fontSize:fonts.sm,fontFamily:fonts.text
  },
  navigate:{
    paddingTop:padding.lg,paddingRight:padding.md
  },
  link:{
    fontSize:fonts.sm,color : colors.tertiary,fontFamily:fonts.text,textDecorationLine:'underline'
  }
});