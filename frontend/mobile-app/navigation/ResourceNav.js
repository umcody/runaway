import React from "react";
import { StyleSheet, Text, View, Image,Dimensions } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons,Feather} from "@expo/vector-icons";
//import ResourceScreen from "../screens/ResourceMain";
import OfResources from '../screens/OfResources'
//import Browser from "../screens/Browser";
import {colors, fonts, padding, dimensions,margin,borderRadius, icon, stylesDefault} from '../style/styleValues.js'

const Stack = createStackNavigator();

function ResourceNav({navigation}) {
  //header logo
  function LogoTitle() {
    return (
      <Image source={require('../assets/RunawayLogo.png')} resizeMode="contain" style={{ width: 55,height:55}}/>
    );
  }
  return (
      <Stack.Navigator initialRouteName="ResourceScreen">
        
        <Stack.Screen
          name='Links'
          component={OfResources}
          options={{ title: "Resources", headerTitleStyle: stylesDefault.headerTitleStyle,
          headerStyle: styles.headerStyle,
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
      </Stack.Navigator>
  );
}

export default ResourceNav;

const styles = StyleSheet.create({
  headerStyle: {
    borderWidth: 0,
    borderBottomColor:colors.background,
    backgroundColor: colors.background,
    height:dimensions.fullHeight/8,
    elevation:0,
    shadowColor:colors.background,
  },
}
)