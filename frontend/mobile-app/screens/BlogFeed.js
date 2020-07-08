import React,{useState} from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  FlatList,
  Text
} from "react-native";
import BlogPost from "../BlogPost"
import useBlogPage from "../useBlogPage"
import data from "../SampleData"

//This file is the blog feed component that allows infinite scrolling
export default function BlogFeed({navigation}) {
  //default page number is 1 which is the first page of blogs
  const [pageNumber,setPageNumber] = useState(1)
  // returns the blogs data and other variables regarding the blogs from the custom hook, useBlogPage
  const {
    blogs,
    hasMore,
    loading,
    error
    }  = useBlogPage(pageNumber)
  // This function checks if there are more blogs to load and updates the blogs state by updating the page number 
    function handleLoadMore(){
      if(hasMore && blogs.length ==20){
        setPageNumber(pageNumber+1)
      }
    }
  return (
    <View style={styles.home}>
      <FlatList
	  data={blogs}
	  renderItem={({ item }) => {
        return(
          // renders blog component, gives prop HandlePress for navigation
          // when blog component is pressed, it navigates to the blog screen and sends in url prop
          <BlogPost title={item.title} key={item._id} author={item.author} url ={item.url}
            HandlePress ={()=> navigation.navigate('Blog',{
              url:item.url,
            })}
          />
        )
    }}
    keyExtractor={item => item._id}
    showsHorizontalScrollIndicator={false}
    showsVerticalScrollIndicator={false}
    initialNumToRender={20}
    //When the user scrolls to the end defined by the onEndReachThreshold, function handleLoadMore is called
    // gives infinite scroll effect.
    onEndReached={handleLoadMore}
    onEndReachedThreshold={5}
	/>
    <Text>{error && 'Server Connection Error'}</Text>
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
});
