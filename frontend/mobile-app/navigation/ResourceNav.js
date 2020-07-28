import React from "react";
import { StyleSheet, Text, View, Image,Dimensions } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons,Feather} from "@expo/vector-icons";
import ResourceScreen from "../screens/ResourceMain";
import OfResources from '../screens/OfResources'
import Browser from "../screens/Browser";

const Stack = createStackNavigator();

function ResourceNav({navigation}) {
  //header logo
  function LogoTitle() {
    return (
      <Image source={require('../assets/RunawayLogo.png')} resizeMode="contain" style={{ width: 60}}/>
    );
  }
  return (
      <Stack.Navigator initialRouteName="ResourceScreen">
        
        <Stack.Screen
          name='Links'
          component={OfResources}
          options={{ title: "Resources", headerTitleStyle: styles.headerTitleStyle,
          headerStyle: styles.headerStyle,
          headerTitle: props => <LogoTitle {...props} /> ,
          headerLeft: () => (
            <Feather
              style={{ paddingLeft: 25 }}
              onPress={() => navigation.openDrawer()}
              name="menu"
              size={30}
              color="#FF9EDA"
            />
            
          ),
              }}
          
        />
        <Stack.Screen
          name="Browser"
          component={Browser}
          options={{ title: "Browser" }}
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
  headerStyle: {
    borderBottomWidth: 0,
    shadowColor: "transparent",
    backgroundColor: "#fff",
    height: windowH / 9,
    borderBottomColor: "#ACDAFF",
    elevation:0
  },
});
export default ResourceNav;