import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  Dimensions,
  View,
} from "react-native";
import { CheckBox } from "react-native-elements";

export default function PreChatSurvey({ navigation }) {
  //this is not an efficient way to do this I don't think but
  //for example these are const for all the checkboxes for each question.
  const [checkedOne, setCheckedOne] = useState(false);
  const [checkedTwo, setCheckedTwo] = useState(false);
  const [checkedThree, setCheckedThree] = useState(false);
  const [checkedFour, setCheckedFour] = useState(false);
  const [checkedFive, setCheckedFive] = useState(false);
  const [checkedSix, setCheckedSix] = useState(false);
  const [checkedSeven, setCheckedSeven] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.home}>
        {/* this touchable is the skip button  */}
        <TouchableOpacity
          style={styles.skip}
          onPress={() => {
            navigation.navigate("Chat");
          }}
        >
          <Text style={{ color: "#FFFFFF", fontSize: 20 }}>Skip</Text>
        </TouchableOpacity>
      </View>
      {/* scroll view for the questions */}
      <ScrollView style={styles.scroll}>
        <Text style={styles.subTitle}>
          What brings you to this chat? (You can choose multiple.)
        </Text>
        {/* these next 7 checkboxes are all the current questions  */}
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
      {/* this last touchable is to progress to the feels screen */}
      <TouchableOpacity
        style={styles.buttonDismiss}
        onPress={() => {
          navigation.navigate("Feels");
        }}
      >
        <Text style={{ color: "#FFFFFF", fontSize: 25 }}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

const windowW = Dimensions.get("window").width;
const windowH = Dimensions.get("window").height;

//styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
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
  home: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    flexDirection: "row",
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

  skip: {
    position: "absolute",
    left: windowW - 80,
    width: 70,
    height: 30,
    top: 30,
    borderRadius: 3,
    borderWidth: 2,
    backgroundColor: "#ACDAFF",
    alignItems: "center",
    textAlign: "center",
    borderColor: "#ACDAFF",
  },
});
