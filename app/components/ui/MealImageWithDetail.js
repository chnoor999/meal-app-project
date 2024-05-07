import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { memo } from "react";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Colors } from "../../config/colors/colors";

const MealImageWithDetail = ({ item, imageHeight }) => {
  return (
    <ImageBackground
      style={[styles.image, { height: imageHeight }]}
      source={{ uri: item.imageUrl }}
    >
      <View style={styles.contentContainer}>
        <Text style={styles.text}>{item.duration}m</Text>
        <Text style={styles.text}>{item.complexity.toUpperCase()}</Text>
        <Text style={styles.text}>{item.affordability.toUpperCase()}</Text>
      </View>
    </ImageBackground>
  );
};

export default memo(MealImageWithDetail);

const styles = StyleSheet.create({
  image: {
    justifyContent: "flex-end",
  },
  contentContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "#00000069",
    paddingVertical: hp(1.4),
  },
  text: {
    color: Colors.color100,
    fontSize: hp(1.5),
    fontFamily: "openSans",
  },
});
