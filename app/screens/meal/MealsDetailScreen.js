import { useLayoutEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
// constant colors
import { Colors } from "../../config/colors/colors";
//icons
import { AntDesign } from "@expo/vector-icons";
// component
import MealImage from "../../components/MealImage";
import Details from "../../components/mealDetail/Details";
import MiniPhotos from "../../components/mealDetail/MiniPhotos";
import { useFavouritesContext } from "../../store/Favourites-Context";

export default function MealsDetailScreen({ route, navigation }) {
  const { mealData } = route.params;

  const { id, addFavourites, removeFavourites } = useFavouritesContext();

  const isFavourites = !!id.includes(mealData.id);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () =>
        isFavourites ? (
          <AntDesign
            name="heart"
            size={24}
            color="black"
            style={styles.icon}
            onPress={removeFavourites.bind(this, mealData.id)}
          />
        ) : (
          <AntDesign
            name="hearto"
            size={24}
            color="black"
            style={styles.icon}
            onPress={addFavourites.bind(this, mealData.id)}
          />
        ),
    });
  }, [id]);

  return (
    <View style={styles.container}>
      <ScrollView>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() =>
            navigation.navigate("mealImage", { imageUrl: mealData.imageUrl })
          }
        >
          <MealImage
            imageUrl={mealData.imageUrl}
            complexity={mealData.complexity}
            duration={mealData.duration}
            affordability={mealData.affordability}
            height={220}
          />
        </TouchableOpacity>
        <Text style={styles.mainTile}>{mealData.title}</Text>
        <View>
          <Text style={styles.title}>Ingredients</Text>
          <Details data={mealData.ingredients} />
        </View>
        <View>
          <Text style={styles.title}>Steps</Text>
          <Details data={mealData.steps} />
        </View>
        <MiniPhotos
          glutenFree={mealData.isGlutenFree}
          vegan={mealData.isVegan}
          vegetarian={mealData.isVegetarian}
          lactoseFree={mealData.isLactoseFree}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black1000,
  },
  mainTile: {
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
    paddingVertical: 20,
    fontFamily:"openSansBold"
  },
  title: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    fontFamily:"openSans"
  },
  icon: {
    padding: 5,
  },
});
