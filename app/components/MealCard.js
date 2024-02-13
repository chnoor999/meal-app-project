import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import MealMiniDetail from "./MealMiniDetail";
import MealTitle from "./MealTitle";

export default function MealCard({
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
  onPress,
}) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.container}
      onPress={onPress}
    >
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <View style={styles.textContainer}>
        <MealTitle>{title}</MealTitle>
        <MealMiniDetail
          complexity={complexity}
          duration={duration}
          affordability={affordability}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 8,
    marginHorizontal: 25,
    marginVertical: 15,
  },
  image: {
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    width: "100%",
    height: 200,
  },
  textContainer: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    gap: 10,
  },
});
