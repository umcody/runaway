import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList
} from "react-native";

// Card component for each member
const TeamCard = ({name,role}) => (
    <View style={{backgroundColor:'#fff',width:'100%',borderRadius:10,marginBottom:10}}>
        <View style={{padding:10}}>
            <Text style={{color:'#2E5F85',fontSize:18,fontWeight:'bold',paddingBottom:5}}>{name}</Text>
        <Text style={{color:'#2E5F85'}}>{role}</Text>
        </View>
    </View>
  );

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 10,
      marginHorizontal: 16
    },
    item: {
      backgroundColor: "#f9c2ff",
      padding: 20,
      marginVertical: 8
    },
    header: {
      fontSize: 32,
      backgroundColor: "#fff"
    },
    title: {
      fontSize: 24
    }
  });
  
  export default TeamCard;