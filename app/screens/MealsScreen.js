import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
// data
import Data from "../data/Data";
import MealCard from "../components/MealCard";

export default function MealsScreen({ route, navigation }) {
  // id of that categories that was clicked
  const { categorieID, categorieTitle } = route.params;

  // filtering meals who have categories id
  const filteresMeals = Data.MEALS.filter((item) => {
    if (item.categoryIds.includes(categorieID)) {
      return item;
    }
  });

  // setting dynamic title
  useEffect(() => {
    navigation.setOptions({ title: categorieTitle });
  }, []);

  // handle click of meal
  const handleMeal = (mealDetail) => {
    navigation.navigate("mealsDetailScreen", { mealDetail });
  };

  return (
    <View>
      <FlatList
        data={filteresMeals}
        renderItem={({ item }) => {
          return (
            <MealCard
              title={item.title}
              imageUrl={item.imageUrl}
              affordability={item.affordability}
              duration={item.duration}
              complexity={item.complexity}
              onPress={handleMeal.bind(this, item)}
            />
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
