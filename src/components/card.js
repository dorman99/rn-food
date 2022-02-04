import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const Card = ({ result }) => {
  return (
    <View style={styles.containter}>
      <Image style={styles.image} source={{uri: result.image_url}}/>
      <Text style={styles.name}>{result.name}</Text>
      <Text>{result.rating} Start, {result.review_count} Reviews</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    image: {
        width: 250,
        height: 120,
        borderRadius: 4,
        marginBottom: 5
    },
    name: {
        fontWeight: 'bold',
    },
    containter: {
        marginLeft: 15,
    }
});

export default Card;
