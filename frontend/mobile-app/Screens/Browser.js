import { StatusBar } from 'expo-status-bar';
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

export default function Browser({ route, navigation }) {
    const { page } = route.params;
    return (
        <WebView
            source={{ uri: (page) }}
            style={{ flex: 1 }}
        />
    );
}