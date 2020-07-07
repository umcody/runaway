import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Text,
  Dimensions,
} from "react-native";

export default function Disclaimer({ navigation }) {
  const [modalVisible, setModalVisible] = useState(true);

  return (
    <View style={styles.fullContainer}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.container}>
          <Text style={styles.message}>
            Disclaimer: You will be chatting with a peer volunteer. These
            volunteers are not medical or health professionals. If you seek
            professional assistance, the hotlines and resources can be found
            (here).
          </Text>
          <TouchableOpacity
            style={styles.buttonDismiss}
            onPress={() => {
              setModalVisible(false);
              navigation.navigate("DisclaimerChat");
            }}
          >
            <Text style={{ color: "#FFFFFF", fontSize: 25 }}>Start</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

const windowW = Dimensions.get("window").width;
const windowH = Dimensions.get("window").height;

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
    width: 270,
    alignItems: "center",
    height: 367,
    marginTop: windowH / 2 - 183.5,
    borderRadius: 30,
  },
  buttonDismiss: {
    borderRadius: 30,
    borderWidth: 2,
    backgroundColor: "#FF9EDA",
    borderColor: "#FF9EDA",
    height: 35,
    marginTop: 7,
    width: 100,
    alignItems: "center",
    textAlign: "center",
  },
});
