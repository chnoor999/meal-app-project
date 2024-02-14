import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

export default function CategoriesBox({ text, color, onPress ,indexBox }) {
  console.log(indexBox)
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[
        styles.container,
        { backgroundColor: color },
        indexBox % 2 === 1 && { marginTop: 25 },
      ]}
      onPress={onPress}
    >
      <View style={styles.innerContainer}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 150,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    marginHorizontal:10,
  },
  text: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
