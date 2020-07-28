import React from 'react';
import { StyleSheet, Text, View, Dimensions,Linking } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const NewsCard = ({item}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.cardView}
                onPress={() => {
                    Linking.openURL("item.url");
                  }}
 >
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.title}>{item.url}</Text>
                <Text style={styles.title}>{item.url}</Text>
            </TouchableOpacity>           
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',        
        alignItems: 'center',
        flex:1,
    },
    cardView: {
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 10,
        borderColor: '#FF9EDA',
        borderWidth: 0,
        width: 330,
        height: 100,
        backgroundColor:"#ACDAFF",
        justifyContent:'center',
        paddingLeft:10,
        elevation:1,
        shadowOffset: {
        width: 0,
        height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        },
    title: {
        width: '100%',
        color: "#000",
        fontSize: 16,
    },
  });

export default NewsCard