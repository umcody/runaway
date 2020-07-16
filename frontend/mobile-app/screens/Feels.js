import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Button,
  ScrollView,
} from "react-native";
import { CheckBox } from "react-native-elements";

export default function Chat({ navigation }) {
  const [agree, setAgree] = useState(false);
  const [skipNext, setSkipNext] = useState(true);

  return (
    <>
      <View style={styles.container}>
        <ScrollView style={styles.home}>
          {/* Disclaimer here */}
          <Text style={styles.question}>
            <Text style={styles.questionBold}>Disclaimer:</Text> You will be
            chatting with a peer volunteer. These volunteers are not medical or
            health professionals. If you seek professional assistance, the
            hotlines and resources can be found (here).
          </Text>
          <CheckBox
            title="I Agree:"
            checked={agree}
            onPress={() => {
              setAgree(!agree);
              if (agree == true) {
                setSkipNext(true);
              } else {
                setSkipNext(false);
              }
            }}
            textStyle={styles.check}
            uncheckedColor="#2E5F85"
            checkedColor="#FF9EDA"
            iconRight
            containerStyle={styles.checkBoxContainer}
          />
          <Text style={styles.question}>
            Here is an optional survey to help improve your chat:
          </Text>
          <Button
            title="Skip To Chat"
            color="#2E5F85"
            disabled={skipNext}
            onPress={() => {
              navigation.navigate("Chat");
            }}
          />
          <Text style={styles.question}>How are you feeling?</Text>
        </ScrollView>
        <View style={styles.dismissContainer}>
          <Button
            title="Next"
            color="#2E5F85"
            disabled={skipNext}
            onPress={() => {
              navigation.navigate("Chat");
            }}
          />
        </View>
      </View>
    </>
  );
}

const windowW = Dimensions.get("window").width;
const windowH = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  home: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  dismissContainer: {
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: 10,
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
    justifyContent: "center",
  },
  skip: {
    left: 10,
    width: 70,
    height: 30,
    marginHorizontal: 5,
    borderRadius: 3,
    borderWidth: 2,
    backgroundColor: "#ACDAFF",
    alignItems: "center",
    textAlign: "center",
    borderColor: "#ACDAFF",
  },
  question: {
    color: "#ACDAFF",
    fontStyle: "normal",
    fontSize: 18,
    textAlign: "center",
    padding: 10,
    width: "100%",
    fontWeight: "bold",
  },
  questionBold: {
    color: "#2E5F85",
    fontStyle: "normal",
    fontSize: 18,
    textAlign: "center",
    padding: 10,
    width: "100%",
    fontWeight: "bold",
  },
  check: {
    fontSize: 18,
    color: "#2E5F85",
    fontWeight: "normal",
    paddingHorizontal: 0,
  },
  checkBoxContainer: {
    backgroundColor: "#FFFFFF",
    borderColor: "#FFFFFF",
    width: 125,
    height: 45,
    borderRadius: 1,
    marginVertical: 0,
    alignSelf: "center",
  },
  button: {
    width: "%50",
    color: "red",
  },
});
