import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { memo } from "react";
import { Colors } from "../../config/colors/colors";
import { useNavigation } from "@react-navigation/native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const GridBoxItem = ({ title, id, categoriesTitle }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("mealsScreen", { id, categoriesTitle })
      }
      activeOpacity={0.8}
      style={styles.container}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default memo(GridBoxItem);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    height: hp(20),
    marginHorizontal: wp(1),
    marginVertical: hp(0.5),
    backgroundColor: Colors.color500,
  },
  text: {
    fontSize: hp(1.8),
    fontFamily: "openSansBold",
  },
});
