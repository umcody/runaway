import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Text,
  Dimensions,
} from "react-native";

export default function ChatSurvey({ navigation }) {
  const [modalVisible, setModalVisible] = useState(true);
  const [checked, setChecked] = useState(false);

  return (
    <View style={styles.fullContainer}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.container}>
          <Text style={styles.message}>
            If you liked our service and would like to help us improve in the
            future, please consider letting us anonymously save chat data by
            pressing this button. Thank you!
          </Text>

          <View style={styles.shareCheck}>
            <Text style={{ color: "#2E5F85", fontSize: 25 }}>Share? </Text>
            <Text style={{ color: "#2E5F85", fontSize: 25 }}>
              Checkbox here
            </Text>
          </View>

          <Text style={styles.message}>Rate Your Chat:</Text>

          {/* here is where the star rating system should go */}

          <TouchableOpacity
            style={styles.buttonDismiss}
            onPress={() => {
              setModalVisible(false);
            }}
          >
            <Text style={{ color: "#FFFFFF", fontSize: 24 }}>Submit</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

const windowW = Dimensions.get("window").width;
const windowH = Dimensions.get("window").height;

const heightModal = 450;
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
