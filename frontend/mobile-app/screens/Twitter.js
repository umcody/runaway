import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import { WebView } from 'react-native-webview';
export default function Twitter(props) {
// shows tweets from runaway
// script from Twitter to embed timelines
        let JS = '<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>';
// obtains tweets from Runaway Profile
        let source = JS + '<html><head><meta name="viewport" content="width=device-width, initial-scale=1.0"></head><body><a class="twitter-timeline" href="https://twitter.com/runaway_app?ref_src=twsrc%5Etfw">Tweets by Runaway App</a></body></html> ';

// webview for twitter feed
        return (
          <WebView
            source={{html: source}}
            javaScriptEnabled={true}
          />
        );
    }
    
    // show the runaway profile page
  /*return (
      <>
      <WebView source={{ uri: 'https://twitter.com/runaway_app' }}
            style={{ flex: 1 }}/>
            </>
            
  );
  
}*/
