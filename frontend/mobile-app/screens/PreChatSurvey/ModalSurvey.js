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
  //this const is for the modal to show if it is visible at the time
  const [modalVisible, setModalVisible] = useState(true);

  return (
    <View style={styles.fullContainer}>
      {/* the modal here is what holds the screen before the survey */}
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.container}>
          {/* The nested text objects are for the bold font and the overall disclaimer */}
          <Text style={styles.message}>
            This is a
            <Text style={{ fontWeight: "bold" }}> voluntary survey</Text> that
            help us deliver the best experience during your chat. Your data
            allows Runaway to analyze information to create specific resources
            to others searching for assistance.
          </Text>
          {/* button that makes you advance to the next screen */}
          <TouchableOpacity
            style={styles.buttonDismiss}
            onPress={() => {
              setModalVisible(false);
              navigation.navigate("PreChatSurvey");
            }}
          >
            {/* the button is labeled start */}
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

//styles
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
