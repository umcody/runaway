import React from "react";
import { FlatList, mediaDisplay, StyleSheet, View, Text } from "react-native";
import BottomTray from "../components/bottomTray";

export default function Posts(props) {
  const articles = [
    { title: "article1", id: 1 },
    { title: "article2", id: 2 },
    { title: "article3", id: 3 },
  ];
  const Article = ({ title }) => {
    return (
      <View>
        <Text style={styles.posts}>{title}</Text>
      </View>
    );
  };
  return (
    <View style={styles.posts}>
      <FlatList
        data={articles}
        renderItem={({ item }) => <Article title={item.title} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  posts: {
    padding: 7,
    fontSize: 20,
  },
});
