import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Button,
  ScrollView,
  Modal,
} from "react-native";
import Question from "./Question";

export default function NewSurvey({ navigation }) {
  //style stuff
  const windowW = Dimensions.get("window").width;
  const windowH = Dimensions.get("window").height;

  //colors for screen 3
  const [yes, setYes] = useState(false);
  const [no, setNo] = useState(false);

  return (
    <>
      {/* Feelings  */}
      <Modal visible={true} fade={true}>
        <View style={styles.container}>
          <Question question="Hello" value={yes} setValue={setYes} />
          <Question question="Hello again" value={no} setValue={setNo} />
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    padding: 50,
    margin: 10,
    paddingHorizontal: 10,
  },
});
