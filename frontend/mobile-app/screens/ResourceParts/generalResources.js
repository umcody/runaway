//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    Linking,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { WebView } from 'react-native-webview';

export default function GeneralResources({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>


                <View>
                    <TouchableOpacity
                        style={styles.emergencyButton}
                        onPress={() => {navigation.navigate('Browser', { page: 'https://www.mhanational.org/' })
                    }}
                    >
                        <Text style={styles.emergencyText}>Mental Health America</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity
                        style={styles.emergencyButton}
                        onPress={() => {navigation.navigate('Browser', { page: 'https://www.today.com/news/good-news' })
                    }}
                    >
                        <Text style={styles.emergencyText}>Good News</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity
                        style={styles.emergencyButton}
                        onPress={() => {navigation.navigate('Browser', { page: 'https://theaggie.org/2020/04/17/a-list-of-heartwarming-things-happening-in-the-world-right-now/' })
                    }}
                    >
                        <Text style={styles.emergencyText}>A list of heartwarming things happening in the world right now</Text>
                    </TouchableOpacity>
                </View>


            </ScrollView>
            </SafeAreaView>
        </View>
    );
} 
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    emergencyButton: {
        backgroundColor: "white",
        borderRadius: 30,
        width: 160,
        margin: 15,
        height: 100,
        justifyContent: "center",
        borderColor: '#FF9EDA',
        borderWidth: 1,
        alignSelf: 'center'
      },
    emergencyText: {
        color: "#2E5F85",
        fontSize: 24,
        fontFamily: "System",
        textAlign: "center",
        fontWeight: "normal",
        fontStyle: "normal",
    },
  });