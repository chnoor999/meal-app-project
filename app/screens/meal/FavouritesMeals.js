import { StyleSheet, Text, View } from "react-native";
import React from "react";
// data
import Data from "../../data/Data";
// context
import { useFavouritesContext } from "../../store/Favourites-Context";
//component
import MealCardMap from "../../components/meal/MealCardMap";
import { Colors } from "../../config/colors/colors";

export default function FavouritesMeals() {
  const { id } = useFavouritesContext();

  // filter favourite meals
  const favouriteMeals = Data.MEALS.filter((item) => id.includes(item.id));

  return !!favouriteMeals.length ? (
    <MealCardMap data={favouriteMeals} />
  ) : (
    <View style={styles.container}>
      <Text style={styles.text}>No favorite Meals Yet!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:Colors.black1000,
    justifyContent:"center",
    alignItems:"center"
  },
  text:{
    fontSize:16,
    color:"#ffffff46"
  }
});
