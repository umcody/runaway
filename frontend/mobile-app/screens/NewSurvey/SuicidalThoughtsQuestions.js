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
      borderRadius: 10,
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
      borderRadius: 10,
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
          onPress={() => {
            setYesValue(!yesValue);
            if (!yesValue && noValue) {
              setBackColorYes("#2E5F85");
              setTextColorYes("#FFFFFF");
              setBackColorNo("#FFFFFF");
              setTextColorNo("#2E5F85");
              setNoValue(!noValue);
            } else if (!yesValue && !noValue) {
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
          onPress={() => {
            setNoValue(!noValue);
            if (!noValue && yesValue) {
              setBackColorNo("#2E5F85");
              setTextColorNo("#FFFFFF");
              setBackColorYes("#FFFFFF");
              setTextColorYes("#2E5F85");
              setYesValue(!yesValue);
            } else if (!noValue && !yesValue) {
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
