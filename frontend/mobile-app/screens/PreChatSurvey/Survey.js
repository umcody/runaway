import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  Dimensions,
} from "react-native";
import { CheckBox } from "react-native-elements";

export default function PreChatSurvey() {
  const [checkedOne, setCheckedOne] = useState(false);
  const [checkedTwo, setCheckedTwo] = useState(false);
  const [checkedThree, setCheckedThree] = useState(false);
  const [checkedFour, setCheckedFour] = useState(false);
  const [checkedFive, setCheckedFive] = useState(false);
  const [checkedSix, setCheckedSix] = useState(false);
  const [checkedSeven, setCheckedSeven] = useState(false);
  return (
    <ScrollView style={styles.scroll}>
      <Text style={styles.title}>PreChatSurvey</Text>
      <Text style={styles.subTitle}>
        What brings you to this chat? (You can choose multiple.)
      </Text>
      <CheckBox
        title="Understanding Emotions/Feelings"
        checked={checkedOne}
        onPress={() => {
          setCheckedOne(!checkedOne);
        }}
        textStyle={styles.surveyText}
        uncheckedColor="#ACDAFF"
        checkedColor="#FF9EDA"
        containerStyle={styles.surveyContainers}
      />
      <CheckBox
        title="Life Challenges (e.g. illness, loss)"
        checked={checkedTwo}
        onPress={() => {
          setCheckedTwo(!checkedTwo);
        }}
        textStyle={styles.surveyText}
        uncheckedColor="#ACDAFF"
        checkedColor="#FF9EDA"
        containerStyle={styles.surveyContainers}
      />
      <CheckBox
        title="Use or Abuse of Substance"
        checked={checkedThree}
        onPress={() => {
          setCheckedThree(!checkedThree);
        }}
        textStyle={styles.surveyText}
        uncheckedColor="#ACDAFF"
        checkedColor="#FF9EDA"
        containerStyle={styles.surveyContainers}
      />
      <CheckBox
        title="Anxiety/Depression"
        checked={checkedFour}
        onPress={() => {
          setCheckedFour(!checkedFour);
        }}
        textStyle={styles.surveyText}
        uncheckedColor="#ACDAFF"
        checkedColor="#FF9EDA"
        containerStyle={styles.surveyContainers}
      />
      <CheckBox
        title="Friendship/Relationship"
        checked={checkedFive}
        onPress={() => {
          setCheckedFive(!checkedFive);
        }}
        textStyle={styles.surveyText}
        uncheckedColor="#ACDAFF"
        checkedColor="#FF9EDA"
        containerStyle={styles.surveyContainers}
      />
      <CheckBox
        title="Unhealthy Behaviors"
        checked={checkedSix}
        onPress={() => {
          setCheckedSix(!checkedSix);
        }}
        textStyle={styles.surveyText}
        uncheckedColor="#ACDAFF"
        checkedColor="#FF9EDA"
        containerStyle={styles.surveyContainers}
      />
      <CheckBox
        title="Other: ______ "
        checked={checkedSeven}
        onPress={() => {
          setCheckedSeven(!checkedSeven);
        }}
        textStyle={styles.surveyText}
        uncheckedColor="#ACDAFF"
        checkedColor="#FF9EDA"
        containerStyle={styles.surveyContainers}
      />
    </ScrollView>
  );
}

const windowW = Dimensions.get("window").width;
const windowH = Dimensions.get("window").height;

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: 10,
    marginVertical: 10,
  },
  title: {
    marginTop: 30,
    fontSize: 24,
    textAlign: "center",
    color: "#2E5F85",
    textDecorationLine: "underline",
  },
  subTitle: {
    marginTop: 15,
    fontSize: 18,
    color: "#2E5F85",
    textAlign: "center",
    fontWeight: "bold",
  },
  surveyText: {
    fontSize: 18,
    color: "#2E5F85",
    fontWeight: "normal",
  },
  surveyContainers: {
    backgroundColor: "#FFFFFF",
    borderColor: "#FFFFFF",
    width: "90%",
    marginLeft: 0,
    marginVertical: 0,
  },
});
