import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
// icons
import { Ionicons } from "@expo/vector-icons";

export default function HeaderIcon({ name, color, size ,onPress }) {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <Ionicons name={name} color={color} size={size} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
