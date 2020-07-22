import React, {useState, useEffect} from 'react'
import {View, FlatList} from 'react-native'
import ResourceAPI from '../APIs/ResourceAPI'
import ResourceCard from '../components/ResourceCard'

export default function OfResources({ route, navigation }) {
    const { endPoint } = route.params;
    const [Resources, setResources] = useState([]);

    useEffect(() => {
        getResourcesFromAPI()
    },[])

    function getResourcesFromAPI() {
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
        <View>
            <FlatList data={Resources}
                keyExtractor={(item, index) => 'key' + index}
                renderItem={({item}) => {
                    return (
                        <ResourceCard item = {item}
                        HandlePress = {() => navigation.navigate('Browser', { page: item.url })}
                        />
                    ) 
                }}
            />
        </View>
    )
}