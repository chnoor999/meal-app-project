import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function MealDetailList({ text }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    borderRadius: 8,
    marginVertical: 5,
    backgroundColor: "brown",
  },
  text: {
    fontSize: 16,
    textAlign: "center",
  },
});
