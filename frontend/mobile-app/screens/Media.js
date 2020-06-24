import React from "react";
import { StyleSheet, View, Text } from "react-native";
import BottomTray from "../components/bottomTray";

export default function Media(props) {
  const articles = [
    { title: "media1", id: 1 },
    { title: "media2", id: 2 },
    { title: "media3", id: 3 },
  ];
  mediaDisplay = ({ title }) => {
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
        renderItem={({ item }) => <mediaDisplay title={item.title} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mediaPosts: {
    padding: 7,
    fontSize: 20,
  },
});
