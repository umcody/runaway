import React, { useState } from "react";
import { StyleSheet, Text, View, Dimensions,Linking, Modal, TouchableHighlight,Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {colors, fonts, padding, dimensions,margin,borderRadius, icon} from '../style/styleValues.js'
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";






import * as WebBrowser from "expo-web-browser";


const HotlineCard = ({item}) => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        // <View style={styles.container}>
        //     <TouchableOpacity
        //         style={styles.cardView}
        //         onPress={() => {
        //             WebBrowser.openBrowserAsync("https://www." +item.url)
        //           }}>
        //         <Text style={styles.title}>{item.title}</Text>
        //         <Text style={styles.title}>{item.phoneNumber}</Text>
        //         <Text style={styles.title}>{item.textNumber}</Text>                
        //         <Text style={styles.title}>{item.website}</Text>
        //         <Text style={styles.title}>{item.meantFor}</Text>
        //     </TouchableOpacity>           
        // </View>



        <View style={styles.centeredView}>      
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View style={styles.centeredView}>
          
            <View style={styles.modalView}>
            <View style={{alignSelf: "flex-end"}}><TouchableOpacity onPress={() => {setModalVisible(!modalVisible);}}><Feather name="x" size={30} color="red" /></TouchableOpacity></View>
              <Text style={styles.modalText}>Name</Text>
  
  
  
              <View style={styles.modalButtons}>
                
              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                
                <View style={styles.modalButtons2}>
                  <Feather name="phone-call" size={30} color="white" />
                  <Text style={styles.textStyle}>Call</Text>
                  
                </View>
                
              </TouchableHighlight>
  
              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                
                <View style={styles.modalButtons2}>
                  <Feather name="message-square" size={30} color="white" />
                  <Text style={styles.textStyle}>Text</Text>
                  
                </View>
            
              </TouchableHighlight>
  
              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                
                <View style={styles.modalButtons2}>
                  <MaterialCommunityIcons name="web" size={30} color="white" />
                  <Text style={styles.textStyle}>Visit Site</Text>
                  
                </View>
                
  
              </TouchableHighlight>
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
        height: 2
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
      elevation: 2
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      fontSize: 24,
      marginBottom: 10,
      textAlign: "center",
      color: "pink",
    }
  });

export default HotlineCard