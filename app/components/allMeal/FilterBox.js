import { StyleSheet, Text, View } from "react-native";
import { memo, useCallback, useLayoutEffect, useState } from "react";
import { Colors } from "../../config/colors/colors";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
import Data, { preference } from "../../data/Data";

import FilterList from "./FilterList";
import MyButton from "../ui/MyButton";
import FilterButton from "./FilterButton";

const FilterBox = ({ activeFilters, setActiveFilters }) => {
  const navigation = useNavigation();
  const [filterBoxVisible, setFilterBoxVisible] = useState(false);

  const toggleFilterHandler = useCallback(() => {
    setFilterBoxVisible((pre) => !pre);
  }, []);

  const onClearFilterHandler = useCallback(() => {
    setFilterBoxVisible(false);
    setActiveFilters({
      categoryFilter: "",
      preferenceFilter: "",
    });
  }, []);

  const onFilterListPressHandler = useCallback((item) => {
    setActiveFilters((pre) => {
      return {
        categoryFilter:
          // if the item lenght is smaller 3 then it is id of category
          item.length <= 3
            ? pre.categoryFilter == item
              ? ""
              : item
            : pre.categoryFilter,
        preferenceFilter:
          // if the item lenght is greater than 3 thant it is preference
          item.length > 3
            ? pre.preferenceFilter == item
              ? ""
              : item
            : pre.preferenceFilter,
      };
    });
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <FilterButton
          active={
            activeFilters.categoryFilter || activeFilters.preferenceFilter
          }
          onPress={toggleFilterHandler}
        />
      ),
    });
  }, [activeFilters]);

  return (
    filterBoxVisible && (
      <View style={styles.container}>
        <View style={styles.filterHeaderContainer}>
          <Text style={[styles.title, { color: "#fff" }]}>Search Filter</Text>
          <MyButton onPress={onClearFilterHandler}>Clear Filter</MyButton>
        </View>

        <Text style={styles.title}>Categories</Text>
        <FilterList
          categoriesID={activeFilters.categoryFilter}
          data={Data.CATEGORIES}
          onPress={onFilterListPressHandler}
        />

        <Text style={styles.title}>Dietary Preferences</Text>
        <FilterList
          preferenceIdentity={activeFilters.preferenceFilter}
          data={preference}
          onPress={onFilterListPressHandler}
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
  filterHeaderContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: hp(1),
  },
});
