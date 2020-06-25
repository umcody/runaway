import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";

export default function Media(props) {
  const articles = [
    { title: "media1", id: 1 },
    { title: "media2", id: 2 },
    { title: "media3", id: 4 },
    { title: "media4", id: 5 },
    { title: "media5", id: 6 },
    { title: "media6", id: 7 },
    { title: "media7", id: 8 },
    { title: "media8", id: 9 },
    { title: "media9", id: 10 },
    { title: "media10", id: 11 },
    { title: "media11", id: 12 },
    { title: "media12", id: 13 },
    { title: "media13", id: 14 },
    { title: "media14", id: 15 },
    { title: "media16", id: 16 },
    { title: "media17", id: 17 },
    { title: "media18", id: 18 },
  ];
  const MediaDisplay = ({ title }) => {
    return (
      <View>
        <Text style={styles.posts}>{title}</Text>
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
    fontSize: 90,
    paddingTop: 30,
    alignItems: "center",
  },
});
