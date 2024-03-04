import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../config/colors/colors";

export default function MiniDetail({ duration, complexity, affordability }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{duration}m</Text>
      <Text style={styles.text}>{complexity.toUpperCase()}</Text>
      <Text style={styles.text}>{affordability.toUpperCase()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "#00000069",
    padding: 10,
  },
  text: {
    color: Colors.color100,
    fontSize: 12,
    fontFamily: "openSans",
  },
});
