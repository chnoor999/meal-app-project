import { StyleSheet, Text, View } from "react-native";
import React from "react";
// navigation
import { NavigationContainer } from "@react-navigation/native";
// screens
import MainScreen from "./app/screens/MainScreen";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <MainScreen />
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
