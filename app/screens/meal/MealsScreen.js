import { StyleSheet } from "react-native";
import React, { useLayoutEffect } from "react";
//data
import Data from "../../data/Data";
// component
import MealCarMap from "../../components/meal/MealCardMap";

export default function MealsScreen({ route, navigation }) {
  const { id, categoriesTitle } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({ title: categoriesTitle });
  }, []);

  // filtering meal with there categories id
  const filteresMeal = Data.MEALS.filter((item) => {
    return item.categoryIds.includes(id);
  });

  return <MealCarMap data={filteresMeal} />;
}

const styles = StyleSheet.create({});
