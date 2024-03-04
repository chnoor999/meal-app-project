import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Colors } from "../config/colors/colors";

export default function MyButton({ onPress, children }) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.container}
      onPress={onPress}
    >
      <Text style={[styles.text]}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 6,
    borderColor: Colors.color100,
  },
  text: {
    color: "#ffffff80",
    fontFamily: "openSans",
    fontSize: 12,
  },
});
