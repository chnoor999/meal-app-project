import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function MealSubTitle({ children, color }) {
  return (
    <View style={styles.contaienr}>
      <Text style={[styles.text, { color: color }]}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  contaienr: {
    padding: 5,
    borderBottomWidth: 2,
  },
  text: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 15,
  },
});
