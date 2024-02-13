import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function MealTitle({ children, color, size = 18 }) {
  return (
    <Text style={[styles.title, { color: color, fontSize: size }]}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
  },
});
