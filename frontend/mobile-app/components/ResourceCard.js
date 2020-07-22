import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const NewsCard = ({item, HandlePress}) => {
    return (
        <View>
            <TouchableOpacity
                style={styles.cardView}
                onPress={HandlePress}
            >
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.title}>{item.url}</Text>
            </TouchableOpacity>           
        </View>
    )
}

const styles = StyleSheet.create({
    cardView: {
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 30,
        borderColor: '#FF9EDA',
        borderWidth: 1,
    },
    title: {
        width: '100%',
        margin: '10%',
        color: "#2E5F85",
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: "center",
    },
  });

export default NewsCard