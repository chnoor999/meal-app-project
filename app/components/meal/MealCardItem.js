import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { memo } from "react";
import { Colors } from "../../config/colors/colors";
import { useNavigation } from "@react-navigation/native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

import MealImageWithDetail from "../ui/MealImageWithDetail";

const MealCardItem = ({ item }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.container}
      onPress={() => navigation.navigate("mealDetail", { item })}
    >
      <MealImageWithDetail item={item} imageHeight={hp(25)} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default memo(MealCardItem);

const styles = StyleSheet.create({
  container: {
    borderRadius: 6,
    backgroundColor: Colors.color500,
    overflow: "hidden",
    marginHorizontal: wp(3),
    marginVertical: hp(1),
  },
  textContainer: {
    paddingHorizontal: wp(2),
    paddingVertical: hp(1.8),
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: "openSansBold",
    fontSize: hp(1.8),
  },
});
