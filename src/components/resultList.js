import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import Card from "./card";

const ResultList = ({ title, results }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyles}>{title}</Text>
      <FlatList
        horizontal
        data={results}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          console.log(item)
          return <Card result={item} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyles: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 5
  },
  container: {
    marginBottom: 10
  }
});

export default ResultList;
