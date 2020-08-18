import React, {useState, useEffect} from 'react'
import {SafeAreaView, FlatList, Text,View} from 'react-native'
import ResourceAPI from '../APIs/ResourceAPI'
import ResourceCard from '../components/ResourceCard'
//import Fuse from 'fuse.js'
import DropDownPicker from 'react-native-dropdown-picker';
import { SearchBar,Icon } from 'react-native-elements';
import {colors, fonts, padding, dimensions,margin,borderRadius, icon} from '../style/styleValues.js'

export default function OfResources({ route, navigation }) {
    //const { endPoint } = route.params;
    const [Resources, setResources] = useState([]);
    const [EndPoint,setEndPoint] = useState('api/volunteer/resource')
    const [Search,setSearch] = useState('')
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
    
    // get resources on screen load
    useEffect(() => {
        getResourcesFromAPI(EndPoint)
    },[])

    // function to get resources
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
    // when user inputs text, the get resources is called dynamically
     const updateSearch = (Search) => {
        setSearch({ Search });
        getResourcesFromAPI('api/volunteer/resource?search=' + Search)
      };
    return (
        <SafeAreaView style={{flex:1,backgroundColor:colors.background}}>
            <SearchBar
                  placeholder="Search (e.g. Anxiety)"
                  value={Search}
                  onChangeText={updateSearch}
                  containerStyle={{borderWidth:1,borderColor:colors.primary,borderTopColor:colors.primary,borderBottomColor:colors.primary, marginVertical:margin.sm,marginHorizontal:margin.md,width:dimensions.fullWidth*.9,height:35,borderRadius: borderRadius.lg,
                    overflow:"hidden",justifyContent:'center',backgroundColor:colors.background,}}
                    inputStyle={{backgroundColor:'transparent',fontSize:fonts.sm,fontFamily:fonts.text}}
                  inputContainerStyle={{backgroundColor:'transparent',height:25,borderWidth:0}}
                  searchIcon={props=>{return(<Icon {...props} name='search' color={colors.tertiary}/>)}}
                />
            <DropDownPicker
                items={[
                    {label: 'All Resources', value: 'api/volunteer/resource'},
                    {label: 'LGBTQIA+', value: 'api/volunteer/resource?filter=LGBTQIA%2B'},
                    {label: 'Kids and Teens', value: 'api/volunteer/resource?filter=Kids%20and%20Teens'},
                    {label: 'Substance Related Disorders', value: 'api/volunteer/resource?filter=Substance%20Related%20Disorders'},
                    {label: 'Mood Related Disorders', value: 'api/volunteer/resource?filter=Mood%20Related%20Disorders'},
                    {label: 'Trauma Related Disorders', value: 'api/volunteer/resource?filter=Anxiety%20and%20Trauma%20Related%20Disorders'},
                    {label: 'Psychotic Disorders', value: 'api/volunteer/resource?filter=Psychotic%20Disorders'},
                    {label: 'Deliberate Self Harm', value: 'api/volunteer/resource?filter=Deliberate%20Self%20Harm'},
                    {label: 'Eating Disorders', value: 'api/volunteer/resource?filter=Eating%20Disorders'},
                    {label: 'Domestic and Sexual Violence', value: 'api/volunteer/resource?filter=Domestic%20and%20Sexual%20Violence'},
                ]}
                dropDownMaxHeight={300}
                defaultValue={EndPoint}
                placeholder="Filter"
                containerStyle={{height: 40,borderTopWidth:0}}
                style={{backgroundColor: colors.background,borderWidth:0}}
                itemStyle={{
                    justifyContent: 'flex-start'
                }}
                dropDownStyle={{backgroundColor: colors.background}}
                onChangeItem={item =>{
                    getResourcesFromAPI(item.value)
                }}
                labelStyle={{
                    paddingLeft:padding.sm,
                    fontSize: fonts.md,
                    textAlign: 'left',
                    color: colors.foreground,
                    fontFamily:fonts.main,

                }} 
            />
            <View style={{borderBottomWidth:.5,borderColor:colors.primary}}>
                <Text style={{paddingBottom:padding.sm,paddingLeft:padding.md-1,color: colors.tertiary,fontFamily:fonts.text}}>
                    {Resources.length} {(Resources.length===1)? "Result" : "Results"}</Text>
            </View>

            
            <FlatList data={Resources}
            nestedScrollEnabled={true}
            
                keyExtractor={(item, index) => 'key' + index}
                renderItem={({item}) => {
                    return (
                        <ResourceCard item = {item}
                        />
                    ) 
                }}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    )
}