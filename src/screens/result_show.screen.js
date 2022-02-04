import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import useBusinessDetail from "../hooks/useBusinessDetail";

export const ResultShowScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  const [result] = useBusinessDetail(id);

  if (!result) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }}></Image>;
        }}
      ></FlatList>
      <Text style={styles.title}>Rating: {result.rating}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    paddingTop: 10,
    fontSize: 16,
  },
  image: {
    margin: 10,
    borderRadius: 5,
    width: 300,
    height: 150,
  },
});

export default ResultShowScreen;
