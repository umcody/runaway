import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Linking,
  Modal,
  TouchableHighlight,
  Alert,
  Platform,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  colors,
  fonts,
  padding,
  dimensions,
  margin,
  borderRadius,
  icon,
} from "../style/styleValues.js";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import sms from "react-native-sms-linking";
import * as WebBrowser from "expo-web-browser";
import { render } from "react-dom";






/*
  <Text style={styles.title}>{item.title}</Text>
  <Text style={styles.title}>{item.phoneNumber}</Text>
  <Text style={styles.title}>{item.textNumber}</Text>                
  <Text style={styles.title}>{item.website}</Text>
  <Text style={styles.title}>{item.meantFor}</Text>
*/












// standard modal
















const HotlineCard = ({ item }) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
                                <View style={{ alignSelf: "flex-end" }}>
                                  <TouchableHighlight
                                    onPress={() => {
                                      setModalVisible(!modalVisible);
                                    }}
                                  >
                                    <Feather name="x" size={60} color="red" />
                                  </TouchableHighlight>
                                </View>
            <Text style={styles.modalText}>{item.title}</Text>
            <View style={styles.modalButtons}>
              <CallButton item = {item}></CallButton>
              <TextButton item = {item}></TextButton>
              <WebsiteButton item = {item}></WebsiteButton>
            </View>
          </View>
        </View>
      </Modal>

      <TouchableOpacity
        style={styles.openButton}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text style={styles.textStyle}>{item.title}</Text>
        <Text style={styles.textStyle}>{item.meantFor}</Text>
      </TouchableOpacity>
    </View>
  );
};








// call 

const CallButton = ({ item }) => {
  if (String(item.phoneNumber) == "null") {
    return null;
  }
  return (
    <TouchableHighlight
  style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
  onPress={() => {
    Linking.openURL(`tel:${item.phoneNumber}`);
  }}
>
  <View style={styles.modalButtons2}>
    <Feather name="phone-call" size={30} color="white" />
    <Text style={styles.textStyle}>Call</Text>
  </View>
</TouchableHighlight>
  )
  
}













// text button

const TextButton = ({ item }) => {

  if (String(item.textNumber) == "null") {
    return null;
  }
  return (
    <TouchableHighlight
  style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
  onPress={() => {
    sms(String(item.textNumber), String(item.firstText));
  }}
>
  <View style={styles.modalButtons2}>
    <Feather name="message-square" size={30} color="white" />
    <Text style={styles.textStyle}>Text</Text>
  </View>
</TouchableHighlight>
  )
  
}








// website 


const WebsiteButton = ({ item }) => {
  if (String(item.website) == "null"){
    return null;
  }
  return (
    <TouchableHighlight
    style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
    onPress={() => {
      WebBrowser.openBrowserAsync(item.website);
    }}
    >
    <View style={styles.modalButtons2}>
      <MaterialCommunityIcons name="web" size={30} color="white" />
      <Text style={styles.textStyle}>Visit Site</Text>
    </View>
    </TouchableHighlight>
  )
}























// <View>
//     <Modal
//         animationType="slide"
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={() => {
//           Alert.alert("Modal has been closed.");
//         }}
//       >

//       </Modal>

// </View>

// const styles = StyleSheet.create({
//     container: {
//         backgroundColor: colors.background,
//         alignItems: 'center',
//         flex:1,
//     },
//     cardView: {
//         backgroundColor: colors.background,
//         margin: margin.sm,
//         borderRadius: 10,
//         borderWidth: 0,
//         width: dimensions.fullWidth* .9,
//         height: dimensions.fullHeight/6,
//         backgroundColor:colors.primary,
//         justifyContent:'center',
//         paddingLeft:padding.sm,
//         elevation:2,
//         shadowOffset: {
//         width: 0,
//         height: 1,
//         },
//         shadowOpacity: 0.2,
//         shadowRadius: 4,
//         },
//     title: {
//         width: dimensions.fullWidth,
//         color: colors.foreground,
//         fontSize: fonts.md,
//         fontFamily: fonts.text
//     },
//   });

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalButtons: {
    flexDirection: "row",
  },
  modalButtons2: {
    alignItems: "center",
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    fontSize: 24,
    marginBottom: 10,
    textAlign: "center",
    color: "pink",
  },
});

export default HotlineCard;
