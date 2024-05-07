import { Image, StyleSheet, View } from "react-native";
import { memo } from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const MiniPhotos = ({ item }) => {
  return (
    <View style={styles.container}>
      {item.isGlutenFree && (
        <Image
          style={styles.image}
          source={require("../../assets/images/glutenfree.png")}
        />
      )}
      {item.isLactoseFree && (
        <Image
          style={styles.image}
          source={require("../../assets/images/lactosefree.png")}
        />
      )}
      {item.isVegan && (
        <Image
          style={styles.image}
          source={require("../../assets/images/vegan.png")}
        />
      )}
      {item.isVegetarian && (
        <Image
          style={styles.image}
          source={require("../../assets/images/vegetarian.png")}
        />
      )}
    </View>
  );
};

export default memo(MiniPhotos);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: wp(3),
    paddingTop: hp(2.8),
    paddingBottom: hp(1),
  },
  image: {
    width: hp(5),
    height: hp(5),
  },
});
