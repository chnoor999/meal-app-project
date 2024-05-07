import { StyleSheet, View } from "react-native";
import { memo } from "react";
import { Colors } from "../../config/colors/colors";
import { getColumnNum } from "../../util/commom";
import { FlashList } from "@shopify/flash-list";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

import GridBoxItem from "./GridBoxItem";

const GridBoxList = ({ data }) => {
  return (
    <View style={styles.container}>
      <FlashList
        estimatedItemSize={200}
        data={data}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.contentContainerStyle}
        renderItem={({ item }) => {
          return (
            <GridBoxItem
              title={item.title}
              id={item.id}
              categoriesTitle={item.title}
            />
          );
        }}
        numColumns={getColumnNum()}
      />
    </View>
  );
};

export default memo(GridBoxList);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black1000,
  },
  contentContainerStyle: {
    paddingVertical: hp(1),
    paddingHorizontal: wp(2),
  },
});
