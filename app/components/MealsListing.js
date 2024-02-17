import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MealCard from './MealCard';

export default function MealsListing({data,navigation}) {

  
  // handle click of meal
  const handleMeal = (mealDetail) => {
    navigation.navigate("mealsDetailScreen", { mealDetail });
  };
  
  return (
    <FlatList
    data={data}
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
  )
}

const styles = StyleSheet.create({})