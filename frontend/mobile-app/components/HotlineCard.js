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
  TouchableWithoutFeedbackComponent,
} from "react-native";
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
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
import { LinearGradient } from "expo-linear-gradient";

const HotlineCard = ({ item }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{ alignSelf: "flex-end" }}>
              <TouchableHighlight
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <Feather name="x" size={40} color="#FF9EDA" />
              </TouchableHighlight>
            </View>
            <Text style={styles.title}>{item.title}</Text>
            <View style={styles.modalButtons}>
              <CallButton item={item}></CallButton>
              <TextButton item={item}></TextButton>
              <WebsiteButton item={item}></WebsiteButton>
            </View>
          </View>
        </View>
      </Modal>

      <TouchableOpacity
        style={{
          elevation: 2,
          shadowOffset: {
            width: 0,
            height: 1.5,
          },
          shadowOpacity: 0.2,
          shadowRadius: 1,
        }}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <LinearGradient
          start={[0, 0.5]}
          end={[1, 0.5]}
          colors={["#ACDAFF", "#FF9EDA", "#E3F1FC"]}
          style={{ borderRadius: 10, marginVertical: margin.sm }}
        >
          <View style={styles.cardView}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subheading}>{item.meantFor}</Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const CallButton = ({ item }) => {
  if (String(item.phoneNumber) == "null") {
    return null;
  }
  return (
    <TouchableHighlight
      underlayColor="white"
      style={{ ...styles.openButton, backgroundColor: "white" }}
      onPress={() => {
        Linking.openURL(`tel:${item.phoneNumber}`);
      }}
    >
      <View style={styles.modalButtons2}>
        <Feather name="phone-call" size={30} color="#FF9EDA" />
        <Text style={styles.subheading}>Call</Text>
      </View>
    </TouchableHighlight>
  );
};

const TextButton = ({ item }) => {
  if (String(item.textNumber) == "null") {
    return null;
  }
  return (
    <TouchableHighlight
      underlayColor="white"
      style={{ ...styles.openButton, backgroundColor: "white" }}
      onPress={() => {
        sms(String(item.textNumber), String(item.firstText));
      }}
    >
      <View style={styles.modalButtons2}>
        <Feather name="message-square" size={30} color="#FF9EDA" />
        <Text style={styles.subheading}>Text</Text>
      </View>
    </TouchableHighlight>
  );
};

const WebsiteButton = ({ item }) => {
  if (String(item.website) == "null") {
    return null;
  }
  return (
    <TouchableHighlight
      underlayColor="white"
      style={{ ...styles.openButton, backgroundColor: "white" }}
      onPress={() => {
        WebBrowser.openBrowserAsync(item.website);
      }}
    >
      <View style={styles.modalButtons2}>
        <MaterialCommunityIcons name="web" size={30} color="#FF9EDA" />
        <Text style={styles.subheading}>Visit Site</Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    //justifyContent: "flex-end",
  },

  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 30,
    padding: 10,
    alignItems: "center",
    elevation: 5,
    borderColor: colors.primary,
    borderWidth: 1,
    width: "95%",
  },

  cardView: {
    backgroundColor: colors.background,
    margin: 1,
    borderRadius: 10,
    borderWidth: 0,
    width: dimensions.fullWidth * 0.9,
    height: dimensions.fullHeight / 6,
    backgroundColor: colors.background,
    justifyContent: "center",
    paddingLeft: padding.sm,
  },
  title: {
    color: colors.foreground,
    fontSize: fonts.md,
    fontFamily: fonts.text,
  },
  subheading: {
    fontSize: fonts.md,
    fontFamily: fonts.subheader,
    color: colors.primary,
  },

  modalButtons: {
    flexDirection: "row",
    marginTop: 10,
  },
  modalButtons2: {
    alignItems: "center",
  },
  openButton: {
    borderRadius: 30,
    padding: 10,
    width: "32%",
    marginHorizontal: 3,
  },
});

export default HotlineCard;
