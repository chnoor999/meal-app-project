import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
// constant colors
import {Colors} from "../config/colors/colors"

export default function SplashScreen() {
  return (
    <View style={styles.container}>
        <Image style={styles.image} source={require("../assets/images/logo.png")} />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.black1000,
        justifyContent:"center",
        alignItems:"center"
    },
})