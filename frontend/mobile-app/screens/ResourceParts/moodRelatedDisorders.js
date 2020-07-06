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

export default function KidsAndTeens({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>


                <View>
                    <TouchableOpacity
                        style={styles.emergencyButton}
                        onPress={() => {navigation.navigate('Browser', { page: 'https://www.leva.co.nz/wp-content/uploads/2014/06/LeVa-Depression_factsheet2019.pdf' })
                    }}
                    >
                        <Text style={styles.emergencyText}>Understanding depression</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity
                        style={styles.emergencyButton}
                        onPress={() => {navigation.navigate('Browser', { page: 'https://www.mentalwealth.nz/article/anxiety/' })
                    }}
                    >
                        <Text style={styles.emergencyText}>Understanding the impact of anxiety
</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity
                        style={styles.emergencyButton}
                        onPress={() => {navigation.navigate('Browser', { page: 'https://www.obad.ca/' })
                    }}
                    >
                        <Text style={styles.emergencyText}>Organization for Bipolar Affective Disorders</Text>
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