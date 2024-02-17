import { StyleSheet, Text, View } from "react-native";
import React from "react";
// navigation
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavouritesScreen from "./FavouritesScreen";
import CategoriesScreen from "./CategoriesScreen";
const Drawer = createDrawerNavigator();

export default function DrawerScreen() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "brown" },
        sceneContainerStyle: { backgroundColor: "#a85b5b" },
        headerTintColor: "#fff",
        drawerStyle:{backgroundColor:"brown"},
        drawerInactiveBackgroundColor:"#a43b3b",
        drawerActiveTintColor:"#fff",
        drawerInactiveTintColor:"#c3c3c3",
        drawerActiveBackgroundColor:"#d16363",
        drawerType:"back"
      }}
    >
      <Drawer.Screen name="AllcategoriesScreen" component={CategoriesScreen} />
      <Drawer.Screen name="favouritesScreen" component={FavouritesScreen} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({});
