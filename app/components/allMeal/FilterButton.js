import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Colors } from "../../config/colors/colors";

export default function FilterButton({ onPress, dot }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.iconContainer}
      activeOpacity={0.7}
    >
      <FontAwesome name="filter" size={24} color="black" />
      <Text style={styles.filterText}>Filter</Text>
      {dot && <View style={styles.dot} />}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: "row",
    margin: 14,
    paddingRight: 20,
  },
  filterText: {
    fontSize: 10,
    position: "absolute",
    bottom: 2,
    right: 0,
    fontFamily: "openSans",
  },
  dot: {
    backgroundColor: "red",
    width: 9,
    height: 9,
    borderRadius: 50,
    position: "absolute",
    top: 1,
    right: 20,
    borderWidth: 1,
    borderColor: Colors.color600,
  },
});
