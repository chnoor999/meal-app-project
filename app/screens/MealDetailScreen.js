import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import MealMiniDetail from "../components/MealMiniDetail";
import MealSubTitle from "../components/MealSubTitle";
import MealTitle from "../components/MealTitle";
import MealDetailList from "../components/MealDetailList";

export default function MealDetailScreen({ route, navigation }) {
  const { mealDetail } = route.params;

  // function to handle to show image in detail
  const handleImageView = () => {
    navigation.navigate("imageView", { imageUrl: mealDetail.imageUrl });
  };

  return (
    <ScrollView>
      <TouchableOpacity activeOpacity={0.7} onPress={handleImageView}>
        <Image
          source={{ uri: mealDetail.imageUrl }}
          style={styles.imageContainer}
        />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <MealTitle color={"#fff"} size={20}>
          {mealDetail.title}
        </MealTitle>
        <View style={styles.miniDetail}>
          <MealMiniDetail
            color="#fff"
            duration={mealDetail.duration}
            complexity={mealDetail.complexity}
            affordability={mealDetail.affordability}
          />
        </View>
        <View style={styles.listsContainer}>
          <MealSubTitle>Ingredients</MealSubTitle>
          <FlatList
            data={mealDetail.ingredients}
            scrollEnabled={false}
            renderItem={({ item }) => {
              return <MealDetailList text={item} />;
            }}
          />
          <MealSubTitle>Steps</MealSubTitle>
          <FlatList
            data={mealDetail.steps}
            scrollEnabled={false}
            renderItem={({ item }) => {
              return <MealDetailList text={item} />;
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    width: "100%",
    height: 300,
  },
  textContainer: {
    padding: 10,
    paddingBottom: 50,
  },
  miniDetail: {
    paddingVertical: 10,
  },
  listsContainer: {
    paddingHorizontal: 50,
  },
});
