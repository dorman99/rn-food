import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";

const ResultList = ({ title, results }) => {
  return (
    <View>
      <Text style={styles.titleStyles}>{title}</Text>
      <Text>total of lists: {results.length}</Text>
      <FlatList
        horizontal
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return <Text> {item.name} </Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyles: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default ResultList;
