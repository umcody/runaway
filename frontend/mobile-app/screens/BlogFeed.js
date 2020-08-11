import React,{useState,useCallback} from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  FlatList,
  Text,
  RefreshControl,
  ActivityIndicator,
  StatusBar,
  ImageBackground
} from "react-native";
import {SafeAreaView } from 'react-native-safe-area-context';
import BlogPost from "../components/BlogPost"
import useBlogPage from "../components/useBlogPage"
import useAn from "../components/useAnnouncement"
import {colors, fonts, padding, dimensions,margin,borderRadius} from '../style/styleValues.js'
import { TouchableOpacity } from "react-native-gesture-handler";

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

    //get announcements
    const {
      announcements,
      loadingAn,
      errorAn
      }  = useAn()
    // render horizontal

  const renderAn = ({item}) => {
      return (
        <TouchableOpacity activeOpacity={.8} style={styles.announcement} onPress={()=> navigation.navigate('Announcement',{
          item:item})}>
            <ImageBackground style={{flex:1,width:"100%",alignContent:'flex-end',justifyContent:'flex-end'}} resizeMode="cover" source={{uri:item.image}}>
            <View style={{flex:1,backgroundColor:"rgba(0, 0, 0, 0.2)",justifyContent:'flex-end'}}>
            <Text style={{textAlign:'center', color:"#fff",fontSize:fonts.sm-2,fontFamily:fonts.subheader,paddingBottom:5}}>{item.name}</Text>
            </View>
            </ImageBackground>
        </TouchableOpacity>
      );
    };

  return (
    <View style={styles.home}>
      {!!error ? <Text style={{fontFamily:fonts.text}}>Server Connection Error</Text> :  loading ? <ActivityIndicator style={{paddingTop:padding.md}}/> :
      <FlatList 
      ListHeaderComponent={
        <View>
          <FlatList 
            data={announcements}
            renderItem={renderAn}
            horizontal={true}
            nestedScrollEnabled={true}
            keyExtractor={(item,index) => 'key'+index}
            showsHorizontalScrollIndicator={false}
            style={{paddingBottom:padding.md}}
            initialNumToRender={5}
            windowSize={5}
            />
          <Text style={styles.recentPosts}>Recent Posts</Text>
          </View>
      }
        style={{paddingLeft:padding.sm,paddingRight:padding.sm,paddingTop:padding.sm}}
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
    keyExtractor={(item,index) => 'key'+index}
    showsHorizontalScrollIndicator={false}
    showsVerticalScrollIndicator={false}
    initialNumToRender={5}
    windowSize={9}
    onEndReached={handleLoadMore}
    onEndReachedThreshold={5}
    contentContainerStyle={{paddingBottom:20}}
    refreshControl={
      <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
    }
	/>}
    
    </View>
  );
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems:'center',
  },
  announcement:{
    height:dimensions.fullHeight/5,
    width:dimensions.fullWidth*.3,
    backgroundColor:colors.secondary,
    borderRadius:borderRadius.lg,
    marginTop:margin.sm,
    marginRight:margin.md,
    justifyContent:'center',
    alignItems:'center',
    overflow:'hidden'
  },
  recentPosts:{
      fontSize: fonts.lg,
      lineHeight: fonts.lgLineHeight,
      paddingVertical:padding.md,
      fontFamily:fonts.mainBold,
      color:colors.tertiary
  }
});