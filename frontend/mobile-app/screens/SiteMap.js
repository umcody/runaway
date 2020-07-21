import React from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  FlatList,
  Text,
  RefreshControl,
  ActivityIndicator
} from "react-native";
import FeatureCard from "../components/FeatureCard";

const DATA = [
    {
        id: "1",
        title: "Feed",
      },
      {
        id: "2",
        title: "Resources",
      },
      {
        id: "3",
        title: "Messaging",
      },
      {
        id: "4",
        title: "FAQ",
      },
    ];
//This file is the sitemap that lists features
export default function SiteMap({navigation}) {
  return (
    <View style={styles.home}>
      <FlatList
	  data={DATA}
	  renderItem={({ item }) => {
        return(
          // renders blog component, gives prop HandlePress for navigation
          // when blog component is pressed, it navigates to the blog screen and sends in url prop
          <FeatureCard category={item.title}
            HandlePress ={()=> navigation.navigate('Features',{
              category:item.title,
            })}
          />
        )
    }}
    keyExtractor={item => item.id}
    showsHorizontalScrollIndicator={false}
    showsVerticalScrollIndicator={false}
	/>
    
    </View>
  );
}
const windowW = Dimensions.get("window").width;
const windowH = Dimensions.get("window").height;

const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems:'center'
  },
});