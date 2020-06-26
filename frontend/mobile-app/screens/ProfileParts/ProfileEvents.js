import React from "react";
import { FlatList, mediaDisplay, StyleSheet, View, Text } from "react-native";

export default function Profile(props) {
  const events = [
    { title: "event1", id: 1 },
    { title: "event2", id: 2 },
    { title: "event3", id: 3 },
  ];
  const EventCreator = ({ title }) => {
    return (
      <View>
        <Text style={styles.eventStyle}>{title}</Text>
      </View>
    );
  };
  return (
    <View style={styles.eventStyle}>
      <FlatList
        data={events}
        renderItem={({ item }) => <EventCreator title={item.title} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  eventStyle: {
    padding: 7,
    fontSize: 20,
    paddingTop: 30,
    alignItems: "center",
  },
});
