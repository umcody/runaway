import React, { useState } from "react";
import { View, StyleSheet, Modal, TouchableOpacity, Text } from "react-native";

export default function Disclaimer({ navigation }) {
  const [modalVisible, setModalVisible] = useState(true);

  return (
    <View style={styles.container}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.modal}>
          <Text>Hello world</Text>
        </View>
        <TouchableOpacity
          style={styles.buttonDismiss}
          onPress={() => {
            setModalVisible(false);
            navigation.navigate("Feels");
          }}
        >
          <Text>Click here to get rid of modal</Text>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "red",
    width: "50%",
    alignItems: "center",
  },
  modal: {
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "red",
    width: "50%",
    alignItems: "center",
  },
  buttonDismiss: {
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "red",
    height: 20,
  },
});
