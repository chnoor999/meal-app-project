import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
// data
import data from "../data/Data";
// components
import CategoriesBox from "../components/CategoriesBox";

export default function CategoriesScreen({ navigation }) {
  // function to handle the click on categories grids
  const catrgorieHandler = (categorieID, categorieTitle) => {
    navigation.navigate("mealsScreen", { categorieID, categorieTitle });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data.CATEGORIES}
        renderItem={({ item, index }) => {
          return (
            <CategoriesBox
              onPress={catrgorieHandler.bind(this, item.id, item.title)}
              text={item.title}
              color={item.color}
              indexBox={index}
            />
          );
        }}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:10
  },
});
