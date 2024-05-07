import { StyleSheet, Text, View } from "react-native";
import { memo } from "react";
import { Colors } from "../../config/colors/colors";

import FilterList from "./FilterList";
import MyButton from "../MyButton";

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
        <View style={styles.box}>
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
      </View>
    )
  );
};

export default memo(FilterBox);

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.black1000,
  },
  box: {
    borderRadius: 8,
    padding: 10,
    height: 300,
  },
  title: {
    color: Colors.color100,
    fontFamily: "openSansBold",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  btnsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
