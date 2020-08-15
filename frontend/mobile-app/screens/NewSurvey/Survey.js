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
import WhatBringsYou from "./WhatBringsYouQuestions";
import YesNo from "./SuicidalThoughtsQuestions";
import Feel from "./FeelQuestions";
import Svg from "react-native-svg";

export default function Survey({ navigation }) {
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

  //Feeling page
  const [happy, setHappy] = useState(false);
  const [worried, setWorried] = useState(false);
  const [angry, setAngry] = useState(false);
  const [content, setContent] = useState(false);
  const [thankful, setThankful] = useState(false);
  const [embarrased, setEmbarrased] = useState(false);
  const [verySad, setVerySad] = useState(false);
  const [shameful, setShameful] = useState(false);
  const [anxious, setAnxious] = useState(false);
  const [sad, setSad] = useState(false);
  const [meh, setMeh] = useState(false);
  const [confused, setConfused] = useState(false);

  return (
    <>
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
              title="Embarrased"
              value={embarrased}
              setValue={setEmbarrased}
            />
            <Feel title="Very Sad" value={verySad} setValue={setVerySad} />
            <Feel title="Shameful" value={shameful} setValue={setShameful} />
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
          <Text>(You can choose multiple)</Text>

          <View style={styles.questions}>
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
          <Text style={styles.suicidalQuestion}>
            Have you had suicidal thoughts in the past 6 months?
          </Text>
          <View style={styles.questions}>
            <YesNo
              yesValue={yes}
              setYesValue={setYes}
              noValue={no}
              setNoValue={setNo}
            />
          </View>
          <TouchableOpacity
            style={styles.prevButton}
            onPress={() => {
              setModalThree(false);
              setModalTwo(true);
            }}
          >
            <Text style={styles.skipText}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.nextButton}
            onPress={() => {
              //here will be sent to the chat
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
    borderColor: "#FF9EDA",
    borderWidth: 2,
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
    padding: 20,
    paddingBottom: 60,
  },
  feelView: {
    paddingTop: 100,
  },
  feelView1: {
    position: "absolute",
    top: 0,
    left: 20,
    paddingTop: 100,
  },
  feelView2: {
    position: "absolute",
    alignItems: "center",
    alignSelf: "center",
    alignContent: "center",
    top: 0,
    paddingTop: 100,
  },
  feelView3: {
    position: "absolute",
    top: 0,
    left: windowW - 130,
    paddingTop: 100,
  },
  feelTitle: {
    flex: 1,
    alignItems: "center",
    top: 40,
  },
  bottomTray: {
    position: "absolute",
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
    alignSelf: "center",
  },
  buttonNextFeels: {
    borderColor: "#FF9EDA",
    borderWidth: 2,
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
  },
});
