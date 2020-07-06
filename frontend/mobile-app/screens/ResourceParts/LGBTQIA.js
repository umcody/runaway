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

export default function LGBTQIA({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>


                <View>
                    <TouchableOpacity
                        style={styles.emergencyButton}
                        onPress={() => {navigation.navigate('Browser', { page: 'https://lgbtqia.ucdavis.edu/educated/ally-tips' })
                    }}
                    >
                        <Text style={styles.emergencyText}>LGBTQIA Ally Tips</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity
                        style={styles.emergencyButton}
                        onPress={() => {navigation.navigate('Browser', { page: 'https://avp.org/' })
                    }}
                    >
                        <Text style={styles.emergencyText}>Anti-Violence Project</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity
                        style={styles.emergencyButton}
                        onPress={() => {navigation.navigate('Browser', { page: 'https://www.mhanational.org/bullying-lgbt-youth' })
                    }}
                    >
                        <Text style={styles.emergencyText}>Bullying: LGBT Youth</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity
                        style={styles.emergencyButton}
                        onPress={() => {navigation.navigate('Browser', { page: 'https://lgbtqia.ucdavis.edu/trans-101' })
                    }}
                    >
                        <Text style={styles.emergencyText}>Trans 101</Text>
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