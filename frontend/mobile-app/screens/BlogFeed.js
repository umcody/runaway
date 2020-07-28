import React,{useState,useCallback} from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  FlatList,
  Text,
  RefreshControl,
  ActivityIndicator,
  TouchableOpacity,
  Image
} from "react-native";
import {SafeAreaView } from 'react-native-safe-area-context';
import BlogPost from "../components/BlogPost"
import useBlogPage from "../components/useBlogPage"
import data from "../SampleData"


// Sample data for events/announcement

const AN =[
  {
  key:'1',
  title:"Event 1"
  },
  {
    key:'2',
    title:"Event 2"
  },
  {
  key:'3',
  title:"Event 3"
  },
  {
    key:'4',
    title:"Event 4"
  }
]
//This file is the blog feed component that allows infinite scrolling
export default function BlogFeed({navigation,fromHelp}) {

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
  // refresh functionality (Not tested)
    function wait(timeout) {
      return new Promise(resolve => {
        setTimeout(resolve, timeout);
      });
    }  
    const [refreshing, setRefreshing] = useState(false);
  // function onRefreah to change refreshing state to true, wait, then to false
    const onRefresh = useCallback(() => {
      setRefreshing(true);
  
      wait(2000).then(() => setRefreshing(false));
    }, [refreshing]);

    // render horizontal
  const renderAn = ({item}) => {
      return (
        <View style={styles.announcement}>
          <Text>{/*item.title*/}</Text>
        </View>
      );
    };

  return (
    <View style={styles.home}>
      {!!error ? <Text>Server Connection Error</Text> :  loading ? <ActivityIndicator /> :
      <FlatList 
      ListHeaderComponent={
        <View>
          <FlatList 
            data={AN}
            renderItem={renderAn}
            horizontal={true}
            nestedScrollEnabled={true}
            keyExtractor={item => item.key}
            showsHorizontalScrollIndicator={false}/>
          <Text style={{
            fontSize: 21,
            lineHeight: 25,
            paddingVertical:18
          }}>Recent Posts</Text>
          </View>
      }
        style={{paddingLeft:20,paddingTop:10}}
        nestedScrollEnabled={true}
        data={blogs}
        renderItem={({ item }) => {
        return(
          <BlogPost title={item.title} key={item._id} author={item.author} date={item.date} url ={item.url} imageURL={item.imageURL}
            readTime={item.readTime}
            HandlePress ={()=> navigation.navigate('Blog',{
              url:item.url,
            })}
          />
        )
    }}
    keyExtractor={item => item._id}
    showsHorizontalScrollIndicator={false}
    showsVerticalScrollIndicator={false}
    initialNumToRender={5}
    onEndReached={handleLoadMore}
    onEndReachedThreshold={5}
    refreshControl={
      <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
    }
	/>}
    
    </View>
  );
}
const windowW = Dimensions.get("window").width;
const windowH = Dimensions.get("window").height;

const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems:'center',
  },
  announcement:{
    height:100,
    width:80,
    backgroundColor:'#e3f1fc',
    borderRadius:30,
    marginTop:9,
    marginRight:16,
    justifyContent:'center',
    alignItems:'center'
  }
});
