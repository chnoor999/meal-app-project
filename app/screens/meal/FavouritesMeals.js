import { StyleSheet, Text, View } from "react-native";
import { useFavouritesContext } from "../../store/Favourites-Context";
import { Colors } from "../../config/colors/colors";
import { memo, useMemo } from "react";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

import Data from "../../data/Data";
import MealCardList from "../../components/meal/MealCardList";

const FavouritesMeals = () => {
  const { id } = useFavouritesContext();

  // filter favourite meals
  const favouriteMeals = useMemo(
    () => Data.MEALS.filter((item) => id.includes(item.id)),
    [Data.MEALS, id]
  );

  return !!favouriteMeals.length ? (
    <MealCardList data={favouriteMeals} />
  ) : (
    <View style={styles.container}>
      <Text style={styles.text}>No Favourite Meals Yet!</Text>
    </View>
  );
};

export default memo(FavouritesMeals);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black1000,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: hp(1.66),
    color: "#ffffff46",
  },
});
