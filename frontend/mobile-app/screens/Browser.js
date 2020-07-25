import React from 'react';
import { WebView } from 'react-native-webview';

export default function Browser({ route }) {
    const { page } = route.params;
    return (
        <WebView
            source={{ uri: (page) }}
            style={{ flex: 1 }}
        />
    );
}
