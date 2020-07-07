import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Text,
  Dimensions,
} from "react-native";

export default function PreChatSurveyModal({ navigation }) {
  const [modalVisible, setModalVisible] = useState(true);
  const [checked, setChecked] = useState(false);

  return (
    <View style={styles.fullContainer}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.container}>
          <Text style={styles.message}>
            This is a
            <Text style={{ fontWeight: "bold" }}> voluntary survey</Text> that
            help us deliver the best experience during your chat. Your data
            allows Runaway to analyze information to create specific resources
            to others searching for assistance.
          </Text>
          <TouchableOpacity
            style={styles.buttonDismiss}
            onPress={() => {
              setModalVisible(false);
              navigation.navigate("PreChatSurvey");
            }}
          >
            <Text style={{ color: "#FFFFFF", fontSize: 24 }}>Start</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

const windowW = Dimensions.get("window").width;
const windowH = Dimensions.get("window").height;

const heightModal = 350;
const widthModal = 270;

const styles = StyleSheet.create({
  message: {
    color: "#2E5F85",
    fontStyle: "normal",
    fontSize: 24,
    alignItems: "center",
    textAlign: "center",
    padding: 10,
  },
  fullContainer: {
    flex: 1,
    backgroundColor: "#E3F1FC",
  },
  container: {
    alignSelf: "center",
    backgroundColor: "#FFFFFF",
    width: widthModal,
    alignItems: "center",
    height: heightModal,
    marginTop: windowH / 2 - heightModal / 2,

    borderRadius: 30,
  },
  buttonDismiss: {
    borderRadius: 30,
    borderWidth: 2,
    backgroundColor: "#FF9EDA",
    borderColor: "#FF9EDA",
    height: 35,
    width: 100,
    alignItems: "center",
    textAlign: "center",
  },
  shareCheck: {
    flexDirection: "row",
  },
});
