import { FlatList, StyleSheet, Text, View } from "react-native";
//constant colors
import { Colors } from "../../config/colors/colors";

export default function Details({ data }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item, index }) => (
          <Text style={styles.text}>{item}</Text>
        )}
        ItemSeparatorComponent={<View style={styles.separator}></View>}
        scrollEnabled={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    backgroundColor: Colors.color500,
    borderRadius: 6,
    margin: 10,
    paddingHorizontal: 10,
  },
  text: {
    paddingVertical: 6,
    fontFamily: "openSans",
  },
  separator: {
    borderBottomWidth: 1,
    borderColor: "#0000001d",
  },
});
