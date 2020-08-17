import React, { useState } from "react";

import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default function YesNo({ yesValue, setYesValue, noValue, setNoValue }) {
  const [textColorYes, setTextColorYes] = useState("#2E5F85");
  const [backColorYes, setBackColorYes] = useState("#FFFFFF");
  const [textColorNo, setTextColorNo] = useState("#2E5F85");
  const [backColorNo, setBackColorNo] = useState("#FFFFFF");

  const styles = StyleSheet.create({
    yesText: {
      fontSize: 16,
      paddingHorizontal: 20,
      paddingVertical: 9,
      color: textColorYes,
      textAlign: "center",
    },
    yesButton: {
      borderColor: "#ACDAFF",
      borderRadius: 30,
      borderWidth: 1,
      backgroundColor: backColorYes,
      width: 125,
      alignSelf: "center",
      justifyContent: "center",
    },
    noText: {
      fontSize: 16,
      paddingHorizontal: 20,
      paddingVertical: 9,
      color: textColorNo,
      textAlign: "center",
    },
    noButton: {
      borderColor: "#ACDAFF",
      borderRadius: 30,
      borderWidth: 1,
      backgroundColor: backColorNo,
      width: 125,
      alignSelf: "center",
      justifyContent: "center",
    },
    overAll: {
      padding: 5,
    },
  });

  return (
    <>
      <View style={styles.overAll}>
        <TouchableOpacity
          style={styles.yesButton}
          disabled={noValue}
          onPress={() => {
            setYesValue(!yesValue);
            if (!yesValue) {
              setBackColorYes("#2E5F85");
              setTextColorYes("#FFFFFF");
            } else {
              setBackColorYes("#FFFFFF");
              setTextColorYes("#2E5F85");
            }
          }}
        >
          <Text style={styles.yesText}>Yes</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.overAll}>
        <TouchableOpacity
          style={styles.noButton}
          disabled={yesValue}
          onPress={() => {
            setNoValue(!noValue);
            if (!noValue) {
              setBackColorNo("#2E5F85");
              setTextColorNo("#FFFFFF");
            } else {
              setBackColorNo("#FFFFFF");
              setTextColorNo("#2E5F85");
            }
          }}
        >
          <Text style={styles.noText}>No</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
