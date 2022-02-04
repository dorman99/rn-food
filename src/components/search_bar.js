import React from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmitted }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" color="black" style={styles.iconStyle} />
      <TextInput
        onChangeText={onTermChange}
        onEndEditing={onTermSubmitted} // enter button pressed
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputStyle}
        placeholder="search"
        value={term}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 15,
    backgroundColor: "#F0EEEE",
    borderRadius: 5,
    height: 50,
    marginHorizontal: 15,
    flexDirection: "row",
    marginBottom: 10
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: "center", // centeirng the items child
    marginHorizontal: 10,
  },
  inputStyle: {
    fontSize: 18,
    flex: 1, // to take the rest of space
  },
});

export default SearchBar;
