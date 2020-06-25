import React from "react";
import {
  FlatList,
  mediaDisplay,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
} from "react-native";

export default function Profile(props) {
  const likes = [
    { title: "like1", id: 1 },
    { title: "like2", id: 2 },
    { title: "like3", id: 3 },
  ];
  const Like = ({ title }) => {
    return (
      <SafeAreaView>
        <Text style={styles.likeStyle}>{title}</Text>
      </SafeAreaView>
    );
  };
  return (
    <View style={styles.likeStyle}>
      <FlatList
        data={likes}
        renderItem={({ item }) => <Like title={item.title} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  likeStyle: {
    flexDirection: "row",
    padding: 7,
    fontSize: 20,
    paddingTop: 30,
  },
});
