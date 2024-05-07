import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { memo } from "react";
import { Colors } from "../../config/colors/colors";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const FilterList = ({ data, onPress, categoriesID, preferenceIdentity }) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            item.title ? onPress(item.id) : onPress(item);
          }}
          style={styles.textContainer}
        >
          <Text style={styles.text}>
            {item.title ? item.title : item.slice(2, 50)}
          </Text>
          {(item.title
            ? categoriesID == item.id
            : preferenceIdentity == item) && <View style={styles.check} />}
        </TouchableOpacity>
      )}
      numColumns={4}
    />
  );
};

export default memo(FilterList);

const styles = StyleSheet.create({
  textContainer: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: Colors.color100,
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    paddingVertical: hp(0.6),
    paddingHorizontal: wp(1.4),
    margin: 5,
  },
  text: {
    color: "#fff",
    fontFamily: "openSans",
    fontSize:hp(1.65)
  },
  check: {
    width: 12,
    height: 12,
    backgroundColor: "red",
    borderRadius: 50,
    position: "absolute",
    top: -5,
    right: -5,
    borderWidth: 3,
    borderColor: "#242424",
  },
});
