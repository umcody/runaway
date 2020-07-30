import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
} from "react-native";
import {colors, fonts, padding, dimensions,margin,borderRadius, icon} from '../style/styleValues.js'
// Card component for each member
const TeamCard = ({ name, role }) => (
  <View
    style={{
      backgroundColor: "#fff",
      width: "100%",
      borderRadius: 10,
      marginBottom: 10,
    }}
  >
    <View style={{ padding: padding.sm }}>
      <Text
        style={{
          color: colors.tertiary,
          fontSize: fonts.md,
          fontWeight: "bold",
          fontFamily:fonts.subheaderBold,
          paddingBottom: padding.sm,
        }}
      >
        {name}
      </Text>
      <Text style={{ color: colors.tertiary,fontSize: fonts.sm,fontFamily:fonts.subheader }}>{role}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
  },
});

export default TeamCard;
