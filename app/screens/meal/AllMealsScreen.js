import { StyleSheet, Text, View } from "react-native";
import { memo, useMemo, useState } from "react";
import { Colors } from "../../config/colors/colors";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

import Data from "../../data/Data";
import MealCardList from "../../components/meal/MealCardList";
import FilterBox from "../../components/allMeal/FilterBox";

const AllMealsScreen = () => {
  const [activeFilters, setActiveFilters] = useState({
    categoryFilter: "",
    preferenceFilter: "",
  });

  const getFilteredMeal = useMemo(() => {
    return Data.MEALS.filter((mapItem) => {
      if (!activeFilters.categoryFilter && !activeFilters.preferenceFilter)
        return mapItem;

      if (activeFilters.categoryFilter && !activeFilters.preferenceFilter)
        return mapItem.categoryIds.includes(activeFilters.categoryFilter);

      if (!activeFilters.categoryFilter && activeFilters.preferenceFilter)
        return mapItem[activeFilters.preferenceFilter] == true;

      if (activeFilters.categoryFilter && activeFilters.preferenceFilter)
        return (
          mapItem[activeFilters.preferenceFilter] == true &&
          mapItem.categoryIds.includes(activeFilters.categoryFilter)
        );
    });
  }, [activeFilters]);

  return (
    <>
      <FilterBox
        activeFilters={activeFilters}
        setActiveFilters={setActiveFilters}
      />
      {getFilteredMeal.length ? (
        <MealCardList data={getFilteredMeal} />
      ) : (
        <View style={styles.emptyListTextContainer}>
          <Text style={styles.emptyText}>
            there are no matching meals available.
          </Text>
        </View>
      )}
    </>
  );
};

export default memo(AllMealsScreen);

const styles = StyleSheet.create({
  emptyListTextContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.black1000,
  },
  emptyText: {
    color: "#ffffff46",
    textTransform: "capitalize",
    fontSize: hp(1.66),
  },
});
