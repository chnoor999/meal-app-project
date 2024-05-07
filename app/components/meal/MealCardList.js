import { FlatList, StyleSheet, View } from "react-native";
import { memo } from "react";
import { Colors } from "../../config/colors/colors";

import MealCardItem from "./MealCardItem";

const MealCardList = ({ data }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MealCardItem item={item} />}
      />
    </View>
  );
};

export default memo(MealCardList);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black1000,
  },
});
