import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Modal,
  ScrollView,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import axios from "axios";
import WhatBringsYou from "./WhatBringsYouQuestions";
import YesNo from "./SuicidalThoughtsQuestions";
import Feel from "./FeelQuestions";

export default function Survey({ navigation }) {
  const [buttonColor, setButtonColor] = useState("#FF9EDA");
  const [discColor, setDiscColor] = useState("#2E5F85");

  const height = Dimensions.get("window").height;

  //styles for disclaimer:
  const disc = StyleSheet.create({
    disclaimer: {
      fontSize: 24,
      color: discColor,
      textAlign: "center",
    },
    nextButtonCenter: {
      position: "absolute",
      borderWidth: 0,
      justifyContent: "center",
      borderRadius: 30,
      top: height - 125,
      backgroundColor: buttonColor,
      alignContent: "center",
      alignSelf: "center",
    },
    disclaimerContainer: {
      justifyContent: "center",
      alignContent: "center",
      alignSelf: "center",
      flex: 1,
      width: "100%",
      backgroundColor: "#FFFFFF",
      padding: 30,
    },
  });

  //screens
  const [modalOne, setModalOne] = useState(false);
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

  //Feeling page
  const [happy, setHappy] = useState(false);
  const [worried, setWorried] = useState(false);
  const [angry, setAngry] = useState(false);
  const [content, setContent] = useState(false);
  const [thankful, setThankful] = useState(false);
  const [embarrassed, setEmbarrassed] = useState(false);
  const [verySad, setVerySad] = useState(false);
  const [ashamed, setAshamed] = useState(false);
  const [anxious, setAnxious] = useState(false);
  const [sad, setSad] = useState(false);
  const [meh, setMeh] = useState(false);
  const [confused, setConfused] = useState(false);

  function resetPage() {
    //modalReset
    setModalOne(false);
    setModalTwo(false);
    setModalThree(false);
    //Page One Reset
    setHappy(false);
    setWorried(false);
    setAngry(false);
    setContent(false);
    setThankful(false);
    setEmbarrassed(false);
    setVerySad(false);
    setAshamed(false);
    setAnxious(false);
    setSad(false);
    setMeh(false);
    setConfused(false);
    //Page Two Reset
    setUnderstand(false);
    setChallenges(false);
    setUse(false);
    setAnxiety(false);
    setFriendship(false);
    setRelationship(false);
    setBehaviors(false);
    setOther(false);
    //Page Three Reset
    setYes(false);
    setNo(false);
  }

  return (
    <>
      <View style={disc.disclaimerContainer}>
        <Text style={disc.disclaimer}>
          By proceeding to use Runaway’s Chat feature, this is an action of
          compliance that the user understands that they will be interacting
          with volunteers, not medical professionals. (*Insert Terms of Service)
        </Text>
        <TouchableOpacity
          style={disc.nextButtonCenter}
          onPress={() => {
            setModalOne(true);
            setButtonColor("#FFFFFF");
            setDiscColor("#FFFFFF");
          }}
        >
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.feed}
          onPress={() => {
            resetPage();
            return navigation.navigate("Feed");
          }}
        >
          <Feather name="x" size={35} color={buttonColor} />
        </TouchableOpacity>
      </View>
      {/* Feelings  */}
      <Modal visible={modalOne} fade={true}>
        <View style={styles.feelTitle}>
          <Text style={styles.questionText}>How are you feeling?</Text>
          <Text>(You can choose multiple)</Text>
        </View>
        <View style={styles.columns}>
          <View style={styles.feelView}>
            <Feel title="Happy" value={happy} setValue={setHappy} />
            <Feel title="Worried" value={worried} setValue={setWorried} />
            <Feel title="Angry" value={angry} setValue={setAngry} />
            <Feel title="Content" value={content} setValue={setContent} />
          </View>
          <View style={styles.feelView}>
            <Feel title="Thankful" value={thankful} setValue={setThankful} />
            <Feel
              title="Embarrassed"
              value={embarrassed}
              setValue={setEmbarrassed}
            />
            <Feel title="Very Sad" value={verySad} setValue={setVerySad} />
            <Feel title="Ashamed" value={ashamed} setValue={setAshamed} />
          </View>
          <View style={styles.feelView}>
            <Feel title="Anxious" value={anxious} setValue={setAnxious} />
            <Feel title="Sad" value={sad} setValue={setSad} />
            <Feel title="Meh" value={meh} setValue={setMeh} />
            <Feel title="Confused" value={confused} setValue={setConfused} />
          </View>
        </View>
        <View style={styles.bottomTray}>
          <TouchableOpacity
            style={styles.buttonNextFeels}
            onPress={() => {
              setModalOne(false);
              setModalTwo(true);
              // console.log("The values for the feeling page are: ");
              // console.log("Happy is: " + happy);
              // console.log("Worried is: " + worried);
              // console.log("Angry is: " + angry);
              // console.log("Content is: " + content);
              // console.log("Thankful is: " + thankful);
              // console.log("Embarrassed is: " + embarrassed);
              // console.log("Very Sad is: " + verySad);
              // console.log("Ashamed is: " + ashamed);
              // console.log("Anxious is: " + anxious);
              // console.log("Sad is: " + sad);
              // console.log("Meh is: " + meh);
              // console.log("Confused is: " + confused);
            }}
          >
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
        {/* <TouchableOpacity
          style={styles.skipButton2}
          onPress={() => {
            setModalOne(false);
            setModalTwo(true);
          }}
        >
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity> */}
      </Modal>

      {/* What brings you  */}
      <Modal visible={modalTwo} fade={true}>
        <View style={styles.modalView2}>
          <View style={styles.bringsYouTitle}>
            <Text style={styles.questionText}>
              What brings you to this chat?
            </Text>
            <Text>(You can choose multiple)</Text>
          </View>
          <ScrollView style={styles.questions}>
            <WhatBringsYou
              question="Understanding Emotions/Feelings"
              value={understand}
              setValue={setUnderstand}
            />
            <WhatBringsYou
              question="Life Challenges (e.g. illness or loss)"
              value={challenges}
              setValue={setChallenges}
            />
            <WhatBringsYou
              question="Use or Abuse of Substance"
              value={use}
              setValue={setUse}
            />
            <WhatBringsYou
              question="Anxiety/Depression"
              value={anxiety}
              setValue={setAnxiety}
            />
            <WhatBringsYou
              question="Friendship"
              value={friendship}
              setValue={setFriendship}
            />
            <WhatBringsYou
              question="Relationship"
              value={relationship}
              setValue={setRelationship}
            />
            <WhatBringsYou
              question="Unhealthy Behaviors"
              value={behaviors}
              setValue={setBehaviors}
            />
            <WhatBringsYou question="Other" value={other} setValue={setOther} />
          </ScrollView>
          <TouchableOpacity
            style={styles.nextButton}
            onPress={() => {
              setModalTwo(false);
              setModalThree(true);
              // console.log("Values for the What brings you to chat page are: ");
              // console.log("Understanding: " + understand);
              // console.log("Challenges: " + challenges);
              // console.log("Use: " + use);
              // console.log("Anxiety: " + anxiety);
              // console.log("Friendship: " + friendship);
              // console.log("Relationship: " + relationship);
              // console.log("Unhealthy Behaviors: " + behaviors);
              // console.log("Other: " + other);
            }}
          >
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity
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
          </TouchableOpacity> */}
        </View>
      </Modal>

      {/* Suicidal  */}
      <Modal visible={modalThree} fade={true}>
        <View style={styles.modalView3}>
          <View style={styles.suicidalTitle}>
            <Text style={styles.suicidalQuestion}>
              Have you had suicidal thoughts in the past 6 months?
            </Text>
          </View>
          <View style={styles.questions}>
            <YesNo
              yesValue={yes}
              setYesValue={setYes}
              noValue={no}
              setNoValue={setNo}
            />
          </View>
          {/* <TouchableOpacity
            style={styles.prevButton}
            onPress={() => {
              setModalThree(false);
              setModalTwo(true);
            }}
          >
            <Text style={styles.skipText}>Back</Text>
          </TouchableOpacity> */}
          <TouchableOpacity
            style={styles.nextButton}
            onPress={() => {
              setButtonColor("#FF9EDA");
              setDiscColor("#2E5F85");
              axios.post(
                "https://runaway-practicum.herokuapp.com/api/volunteer/survey", //might not be the right url
                {
                  FeelingPage: {
                    Happy: happy,
                    Thankful: thankful,
                    Anxious: anxious,
                    Worried: worried,
                    Embarrassed: embarrassed,
                    Sad: sad,
                    Angry: angry,
                    VerySad: verySad,
                    Meh: meh,
                    Content: content,
                    Ashamed: ashamed,
                    Confused: confused,
                  },
                  WhatBringsThem: {
                    UnderstandingEmotions_Feelings: understand,
                    LifeChallenges: challenges,
                    UseOrAbuse_Substances: use,
                    Anxiety_Depression: anxiety,
                    Friendship: friendship,
                    Relationship: relationship,
                    UnhealthyBehaviors: behaviors,
                    Other: other,
                  },
                  SuicidalThoughts: {
                    HaveHadSuicidalThoughts: yes,
                    HaveNotHadSuicidalThoughts: no,
                  },
                }
              );
              navigation.navigate("Chat");
              resetPage();
            }}
          >
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </>
  );
}

const windowW = Dimensions.get("window").width;
const windowH = Dimensions.get("window").height;

const styles = StyleSheet.create({
  nextButton: {
    position: "absolute",
    borderWidth: 0,
    top: windowH - 75,
    justifyContent: "center",
    borderRadius: 30,
    backgroundColor: "#FF9EDA",
  },
  skipButton: {
    position: "absolute",
    borderColor: "white",
    borderWidth: 2,
    top: windowH - 75,
    left: windowW - 100,
    justifyContent: "center",
  },
  skipButton2: {
    position: "absolute",
    borderColor: "white",
    borderWidth: 2,
    top: windowH - 75,
    left: windowW - 100,
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
  modalView3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    padding: 80,
  },
  modalView2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    padding: 30,
  },
  questionText: {
    fontSize: 21,
    textAlign: "center",
    paddingBottom: 5,
  },
  suicidalQuestion: {
    fontSize: 21,
    textAlign: "center",
    paddingBottom: 5,
    width: 200,
  },
  questionContainer: {
    width: 250,
  },
  questions: {
    position: "absolute",
    padding: 10,
    paddingBottom: 20,
  },
  feelView: {
    paddingTop: 100,
    paddingHorizontal: 0,
  },
  feelTitle: {
    flex: 1,
    alignItems: "center",
    top: 40,
  },
  bringsYouTitle: {
    flex: 1,
    alignItems: "center",
    top: 40,
    position: "absolute",
  },
  suicidalTitle: {
    flex: 1,
    alignItems: "center",
    top: 40,
    position: "absolute",
  },
  bottomTray: {
    position: "absolute",
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
    alignSelf: "center",
    flexDirection: "row",
  },
  buttonNextFeels: {
    borderWidth: 0,
    top: windowH - 75,
    justifyContent: "center",
    borderRadius: 30,
    backgroundColor: "#FF9EDA",
    alignItems: "center",
    alignSelf: "center",
    alignContent: "center",
  },
  columns: {
    flexDirection: "row",
    flex: 1,
    position: "absolute",
    top: 0,
    alignSelf: "center",
  },
  feed: {
    position: "absolute",
    top: 23,
    left: 13,
  },
});
