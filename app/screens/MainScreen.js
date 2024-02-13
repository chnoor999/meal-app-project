import { StyleSheet, Text, View } from "react-native";
import React from "react";
// navigation
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
// screens
import CategoriesScreen from "./CategoriesScreen";
import MealsScreen from "./MealsScreen";
import MealDetailScreen from "./MealDetailScreen";
import ImageView from "./ImageView";

export default function MainScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "brown" },
        contentStyle: { backgroundColor: "#a52a2ab4" },
        headerTintColor: "#fff",
        animation: "slide_from_right",
      }}
    >
      <Stack.Screen
        name="categoriesScreen"
        component={CategoriesScreen}
        options={{ title: "All Categories" }}
      />
      <Stack.Screen name="mealsScreen" component={MealsScreen} />
      <Stack.Screen
        name="mealsDetailScreen"
        component={MealDetailScreen}
        options={{ title: "About the Meal" }}
      />
      <Stack.Screen
        name="imageView"
        component={ImageView}
        options={{
          animation: "simple_push",
          headerStyle: { backgroundColor: "#000" },
          title: "Meal Photo",
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
