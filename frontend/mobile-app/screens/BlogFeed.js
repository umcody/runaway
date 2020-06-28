import React,{useState} from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
  FlatList
} from "react-native";
import BlogPost from "../BlogPost"
import useBlogSearch from "../useBlogSearch"
import data from "../SampleData"
export default function WelcomeScreen({navigation}) {
    const [pageNumber,setPageNumber] = useState('1')
    const {
      blogs,
      hasMore,
      loading,
      error
      }  = useBlogSearch(pageNumber)
  console.log(blogs)
  return (
    <View style={styles.home}>
      <FlatList style={styles.listContainer}
	  data={blogs}
	  renderItem={({ item }) => <BlogPost title={item.title} key={item._id} author={item.author} date={item.date}
	  HandlePress ={()=> navigation.navigate('Blog',{
		  title:item.title,
      key:item._id,
      author:item.author,
      date:item.date
	  })}
	  />}
	  keyExtractor={item => item._id}
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
  profile: {
    position: "absolute",
    left: 30,
    top: 55,
    width: 32,
    height: 32,
  },
  listContainer:{
    marginTop:20
  }
});
