import { StyleSheet, Text, View } from "react-native";
import React from "react";
// navigation
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
// screens
import MealsScreen from "./MealsScreen";
import MealDetailScreen from "./MealDetailScreen";
import ImageView from "./ImageView";
import DrawerScreen from "./DrawerScreen";

export default function StackScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "brown" },
        contentStyle: { backgroundColor: "#a85b5b" },
        headerTintColor: "#fff",
        animation: "slide_from_right",
      }}
    >
      <Stack.Screen
        name="categoriesScreen"
        component={DrawerScreen}
        options={{ title: "All Categories", headerShown: false }}
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
