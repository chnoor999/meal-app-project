import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function MiniPhotos({
  glutenFree,
  vegan,
  vegetarian,
  lactoseFree,
}) {
  return (
    <View style={styles.container}>
      {glutenFree ? (
        <View>
          <Image
            style={styles.image}
            source={require("../../assets/images/glutenfree.png")}
          />
        </View>
      ) : null}
      {lactoseFree ? (
        <View>
          <Image
            style={styles.image}
            source={require("../../assets/images/lactosefree.png")}
          />
        </View>
      ) : null}
      {vegan ? (
        <View>
          <Image
            style={styles.image}
            source={require("../../assets/images/vegan.png")}
          />
        </View>
      ) : null}
      {vegetarian ? (
        <View>
          <Image
            style={styles.image}
            source={require("../../assets/images/vegetarian.png")}
          />
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    paddingTop: 25,
    paddingBottom: 5,
  },
  image: {
    width: 50,
    height: 50,
  },
});
