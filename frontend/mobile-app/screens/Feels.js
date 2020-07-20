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

  //feelings
  const [happy, setHappy] = useState(false);
  const [sad, setSad] = useState(false);
  const [fearful, setFearful] = useState(false);
  const [angry, setAngry] = useState(false);
  const [shameful, setShameful] = useState(false);
  const [frustrated, setFrustated] = useState(false);
  const [embarrassed, setEmbarrassed] = useState(false);
  const [stressed, setStressed] = useState(false);
  const [disgusted, setDisgusted] = useState(false);
  const [surprised, setSurprised] = useState(false);

  //reason for being in the chat
  const [checkedOne, setCheckedOne] = useState(false);
  const [checkedTwo, setCheckedTwo] = useState(false);
  const [checkedThree, setCheckedThree] = useState(false);
  const [checkedFour, setCheckedFour] = useState(false);
  const [checkedFive, setCheckedFive] = useState(false);
  const [checkedSix, setCheckedSix] = useState(false);

  //yes no for suicidal thoughts
  const [yes, setYes] = useState(false);
  const [no, setNo] = useState(false);

  return (
    <>
      <View style={styles.container}>
        <ScrollView style={styles.home}>
          {/* Disclaimer here */}
          <Text style={styles.question}>
            <Text style={styles.questionBold}>Disclaimer:</Text> You will be
            chatting with a peer volunteer. These volunteers are not medical or
            health professionals. If you seek professional assistance, the
            hotlines and resources can be found{" "}
            <Text
              style={styles.questionBold}
              onPress={() => {
                navigation.navigate("Resources");
              }}
            >
              (here)
            </Text>
            .
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
          <CheckBox
            title="Happy"
            checked={happy}
            onPress={() => {
              setHappy(!happy);
            }}
            textStyle={styles.check}
            uncheckedColor="#ACDAFF"
            checkedColor="#FF9EDA"
            containerStyle={styles.questionCheckContainer}
          />
          <CheckBox
            title="Sad"
            checked={sad}
            onPress={() => {
              setSad(!sad);
            }}
            textStyle={styles.check}
            uncheckedColor="#ACDAFF"
            checkedColor="#FF9EDA"
            containerStyle={styles.questionCheckContainer}
          />
          <CheckBox
            title="Fearful"
            checked={fearful}
            onPress={() => {
              setFearful(!fearful);
            }}
            textStyle={styles.check}
            uncheckedColor="#ACDAFF"
            checkedColor="#FF9EDA"
            containerStyle={styles.questionCheckContainer}
          />
          <CheckBox
            title="Angry"
            checked={angry}
            onPress={() => {
              setAngry(!angry);
            }}
            textStyle={styles.check}
            uncheckedColor="#ACDAFF"
            checkedColor="#FF9EDA"
            containerStyle={styles.questionCheckContainer}
          />
          <CheckBox
            title="Shameful"
            checked={shameful}
            onPress={() => {
              setShameful(!shameful);
            }}
            textStyle={styles.check}
            uncheckedColor="#ACDAFF"
            checkedColor="#FF9EDA"
            containerStyle={styles.questionCheckContainer}
          />
          <CheckBox
            title="Frustrated"
            checked={frustrated}
            onPress={() => {
              setFrustated(!frustrated);
            }}
            textStyle={styles.check}
            uncheckedColor="#ACDAFF"
            checkedColor="#FF9EDA"
            containerStyle={styles.questionCheckContainer}
          />
          <CheckBox
            title="Embarrassed"
            checked={embarrassed}
            onPress={() => {
              setEmbarrassed(!embarrassed);
            }}
            textStyle={styles.check}
            uncheckedColor="#ACDAFF"
            checkedColor="#FF9EDA"
            containerStyle={styles.questionCheckContainer}
          />
          <CheckBox
            title="Stressed"
            checked={stressed}
            onPress={() => {
              setStressed(!stressed);
            }}
            textStyle={styles.check}
            uncheckedColor="#ACDAFF"
            checkedColor="#FF9EDA"
            containerStyle={styles.questionCheckContainer}
          />
          <CheckBox
            title="Disgusted"
            checked={disgusted}
            onPress={() => {
              setDisgusted(!disgusted);
            }}
            textStyle={styles.check}
            uncheckedColor="#ACDAFF"
            checkedColor="#FF9EDA"
            containerStyle={styles.questionCheckContainer}
          />
          <CheckBox
            title="Surprised"
            checked={surprised}
            onPress={() => {
              setSurprised(!surprised);
            }}
            textStyle={styles.check}
            uncheckedColor="#ACDAFF"
            checkedColor="#FF9EDA"
            containerStyle={styles.questionCheckContainer}
          />
          <Text style={styles.question}>What brings you to this chat?</Text>
          <CheckBox
            title="Understanding Emotions/Feelings"
            checked={checkedOne}
            onPress={() => {
              setCheckedOne(!checkedOne);
            }}
            textStyle={styles.check}
            uncheckedColor="#ACDAFF"
            checkedColor="#FF9EDA"
            containerStyle={styles.questionCheckContainer}
          />
          <CheckBox
            title="Life Challenges (e.g. illness, loss)"
            checked={checkedTwo}
            onPress={() => {
              setCheckedTwo(!checkedTwo);
            }}
            textStyle={styles.check}
            uncheckedColor="#ACDAFF"
            checkedColor="#FF9EDA"
            containerStyle={styles.questionCheckContainer}
          />
          <CheckBox
            title="Use or Abuse of Substance"
            checked={checkedThree}
            onPress={() => {
              setCheckedThree(!checkedThree);
            }}
            textStyle={styles.check}
            uncheckedColor="#ACDAFF"
            checkedColor="#FF9EDA"
            containerStyle={styles.questionCheckContainer}
          />
          <CheckBox
            title="Anxiety/Depression"
            checked={checkedFour}
            onPress={() => {
              setCheckedFour(!checkedFour);
            }}
            textStyle={styles.check}
            uncheckedColor="#ACDAFF"
            checkedColor="#FF9EDA"
            containerStyle={styles.questionCheckContainer}
          />
          <CheckBox
            title="Friendship/Relationship"
            checked={checkedFive}
            onPress={() => {
              setCheckedFive(!checkedFive);
            }}
            textStyle={styles.check}
            uncheckedColor="#ACDAFF"
            checkedColor="#FF9EDA"
            containerStyle={styles.questionCheckContainer}
          />
          <CheckBox
            title="Unhealthy Behaviors"
            checked={checkedSix}
            onPress={() => {
              setCheckedSix(!checkedSix);
            }}
            textStyle={styles.check}
            uncheckedColor="#ACDAFF"
            checkedColor="#FF9EDA"
            containerStyle={styles.questionCheckContainer}
          />
          <Text style={styles.question}>
            Have you had suicidal thought in the past 6 months?
          </Text>
          <CheckBox
            title="Yes"
            checked={yes}
            disabled={no}
            onPress={() => {
              setYes(!yes);
            }}
            textStyle={styles.check}
            uncheckedColor="#ACDAFF"
            checkedColor="#FF9EDA"
            containerStyle={styles.questionCheckContainer}
          />
          <CheckBox
            title="No"
            checked={no}
            disabled={yes}
            onPress={() => {
              setNo(!no);
            }}
            textStyle={styles.check}
            uncheckedColor="#ACDAFF"
            checkedColor="#FF9EDA"
            containerStyle={styles.questionCheckContainer}
          />
          <Button
            title="Next"
            color="#2E5F85"
            disabled={skipNext}
            onPress={() => {
              navigation.navigate("Chat");
            }}
          />
        </ScrollView>
=======
  const [feelColor, setFeelColor] = useState("#ACDAFF");

  //for later when you can  make the color change for those that are clicked
  //also put it all in a scrollview so that there is just one list
  const colorStyles = StyleSheet.create({
    feels: {
      color: feelColor,
      fontSize: 25,
    },
    feelsContainer: {
      fontSize: 25,
      marginTop: 100,
      borderColor: "#ACDAFF",
      borderWidth: 2,
      backgroundColor: "white",
      alignItems: "center",
      width: 126,
      height: 126,
      paddingTop: 50,
    },
  });
  //

  //two feeling columns, once the page gets reworked this will be gone and they
  //will all be individual objects and in a scrollview
  const feelingsCol1 = [
    { title: "Happy", id: 1 },
    { title: "Fearful", id: 2 },
    { title: "Shameful", id: 3 },
    { title: "Embarrassed", id: 4 },
    { title: "Disgusted", id: 5 },
  ];

  const feelingsCol2 = [
    { title: "Sad", id: 1 },
    { title: "Angry", id: 2 },
    { title: "Frustrated", id: 3 },
    { title: "Stressed", id: 4 },
    { title: "Surprised", id: 5 },
  ];

  //creates the touchable for each of them
  const FeelingsList = ({ title }) => {
    return (
      <View>
        <TouchableOpacity style={colorStyles.feelsContainer}>
          <Text style={colorStyles.feels}>{title}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <>
      <View style={styles.home}>
        {/* this is the skip button to not fill out the feels page */}
        <TouchableOpacity
          style={styles.skip}
          onPress={() => {
            navigation.navigate("Chat");
          }}
        >
          <Text style={{ color: "#FFFFFF", fontSize: 20 }}>Skip</Text>
        </TouchableOpacity>
        {/* these each print both of the lists */}
        <View style={styles.col1}>
          <FlatList
            data={feelingsCol1}
            renderItem={({ item }) => <FeelingsList title={item.title} />}
          />
        </View>
        <View style={styles.col2}>
          <FlatList
            data={feelingsCol2}
            renderItem={({ item }) => <FeelingsList title={item.title} />}
          />
        </View>
        <TouchableOpacity
          style={styles.buttonDismiss}
          onPress={() => {
            navigation.navigate("Chat");
          }}
        >
          <Text style={{ color: "#FFFFFF", fontSize: 25 }}>Next</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const windowW = Dimensions.get("window").width;
const windowH = Dimensions.get("window").height;

//styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  home: {
    flex: 1,
    marginBottom: 10,
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
  questionCheckContainer: {
    backgroundColor: "#FFFFFF",
    borderColor: "#FFFFFF",
    // width: "50%",
    marginVertical: 0,
  },
});
