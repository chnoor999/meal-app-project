import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Logo() {
  return (
    <Image
      source={require("../assets/images/logo.png")}
      style={{
        width: "100%",
        height: "22%",
        alignSelf: "center",
        marginVertical: 50,
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: 250,
    marginTop: 100,
    alignSelf: "center",
  },
  image: {
    alignSelf: "center",
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: "pink",
  },
});
