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
import { CheckBox } from "react-native-elements";
import axios from "axios";

export default function FeeligSurvey({ navigation }) {
  //style stuff
  const windowW = Dimensions.get("window").width;
  const windowH = Dimensions.get("window").height;

  //colors for screen 3
  const [yesColor, setYesColor] = useState("#FFFFFF");
  const [noColor, setNoColor] = useState("#FFFFFF");
  const [yesWord, setYesWord] = useState("#2E5F85");
  const [noWord, setNoWord] = useState("#2E5F85");

  //colors for screen 2
  const [understandColor, setUnderstandColor] = useState("#FFFFFF");
  const [understandWord, setUnderstandWord] = useState("#2E5F85");
  const [challengesColor, setChallengesColor] = useState("#FFFFFF");
  const [challengesWord, setChallengesWord] = useState("#2E5F85");
  const [useColor, setUseColor] = useState("#FFFFFF");
  const [useWord, setUseWord] = useState("#2E5F85");
  const [anxietyColor, setAnxietyColor] = useState("#FFFFFF");
  const [anxietyWord, setAnxietyWord] = useState("#2E5F85");
  const [friendshipColor, setFriendshipColor] = useState("#FFFFFF");
  const [friendshipWord, setFriendshipWord] = useState("#2E5F85");
  const [relationshipColor, setRelationshipColor] = useState("#FFFFFF");
  const [relationshipWord, setRelationshipWord] = useState("#2E5F85");
  const [behaviorsColor, setBehaviorsColor] = useState("#FFFFFF");
  const [behaviorsWord, setBehaviorsWord] = useState("#2E5F85");
  const [otherColor, setOtherColor] = useState("#FFFFFF");
  const [otherWord, setOtherWord] = useState("#2E5F85");

  const styles = StyleSheet.create({
    nextButton: {
      position: "absolute",
      borderColor: "#FF9EDA",
      backgroundColor: "#FF9EDA",
      borderRadius: 30,
      borderWidth: 2,
      top: windowH - 75,
    },
    yesNo: {
      paddingVertical: 33,
    },
    textYes: {
      fontSize: 18,
      paddingHorizontal: 40,
      paddingVertical: 9,
      color: yesWord,
      textAlign: "center",
    },
    textNo: {
      fontSize: 18,
      paddingHorizontal: 40,
      paddingVertical: 9,
      color: noWord,
      textAlign: "center",
    },
    yesButton: {
      borderColor: "#ACDAFF",
      borderRadius: 30,
      borderWidth: 1,
      backgroundColor: yesColor,
      justifyContent: "center",
    },
    noButton: {
      borderColor: "#ACDAFF",
      borderRadius: 30,
      borderWidth: 1,
      backgroundColor: noColor,
      justifyContent: "center",
    },
    //
    textUnderstand: {
      fontSize: 18,
      paddingHorizontal: 10,
      paddingVertical: 9,
      color: understandWord,
      textAlign: "center",
    },
    textChallenges: {
      fontSize: 18,
      paddingHorizontal: 40,
      paddingVertical: 9,
      color: challengesWord,
      textAlign: "center",
    },
    understandButton: {
      borderColor: "#ACDAFF",
      borderRadius: 30,
      borderWidth: 1,
      backgroundColor: understandColor,
      width: 300,
      alignSelf: "center",
      justifyContent: "center",
    },
    challengesButton: {
      borderColor: "#ACDAFF",
      borderRadius: 30,
      borderWidth: 1,
      backgroundColor: challengesColor,
      width: 300,
      alignSelf: "center",
      justifyContent: "center",
    },
    textUse: {
      fontSize: 18,
      paddingHorizontal: 10,
      paddingVertical: 9,
      color: useWord,
      textAlign: "center",
    },
    textAnxiety: {
      fontSize: 18,
      paddingHorizontal: 40,
      paddingVertical: 9,
      color: anxietyWord,
      textAlign: "center",
    },
    useButton: {
      borderColor: "#ACDAFF",
      borderRadius: 30,
      borderWidth: 1,
      backgroundColor: useColor,
      width: 300,
      alignSelf: "center",
      justifyContent: "center",
    },
    anxietyButton: {
      borderColor: "#ACDAFF",
      borderRadius: 30,
      borderWidth: 1,
      backgroundColor: anxietyColor,
      width: 300,
      justifyContent: "center",
    },
    textFriendship: {
      fontSize: 18,
      paddingHorizontal: 10,
      paddingVertical: 9,
      color: friendshipWord,
      textAlign: "center",
    },
    textRelationship: {
      fontSize: 18,
      paddingHorizontal: 10,
      paddingVertical: 9,
      color: relationshipWord,
      textAlign: "center",
    },
    friendshipButton: {
      borderColor: "#ACDAFF",
      borderRadius: 30,
      borderWidth: 1,
      backgroundColor: friendshipColor,
      width: 125,
      alignItems: "center",
      justifyContent: "center",
    },
    relationshipButton: {
      borderColor: "#ACDAFF",
      borderRadius: 30,
      borderWidth: 1,
      backgroundColor: relationshipColor,
      width: 125,
      alignSelf: "center",
      justifyContent: "center",
    },
    textBehaviors: {
      fontSize: 18,
      paddingHorizontal: 10,
      paddingVertical: 9,
      color: behaviorsWord,
      textAlign: "center",
    },
    textOther: {
      fontSize: 18,
      paddingHorizontal: 40,
      paddingVertical: 9,
      color: otherWord,
      textAlign: "center",
    },
    behaviorsButton: {
      borderColor: "#ACDAFF",
      borderRadius: 30,
      borderWidth: 1,
      backgroundColor: behaviorsColor,
      width: 300,
      alignSelf: "center",
      justifyContent: "center",
    },
    otherButton: {
      borderColor: "#ACDAFF",
      borderRadius: 30,
      borderWidth: 1,
      backgroundColor: otherColor,
      width: 300,
      alignSelf: "center",
      justifyContent: "center",
    },
    //
    skipButton: {
      position: "absolute",
      borderColor: "white",
      borderWidth: 2,
      top: windowH - 75,
      left: windowW - 100,
      justifyContent: "center",
    },
    prevButton: {
      position: "absolute",
      borderColor: "white",
      borderWidth: 2,
      top: windowH - 75,
      right: windowW - 100,
      justifyContent: "center",
    },
    buttonText: {
      color: "white",
      fontSize: 24,
      paddingHorizontal: 15,
      paddingVertical: 5,
    },
    skipText: {
      color: "#ACDAFF",
      fontSize: 24,
      paddingHorizontal: 15,
      paddingVertical: 5,
    },
    modalView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    questionText: {
      fontSize: 21,
      textAlign: "center",
    },
    questionContainer: {
      width: 250,
    },
  });

  //screens
  const [modalOne, setModalOne] = useState(true);
  const [modalTwo, setModalTwo] = useState(false);
  const [modalThree, setModalThree] = useState(false);

  //suicidal yes no
  const [yes, setYes] = useState(false);
  const [no, setNo] = useState(false);

  //what brings you to this chat
  const [understand, setUnderstand] = useState(false);
  const [challenges, setChallenges] = useState(false);
  const [use, setUse] = useState(false);
  const [anxiety, setAnxiety] = useState(false);
  const [friendship, setFriendship] = useState(false);
  const [relationship, setRelationship] = useState(false);
  const [behaviors, setBehaviors] = useState(false);
  const [other, setOther] = useState(false);

  return (
    <>
      {/* Feelings  */}
      <Modal visible={modalOne} fade={true}>
        <View style={styles.modalView}>
          <Text>Screen 1 - Feelings</Text>
          <TouchableOpacity
            style={styles.nextButton}
            onPress={() => {
              setModalOne(false);
              setModalTwo(true);
            }}
          >
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.skipButton}
            onPress={() => {
              setModalOne(false);
              setModalTwo(true);
            }}
          >
            <Text style={styles.skipText}>Skip</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      {/* What brings you  */}
      <Modal visible={modalTwo} fade={true}>
        <View style={styles.modalView}>
          <Text style={styles.questionText}>What brings you to this chat?</Text>
          <Text></Text>
          <Text>(You can choose multiple)</Text>

          <View style={styles.yesNo}>
            <TouchableOpacity
              style={styles.understandButton}
              onPress={() => {
                setUnderstand(!understand);
                if (!understand) {
                  setUnderstandColor("#2E5F85");
                  setUnderstandWord("#FFFFFF");
                } else {
                  setUnderstandColor("#FFFFFF");
                  setUnderstandWord("#2E5F85");
                }
              }}
            >
              <Text style={styles.textUnderstand}>
                Understanding Emotions/Feelings
              </Text>
            </TouchableOpacity>
            <Text></Text>
            <TouchableOpacity
              style={styles.challengesButton}
              onPress={() => {
                setChallenges(!challenges);
                if (!challenges) {
                  setChallengesColor("#2E5F85");
                  setChallengesWord("#FFFFFF");
                } else {
                  setChallengesColor("#FFFFFF");
                  setChallengesWord("#2E5F85");
                }
              }}
            >
              <Text style={styles.textChallenges}>
                Life Challenges (e.g. illness or loss)
              </Text>
            </TouchableOpacity>
            <Text></Text>
            <TouchableOpacity
              style={styles.useButton}
              onPress={() => {
                setUse(!use);
                if (!use) {
                  setUseColor("#2E5F85");
                  setUseWord("#FFFFFF");
                } else {
                  setUseColor("#FFFFFF");
                  setUseWord("#2E5F85");
                }
              }}
            >
              <Text style={styles.textUse}>Use or Abuse of substance</Text>
            </TouchableOpacity>
            <Text></Text>
            <TouchableOpacity
              style={styles.anxietyButton}
              onPress={() => {
                setAnxiety(!anxiety);
                if (!anxiety) {
                  setAnxietyColor("#2E5F85");
                  setAnxietyWord("#FFFFFF");
                } else {
                  setAnxietyColor("#FFFFFF");
                  setAnxietyWord("#2E5F85");
                }
              }}
            >
              <Text style={styles.textAnxiety}>Anxiety/Depression</Text>
            </TouchableOpacity>
            <Text></Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <TouchableOpacity
                style={styles.friendshipButton}
                onPress={() => {
                  setFriendship(!friendship);
                  if (!friendship) {
                    setFriendshipColor("#2E5F85");
                    setFriendshipWord("#FFFFFF");
                  } else {
                    setFriendshipColor("#FFFFFF");
                    setFriendshipWord("#2E5F85");
                  }
                }}
              >
                <Text style={styles.textFriendship}>Friendship</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.relationshipButton}
                onPress={() => {
                  setRelationship(!relationship);
                  if (!relationship) {
                    setRelationshipColor("#2E5F85");
                    setRelationshipWord("#FFFFFF");
                  } else {
                    setRelationshipColor("#FFFFFF");
                    setRelationshipWord("#2E5F85");
                  }
                }}
              >
                <Text style={styles.textRelationship}>Relationship</Text>
              </TouchableOpacity>
            </View>
            <Text></Text>
            <TouchableOpacity
              style={styles.behaviorsButton}
              onPress={() => {
                setBehaviors(!behaviors);
                if (!behaviors) {
                  setBehaviorsColor("#2E5F85");
                  setBehaviorsWord("#FFFFFF");
                } else {
                  setBehaviorsColor("#FFFFFF");
                  setBehaviorsWord("#2E5F85");
                }
              }}
            >
              <Text style={styles.textBehaviors}>Unhealthy Behaviors</Text>
            </TouchableOpacity>
            <Text></Text>
            <TouchableOpacity
              style={styles.otherButton}
              onPress={() => {
                setOther(!other);
                if (!other) {
                  setOtherColor("#2E5F85");
                  setOtherWord("#FFFFFF");
                } else {
                  setOtherColor("#FFFFFF");
                  setOtherWord("#2E5F85");
                }
              }}
            >
              <Text style={styles.textOther}>Other</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.nextButton}
            onPress={() => {
              setModalTwo(false);
              setModalThree(true);
            }}
          >
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.skipButton}
            onPress={() => {
              setModalTwo(false);
              setModalThree(true);
            }}
          >
            <Text style={styles.skipText}>Skip</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.prevButton}
            onPress={() => {
              setModalTwo(false);
              setModalOne(true);
            }}
          >
            <Text style={styles.skipText}>Back</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      {/* Suicidal  */}
      <Modal visible={modalThree} fade={true}>
        <View style={styles.modalView}>
          <View style={styles.questionContainer}>
            <Text style={styles.questionText}>
              Have you had suicidal thoughts in the past 6 months?
            </Text>
          </View>

          <View style={styles.yesNo}>
            <TouchableOpacity
              style={styles.yesButton}
              disabled={no}
              onPress={() => {
                setYes(!yes);
                if (!yes) {
                  setYesColor("#2E5F85");
                  setYesWord("#FFFFFF");
                } else {
                  setYesColor("#FFFFFF");
                  setYesWord("#2E5F85");
                }
              }}
            >
              <Text style={styles.textYes}>Yes</Text>
            </TouchableOpacity>
            <Text></Text>
            <TouchableOpacity
              style={styles.noButton}
              disabled={yes}
              onPress={() => {
                setNo(!no);
                if (!no) {
                  setNoColor("#2E5F85");
                  setNoWord("#FFFFFF");
                } else {
                  setNoColor("#FFFFFF");
                  setNoWord("#2E5F85");
                }
              }}
            >
              <Text style={styles.textNo}>No</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.nextButton}
            onPress={() => {
              //setModalThree(false);
              //send to next screen
              console.log("yes variable " + yes);
              console.log("no variable " + no);

              console.log(" ");
            }}
          >
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.skipButton}
            onPress={() => {
              //setModalThree(false);
              //send to next screen
            }}
          >
            <Text style={styles.skipText}>Skip</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.prevButton}
            onPress={() => {
              setModalThree(false);
              setModalTwo(true);
            }}
          >
            <Text style={styles.skipText}>Back</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </>
  );
}
