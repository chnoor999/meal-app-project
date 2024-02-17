import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MealsListing from "../components/MealsListing";
import { useFavouritesContext } from "../store/FavouritesContext";
import Data from "../data/Data";

export default function FavouritesScreen({ navigation }) {
  const { ids } = useFavouritesContext();

  const favouritesMeals = Data.MEALS.filter((meals) => ids.includes(meals.id));

  if (!favouritesMeals.length) {
    return (
      <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
        <Text style={{color:"#454545"}}>No Favourites Meals Yet!</Text>
      </View>
    );
  }
  return <MealsListing data={favouritesMeals} navigation={navigation} />;
}

const styles = StyleSheet.create({});
