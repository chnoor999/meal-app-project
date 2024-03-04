import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Colors } from "../../config/colors/colors";

export default function FilterList({
  data,
  onPress,
  categoriesID,
  preferenceIdentity,
}) {
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
}

const styles = StyleSheet.create({
  textContainer: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: Colors.color100,
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    margin: 5,
  },
  text: {
    color: "#fff",
    fontFamily: "openSans",
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
