import React from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";
import { Feather } from '@expo/vector-icons';

const SearchBar = () => {
  return (
    <View style={styles.background}>
        <Feather name="search" size={30} color="black" />
        <TextInput placeholder="search"/>
    </View>
  );
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#F0EEEE',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        height: 50, 
        marginHorizontal: 15
    },
    searchIcon: {

    }
});

export default SearchBar;