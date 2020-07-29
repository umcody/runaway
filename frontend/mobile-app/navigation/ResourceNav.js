import React from "react";
import { StyleSheet, Text, View, Image,Dimensions } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons,Feather} from "@expo/vector-icons";
//import ResourceScreen from "../screens/ResourceMain";
import OfResources from '../screens/OfResources'
//import Browser from "../screens/Browser";

const Stack = createStackNavigator();

function ResourceNav({navigation}) {
  //header logo
  function LogoTitle() {
    return (
      <Image source={require('../assets/RunawayLogo.png')} resizeMode="contain" style={{ width: 55}}/>
    );
  }
  return (
      <Stack.Navigator initialRouteName="ResourceScreen">
        
        <Stack.Screen
          name='Links'
          component={OfResources}
          options={{ title: "Resources", headerTitleStyle: styles.headerTitleStyle,
          headerStyle: styles.headerStyle,
          headerTitleAlign: "center",
          headerTitle: props => <LogoTitle {...props} /> ,
          headerLeft: () => (
            <Feather
            style={{ paddingLeft: 25,paddingTop:5 }}
            onPress={() => navigation.openDrawer()}
            name="menu"
            size={25}
            color="#000"
          />
            
          ),
              }}
          
        />
      </Stack.Navigator>
  );
}
const windowW = Dimensions.get("window").width;
const windowH = Dimensions.get("window").height;
const styles = StyleSheet.create({
  headerTitleStyle: {
    fontFamily: "System",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 24,
    lineHeight: 30,
    color: "#2E5F85",
  },
  headerTitleStyle: {
    fontFamily: "System",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 24,
    lineHeight: 30,
    color: "#2E5F85",
  },
  headerStyle: {
    borderBottomWidth: 0,
    shadowColor: "#ACDAFF",
    backgroundColor: "#fff",
    height: windowH / 8,
    borderBottomColor: "#ACDAFF",
    elevation:2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});
export default ResourceNav;