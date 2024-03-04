import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import React from "react";
//colors
import { Colors } from "../../config/colors/colors";
// component
import MealImage from "../MealImage";
//navigation
import { useNavigation } from "@react-navigation/native";

export default function MealCard({
  imageUrl,
  title,
  affordability,
  complexity,
  duration,
  mealData,
}) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.container}
      onPress={() => navigation.navigate("mealDetail", { mealData })}
    >
      <MealImage
        imageUrl={imageUrl}
        complexity={complexity}
        duration={duration}
        affordability={affordability}
      />
      <View style={styles.textContainer}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 15,
    borderRadius: 6,
    overflow: "hidden",
    height: 240,
    backgroundColor: Colors.color500,
  },
  textContainer: {
    padding: 10,
    flex: 1,
  },
  text: {
    textAlign: "center",
    fontFamily:"openSansBold",
    fontSize: 16,
    textAlignVertical: "center",
    flex: 1,
  },
});
