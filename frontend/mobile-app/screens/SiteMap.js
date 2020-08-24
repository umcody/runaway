import React from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  FlatList,
  Text,
  RefreshControl,
  ActivityIndicator,
  StatusBar,
  Platform
} from "react-native";
import { useIsFocused } from '@react-navigation/native';
import FeatureCard from "../components/FeatureCard";
import { colors } from "../style/styleValues";

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
    
function FocusAwareStatusBar(props) {
  const isFocused = useIsFocused();
    
  return isFocused ? <StatusBar {...props} backgroundColor={colors.tertiary}/> : null;
}
//This file is the sitemap that lists features
export default function SiteMap({navigation}) {
  return (
    <View style={styles.home}>
      <FocusAwareStatusBar barStyle="light-content" />
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
    contentContainerStyle={{paddingBottom:20}}
	/>
    
    </View>
  );
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems:'center'
  },
});