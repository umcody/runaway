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
import {fonts,padding,margin,borderRadius,colors,icon,dimensions} from "../style/styleValues"
import axios from "axios";

//need to still get the current ChatScreen that way messages has the actual messages.
//import { messages } from "./ChatScreen.js";

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
          <Text allowFontScaling={false} style={styles.message}>
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
          <Text style={styles.check}>Rate Your Chat:</Text>

          <View style={styles.starRating}>
            <AirbnbRating
              defaultRating={0}
              size={icon.lg}
              selectedColor={colors.button}
              reviewColor={colors.tertiary}
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
                  axios.post(
                    "https://runaway-practicum.herokuapp.com/api/volunteer/chat",
                    {
                      chatData: messages,
                      rating: rating,
                    }
                  );
                } else {
                  axios.post(
                    "https://runaway-practicum.herokuapp.com/api/volunteer/chat",
                    {
                      chatData: "User chose not to share data",
                      rating: rating,
                    }
                  );
                }
                //logs here are for testing to make sure it is working
                console.log(messages);
                console.log("Chat rating: " + rating);
                navigation.navigate("Feed");
                navigation.dispatch(StackActions.replace("Feels"));
              }}
            >
              <Text style={{ color: "#FFFFFF", fontSize: fonts.lg,fontFamily:fonts.subheader}}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}


const heightModal = 475;
const widthModal = 270;

//styles
const styles = StyleSheet.create({
  message: {
    color: "#2E5F85",
    fontFamily:fonts.main,
    fontSize: fonts.lg,
    lineHeight:fonts.lgLineHeight,
    alignItems: "center",
    textAlign: "center",
    padding: padding.sm,
  },
  fullContainer: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  container: {
    alignSelf: "center",
    backgroundColor: "#FFFFFF",
    width: widthModal,
    alignItems: "center",
    height: heightModal,
    marginTop: dimensions.fullHeight / 2 - heightModal / 2,

    borderRadius: 30,
  },
  buttonDismiss: {
    borderRadius: borderRadius.lg,
    borderWidth: 1,
    backgroundColor: colors.button,
    borderColor: colors.button,
    height: 35,
    width: 100,
    alignItems: "center",
    textAlign: "center",
    justifyContent:'center'
  },
  shareCheck: {
    flexDirection: "row",
  },
  check: {
    fontSize: fonts.lg,
    color: colors.tertiary,
    fontFamily:fonts.subheader,
    padding: padding.sm,
  },
  checkBoxContainer: {
    backgroundColor: "#FFFFFF",
    borderColor: "#FFFFFF",
    width: "90%",
    alignItems: "center",
    marginVertical: 0,
  },
  starRating: {
    marginVertical: margin.md,
  },
  buttonContainer: {
    marginTop: margin.md,
  },
});
