import { ImageBackground, StyleSheet, View } from "react-native";
import React from "react";
import MiniDetail from "./MiniDetail";

export default function MealImage({
  imageUrl,
  complexity,
  affordability,
  duration,
  height = 180,
}) {
  return (
    <View style={styles.imageContainer}>
      <ImageBackground
        style={[styles.image, { height }]}
        source={{ uri: imageUrl }}
      >
        <MiniDetail
          affordability={affordability}
          complexity={complexity}
          duration={duration}
        />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    width: "100%",
  },
  image: {
    width: "100%",
    objectFit: "cover",
    justifyContent: "flex-end",
  },
});
