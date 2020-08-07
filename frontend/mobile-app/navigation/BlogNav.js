import React, { Component } from 'react'
import { StyleSheet, View ,Text,SafeAreaView,Dimensions,Image} from "react-native";
import { createStackNavigator,CardStyleInterpolators } from '@react-navigation/stack';
import BlogFeed from '../screens/BlogFeed';
import BlogScreen from '../screens/BlogScreen';
import Announcement from '../components/Announcement';
import { Ionicons,Feather} from "@expo/vector-icons";
import {colors, fonts, padding, stylesDefault, icon,dimensions} from '../style/styleValues.js';

// stack nav for blog post to blog page 
//for now this is used as the homepage
export default function BlogNav({navigation}){
    const Stack = createStackNavigator();
    //header logo
    function LogoTitle() {
      return (
        <Image source={require('../assets/RunawayLogo.png')} resizeMode="contain" style={{ width: 55,height:55}}/>
      );
    }
    return (
        <View style = {{flex:1}}>
            <Stack.Navigator>
            <Stack.Screen
          name="Feed"
          component={BlogFeed}
          options={{ title: "Blogs", headerTitleStyle: stylesDefault.headerTitleStyle,
          headerStyle: stylesDefault.headerStyle,
          headerTitleAlign: "center",
          headerTitle: props => <LogoTitle {...props} /> ,
          headerLeft: () => (
            <Feather
              style={{ paddingLeft: padding.md,paddingTop:padding.sm }}
              onPress={() => navigation.openDrawer()}
              name="menu"
              size={icon.sm}
              color={colors.foreground}
            />
            
          ),
              }}
            />
        <Stack.Screen 
        name="Blog" 
        component={BlogScreen} 
        options={{ headerShown:false, gestureResponseDistance:{horizontal: 500}
          }}/>
        <Stack.Screen 
          name ="Announcement"
          component={Announcement}
          options={{ headerShown:false, gestureResponseDistance:{horizontal: 500},
            cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,gestureDirection:'vertical',
            gestureResponseDistance:dimensions.fullHeight,cardOverlayEnabled:true,
            
          }}
          />
            </Stack.Navigator>
       </View>
        
    )
}