import { StyleSheet, Text, View } from "react-native";
import { memo } from "react";
import { Colors } from "../../config/colors/colors";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

import FilterList from "./FilterList";
import MyButton from "../ui/MyButton";

const FilterBox = ({
  visible,
  onClear,
  categories,
  preference,
  onCategoriesPress,
  categoriesID,
  preferenceIdentity,
}) => {
  return (
    visible && (
      <View style={styles.container}>
        <View style={styles.btnsContainer}>
          <Text style={[styles.title, { color: "#fff" }]}>Search Filter</Text>
          <MyButton onPress={onClear}>Clear Filter</MyButton>
        </View>

        <Text style={styles.title}>Categories</Text>
        <FilterList
          data={categories}
          onPress={onCategoriesPress}
          categoriesID={categoriesID}
        />

        <Text style={styles.title}>Dietary Preferences</Text>
        <FilterList
          data={preference}
          onPress={onCategoriesPress}
          preferenceIdentity={preferenceIdentity}
        />
      </View>
    )
  );
};

export default memo(FilterBox);

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.black1000,
    paddingHorizontal: wp(2.5),
    paddingVertical: hp(1),
  },
  title: {
    color: Colors.color100,
    fontFamily: "openSansBold",
    fontSize: hp(1.7),
  },
  btnsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: hp(1),
  },
});
