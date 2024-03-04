import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ImageViewer from "react-native-image-zoom-viewer";

export default function MealImageScreen({ route }) {
  const { imageUrl } = route.params;

  return (
    <View style={styles.container}>
      <ImageViewer imageUrls={[{ url: imageUrl }]} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
