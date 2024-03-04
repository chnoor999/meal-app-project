import { StyleSheet, Text, View } from "react-native";
import React from "react";
// data
import Data from "../../data/Data";
//component
import GridBoxMap from "../../components/categories/GridBoxMap";

export default function AllCategoriesScreen() {
  return <GridBoxMap data={Data.CATEGORIES} />;
}

const styles = StyleSheet.create({});
