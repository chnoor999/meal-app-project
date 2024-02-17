import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
// navigation
import { NavigationContainer } from "@react-navigation/native";
// screens
import StackScreen from "./app/screens/StackScreen";
import { FavouritesContextProvider } from "./app/store/FavouritesContext";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <FavouritesContextProvider>
        <NavigationContainer>
          <StackScreen />
        </NavigationContainer>
      </FavouritesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({});
