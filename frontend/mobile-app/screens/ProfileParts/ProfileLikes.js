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
    { title: "like4", id: 4 },
    { title: "like5", id: 5 },
    { title: "like6", id: 6 },
    { title: "like7", id: 7 },
    { title: "like8", id: 8 },
    { title: "like9", id: 9 },
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
        horizontal={true}
        scrollEnabled={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  likeStyle: {
    padding: 15,
    fontSize: 20,
    paddingTop: 30,
  },
});
