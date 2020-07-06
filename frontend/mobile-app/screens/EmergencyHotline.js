//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import call from 'react-native-phone-call';
//import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';

export default class App extends React.Component {
    call = () => {
      //handler to make a call
      const args = {
        number: '6475706640',
        prompt: false,
      };
      call(args).catch(console.error);
    };
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
            <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text style={styles.headlineText}>Emergency Hotlines</Text>

                <View /*style={styles.container}*/>
                    <Text style={styles.subHeadlineText}>Mental Health & Suicides</Text>
                    <TouchableOpacity
                        style={styles.emergencyButton}
                        onPress={this.call}
                    >
                        <Text style={styles.emergencyText}>National Suicide</Text>
                        <Text style={styles.emergencyText}>Prevention Hotline</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.emergencyButton}
                        onPress={() => {alert("you clicked me");}}
                    >
                        <Text style={styles.emergencyText}>Crisis Text Line</Text>
                    </TouchableOpacity>                    
                </View>

                <View /*style={styles.container}*/>
                    <Text style={styles.subHeadlineText}>For Kids and Teens</Text>
                    <TouchableOpacity
                        style={styles.emergencyButton}
                        onPress={() => {alert("you clicked me");}}
                    >
                        <Text style={styles.emergencyText}>YouthLine</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.emergencyButton}
                        onPress={() => {alert("you clicked me");}}
                    >
                        <Text style={styles.emergencyText}>Childhelp National</Text>
                        <Text style={styles.emergencyText}>Child Abuse Hotline</Text>
                    </TouchableOpacity>                    
                </View>

                <View /*style={styles.container}*/>
                    <Text style={styles.subHeadlineText}>Domestic & Sexual Violence</Text>
                    <TouchableOpacity
                        style={styles.emergencyButton}
                        onPress={() => {alert("you clicked me");}}
                    >
                        <Text style={styles.emergencyText}>National Domestic</Text>
                        <Text style={styles.emergencyText}>Abuse Hotline</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.emergencyButton}
                        onPress={() => {alert("you clicked me");}}
                    >
                        <Text style={styles.emergencyText}>National Deaf</Text>
                        <Text style={styles.emergencyText}>Domestic Abuse</Text>
                        <Text style={styles.emergencyText}>Hotline</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.emergencyButton}
                        onPress={() => {alert("you clicked me");}}
                    >
                        <Text style={styles.emergencyText}>RAINN</Text>
                    </TouchableOpacity>
                </View>

                <View /*style={styles.container}*/>
                    <Text style={styles.subHeadlineText}>LGBTQIA+</Text>
                    <TouchableOpacity
                        style={styles.emergencyButton}
                        onPress={() => {alert("you clicked me");}}
                    >
                        <Text style={styles.emergencyText}>The Trevor Project</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.emergencyButton}
                        onPress={() => {alert("you clicked me");}}
                    >
                        <Text style={styles.emergencyText}>Trans Lifeline</Text>
                    </TouchableOpacity>                    
                </View>

                <View /*style={styles.container}*/>
                    <Text style={styles.subHeadlineText}>Drug or Alcohol Abuse</Text>
                    <TouchableOpacity
                        style={styles.emergencyButton}
                        onPress={() => {alert("you clicked me");}}
                    >
                        <Text style={styles.emergencyText}>SAMHSA National</Text>
                        <Text style={styles.emergencyText}>Helpline</Text>
                    </TouchableOpacity>                          
                </View>
            </ScrollView>
            </SafeAreaView>
        </View>);
    }
  }








  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ffffff',
    },
    emergencyButton: {
        backgroundColor: "white",
        borderRadius: 30,
        width: 150,
        margin: 20,
        height: 60,
        justifyContent: "center",
        borderColor: '#FF9EDA',
        borderWidth: 1,
        alignSelf: 'center'
    },
    emergencyText: {
        color: "#2E5F85",
        fontSize: 14,
        fontFamily: "Roboto",
        textAlign: "center",
        fontWeight: "normal",
        fontStyle: "normal",
    },
    headlineText: {
        color: "#FF9EDA",
        fontSize: 30,
        fontFamily: "Roboto",
        textAlign: "center",
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 35,
    },
    subHeadlineText: {
        color: "#2E5F85",
        fontSize: 20,
        fontFamily: "Roboto",
        textAlign: "center",
        fontWeight: "normal",
        fontStyle: "normal",
    },
  });