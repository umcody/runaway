import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Text,
  Dimensions,
} from "react-native";
import { CheckBox, Rating, AirbnbRating } from "react-native-elements";
import { StackActions } from "@react-navigation/native";
import axios from "axios";
//need to still get the current ChatScreen that way messages has the actual messages.

export default function PreChatSurvey({ route, navigation }) {

  //these two consts are to determine if the modal is visible and
  //if the Share checkBox is checked
  const [modalVisible, setModalVisible] = useState(true);
  const [checked, setChecked] = useState(false);
  const { messages } = route.params;
  var rating = 0;

  const ratingFun = (temp) => {
    rating = temp;
  };


  return (
    <View style={styles.fullContainer}>
      {/* modal that contains all the info */}
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.container}>
          {/* message for the data collection */}
          <Text style={styles.message}>
            If you liked our service and would like to help us improve in the
            future, please consider letting us anonymously save chat data by
            pressing this button. Thank you!
          </Text>
          {/* this checkBox is for whether or not the user wants to share their info */}
          <CheckBox
            title="Share?"
            checked={checked}
            onPress={() => {
              setChecked(!checked);
            }}
            textStyle={styles.check}
            uncheckedColor="#2E5F85"
            checkedColor="#FF9EDA"
            iconRight
            containerStyle={styles.checkBoxContainer}
          />
          {/* this text and then the AirbnbRating after it are the rating function for after the chat */}
          <Text style={styles.message}>Rate Your Chat:</Text>

          <View style={styles.starRating}>
            <AirbnbRating
              defaultRating={3}
              size={30}
              selectedColor={"#FF9EDA"}
              reviewColor={"#2E5F85"}
              showRating={false}
              onFinishRating={ratingFun}

            />
          </View>
          <View style={styles.buttonContainer}>
            {/* this is the touchable to submit your feedback at the end */}
            <TouchableOpacity
              style={styles.buttonDismiss}
              onPress={() => {
                setModalVisible(false);
                if (checked == true) {
                  //message data sent back
                  axios.post("http://127.0.0.1:7000/api/volunteer/chat", {
                    chatData: messages,
                  });
                  //logs here are for testing to make sure it is working
                  console.log(messages);
                  console.log("Chat rating: " + rating);
                }
                //the rating value getting sent to database not sure if this should be a different address
                axios.post("http://127.0.0.1:7000/api/volunteer/chat", {
                  rating: rating,
                });
                navigation.navigate("Feed");
                navigation.dispatch(StackActions.replace("Feels"));
              }}
            >
              <Text style={{ color: "#FFFFFF", fontSize: 24 }}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const windowW = Dimensions.get("window").width;
const windowH = Dimensions.get("window").height;

const heightModal = 475;
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
  check: {
    fontSize: 24,
    color: "#2E5F85",
    fontWeight: "normal",
  },
  checkBoxContainer: {
    backgroundColor: "#FFFFFF",
    borderColor: "#FFFFFF",
    width: "90%",
    alignItems: "center",
    marginVertical: 0,
  },
  starRating: {
    marginBottom: 15,
    marginTop: 15,
  },
  buttonContainer: {
    marginTop: 20,
  },
});
