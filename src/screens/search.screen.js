import React from "react";
import { View, StyleSheet, Text } from "react-native";
import SearchBar from "../components/search_bar";

const SearchScreen = () => {
  return (
    <View>
        <SearchBar/>
      <Text>Search Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;