import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
// data
import Data from "../../data/Data"
//component
import MealCardMap from "../../components/meal/MealCardMap"

export default function AllMealsScreen() {
  
  return (
    <MealCardMap data={Data.MEALS} />
  )
}

const styles = StyleSheet.create({})