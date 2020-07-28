import React, {useState, useEffect} from 'react'
import {SafeAreaView, FlatList, Text} from 'react-native'
import ResourceAPI from '../APIs/ResourceAPI'
import ResourceCard from '../components/ResourceCard'
import Fuse from 'fuse.js'
import DropDownPicker from 'react-native-dropdown-picker';

export default function OfResources({ route, navigation }) {
    //const { endPoint } = route.params;
    const [Resources, setResources] = useState([]);
    const [EndPoint,setEndPoint] = useState('api/volunteer/resource')
    /*const fuse = new Fuse(characters, {
        keys: [ //the keys for the data that we want to search on
          'title',
          'categories'
        ],
        includeScore: true // score form 0-1. lower score means better match
      });

     
       * in the brackets we put in what we wanna seach
       
      const results = fuse.search();
    */
      
   
    useEffect(() => {
        getResourcesFromAPI(EndPoint)
    },[])

    function getResourcesFromAPI(endPoint) {
        ResourceAPI.get((endPoint))
            .then(async function (response) {
                setResources(response.data);
            })
            .catch(function (error) {
                console.log(error)
            })
    }
    if (!Resources) {
        return null
    }

    return (
        <SafeAreaView style={{flex:1,backgroundColor:"#fff"}}>
            <DropDownPicker
                items={[
                    {label: 'General Resources', value: 'api/volunteer/resource'},
                    {label: 'LGBTQIA+', value: 'api/volunteer/resource?filter=LGBTQIA%2B'},
                ]}
                defaultValue={EndPoint}
                placeholder="Filter"
                containerStyle={{height: 40,borderWidth:0}}
                style={{backgroundColor: '#fff',borderWidth:0}}
                itemStyle={{
                    justifyContent: 'flex-start'
                }}
                dropDownStyle={{backgroundColor: '#fff'}}
                onChangeItem={item =>{
                    getResourcesFromAPI(item.value)
                }}
                labelStyle={{
                    paddingLeft:10,
                    fontSize: 16,
                    textAlign: 'left',
                    color: '#000'
                }} 
                dropDownStyle={{backgroundColor: '#fff',}}
            />
            <FlatList data={Resources}
            ListHeaderComponent={<Text style={{paddingLeft:20,color: '#C4C4C4'}}>{Resources.length} Results</Text>}
                keyExtractor={(item, index) => 'key' + index}
                renderItem={({item}) => {
                    return (
                        <ResourceCard item = {item}
                        HandlePress = {() => navigation.navigate('Browser', { page: item.url })}
                        />
                    ) 
                }}
            />
        </SafeAreaView>
    )
}