import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect, useState } from "react";
// data
import Data from "../../data/Data";
//component
import MealCardMap from "../../components/meal/MealCardMap";
import FilterButton from "../../components/allMeal/FilterButton";
import FilterBox from "../../components/allMeal/FilterBox";
import { Colors } from "../../config/colors/colors";

export default function AllMealsScreen({ navigation }) {
  const preference = [
    "isGlutenFree",
    "isVegan",
    "isVegetarian",
    "isLactoseFree",
  ];

  const [FilterBoxVisible, setFilterboxVisible] = useState(false);
  const [categoriesID, setCategoriesID] = useState("");
  const [preferenceIdentity, setPreferenceIdentity] = useState("");

  const onFilterButton = () => {
    setFilterboxVisible((pre) => !pre);
  };

  const onRemove = () => {
    setFilterboxVisible(false);
    setCategoriesID("");
    setPreferenceIdentity("");
  };

  const onCategoriesPress = (id) => {
    if (id.length > 3) {
      setPreferenceIdentity((pre) => {
        if (pre != id) {
          return id;
        } else {
          return pre != id;
        }
      });
    } else {
      setCategoriesID((pre) => {
        if (pre != id) {
          return id;
        } else {
          return pre != id;
        }
      });
    }
  };

  // filtering meal with provided filter
  const filteredMeals = Data.MEALS.filter((item) => {
    if (!categoriesID && !preferenceIdentity) {
      return item;
    }
    if (categoriesID && preferenceIdentity) {
      return (
        item.categoryIds.includes(categoriesID) &&
        item[preferenceIdentity] == true
      );
    }
    if (categoriesID) {
      return item.categoryIds.includes(categoriesID);
    }
    if (preference) {
      return item[preferenceIdentity] == true;
    }
  });

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <FilterButton
          dot={!!(!!categoriesID || !!preferenceIdentity)}
          onPress={onFilterButton}
        />
      ),
    });
  }, [categoriesID, preferenceIdentity]);

  return (
    <>
      <FilterBox
        visible={FilterBoxVisible}
        onClear={onRemove}
        categories={Data.CATEGORIES}
        preference={preference}
        onCategoriesPress={onCategoriesPress}
        categoriesID={categoriesID}
        preferenceIdentity={preferenceIdentity}
      />
      {filteredMeals.length ? (
        <MealCardMap data={filteredMeals} />
      ) : (
        <View style={styles.emptyListTextContainer}>
          <Text style={styles.emptyText}>
            there are no matching meals available.
          </Text>
        </View>
      )}
    </>
  );
}

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
  },
});
