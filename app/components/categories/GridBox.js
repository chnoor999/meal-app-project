import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import React from "react";
// constant colors
import { Colors } from "../../config/colors/colors";
// navigation
import { useNavigation } from "@react-navigation/native";

export default function GridBox({ title, index, id, categoriesTitle }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("mealsScreen", { id, categoriesTitle })
      }
      activeOpacity={0.7}
      style={[styles.container, index % 2 != 0 && { marginTop: 20 }]}
    >
      <View style={styles.textContainer}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 170,
    flex: 1,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.color600,
    marginVertical: 8,
    marginHorizontal: 8,
    padding: 10,
    overflow: "hidden",
  },
  textContainer: {
    flex: 1,
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 16,
    fontFamily: "openSansBold",
    textAlignVertical: "center",
    flex: 1,
    textAlign: "center",
  },
});
