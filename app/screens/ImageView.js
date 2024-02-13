import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import ImageViewer from "react-native-image-zoom-viewer";

export default function ImageView({ route, navigation }) {
  const { imageUrl } = route.params;

  return (
    <View style={styles.container}>
      <ImageViewer
        imageUrls={[{ url: imageUrl }]}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "contain",
  },
});
