import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
// data
import MealCard from "./MealCard";
//constant color
import { Colors } from "../../config/colors";

export default function MealCardMap({ data }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <MealCard
            imageUrl={item.imageUrl}
            title={item.title}
            duration={item.duration}
            complexity={item.complexity}
            affordability={item.affordability}
            mealData={item}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black1000,
  },
});
