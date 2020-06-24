import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import BottomTray from "../components/bottomTray";

export default function Media(props) {
  const articles = [
    { title: "media1", id: 1 },
    { title: "media2", id: 2 },
    { title: "media3", id: 3 },
    { title: "media4", id: 4 },
    { title: "media5", id: 5 },
    { title: "media6", id: 6 },
    { title: "media7", id: 7 },
    { title: "media8", id: 8 },
    { title: "media9", id: 9 },
  ];
  const MediaDisplay = ({ title }) => {
    return (
      <View>
        <Text style={styles.mediaPosts}>{title}</Text>
      </View>
    );
  };
  return (
    <View style={styles.mediaPosts}>
      <FlatList
        data={articles}
        renderItem={({ item }) => <MediaDisplay title={item.title} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mediaPosts: {
    padding: 7,
    fontSize: 20,
    paddingTop: 30,
    alignItems: "center",
  },
});
