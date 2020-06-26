import React from "react";
import { View } from "react-native";

export default function Profile(props) {
  return (
    <View style={styles.modalContainer}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.modal}>
          <Text>Hello world</Text>
        </View>
        <TouchableOpacity
          style={styles.buttonDismiss}
          onPress={() => {
            setModalVisible(false);
          }}
        >
          <Text>Click here to get rid of modal</Text>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}
