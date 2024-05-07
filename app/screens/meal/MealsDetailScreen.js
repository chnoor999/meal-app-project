import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { memo, useLayoutEffect } from "react";
import { Colors } from "../../config/colors/colors";
import { AntDesign } from "@expo/vector-icons";
import { useFavouritesContext } from "../../store/Favourites-Context";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

import MealImage from "../../components/ui/MealImageWithDetail";
import Details from "../../components/mealDetail/Details";
import MiniPhotos from "../../components/mealDetail/MiniPhotos";

const MealsDetailScreen = ({ route, navigation }) => {
  const { item } = route.params;

  const { id, addFavourites, removeFavourites } = useFavouritesContext();

  const isFavourites = !!id.includes(item.id);

  const toggleFavouriteHandler = () => {
    isFavourites ? removeFavourites(item.id) : addFavourites(item.id);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity activeOpacity={0.7} style={styles.iconContainer}>
          <AntDesign
            name={isFavourites ? "heart" : "hearto"}
            size={24}
            color="black"
            onPress={toggleFavouriteHandler}
          />
        </TouchableOpacity>
      ),
    });
  }, [item, id]);

  return (
    <View style={styles.container}>
      <ScrollView>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() =>
            navigation.navigate("mealImage", { imageUrl: item.imageUrl })
          }
        >
          <MealImage item={item} imageHeight={hp(30)} />
        </TouchableOpacity>
        <Text style={styles.mainTile}>{item.title}</Text>

        <Text style={styles.title}>Ingredients</Text>
        <Details data={item.ingredients} />

        <Text style={styles.title}>Steps</Text>
        <Details data={item.steps} />

        <MiniPhotos
          glutenFree={item.isGlutenFree}
          vegan={item.isVegan}
          vegetarian={item.isVegetarian}
          lactoseFree={item.isLactoseFree}
          item={item}
        />
      </ScrollView>
    </View>
  );
};

export default memo(MealsDetailScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black1000,
  },
  mainTile: {
    color: "#fff",
    textAlign: "center",
    fontSize: hp(2.1),
    paddingVertical: hp(2),
    fontFamily: "openSansBold",
  },
  title: {
    color: "#fff",
    textAlign: "center",
    fontSize: hp(1.9),
    fontFamily: "openSans",
  },
  iconContainer: {
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
});
