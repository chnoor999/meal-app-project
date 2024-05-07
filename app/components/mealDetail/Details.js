import { FlatList, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../config/colors/colors";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

export default function Details({ data }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <Text style={styles.text}>{item}</Text>}
        ItemSeparatorComponent={<View style={styles.separator}></View>}
        scrollEnabled={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.color500,
    borderRadius: 6,
    marginVertical: hp(1),
    marginHorizontal: wp(2),
    paddingHorizontal: wp(3),
    paddingVertical: hp(0.5),
  },
  text: {
    fontFamily: "openSans",
    fontSize: hp(1.65),
    paddingVertical: hp(0.6),
  },
  separator: {
    borderBottomWidth: 1,
    borderColor: "#0000001d",
  },
});
