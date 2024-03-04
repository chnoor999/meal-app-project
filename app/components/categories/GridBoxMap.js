import { StyleSheet, View, FlatList } from "react-native";
import React from "react";
//component
import GridBox from "./GridBox";
//constant color
import { Colors } from "../../config/colors/colors";

export default function GridBoxMap({ data }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item, index }) => {
          return (
            <GridBox
              title={item.title}
              index={index}
              id={item.id}
              categoriesTitle={item.title}
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
    backgroundColor: Colors.black1000,
    padding: 5,
  },
});
