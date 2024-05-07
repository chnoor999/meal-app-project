import { Image, StyleSheet, View } from "react-native";
import { memo } from "react";
import { DrawerItemList } from "@react-navigation/drawer";

const DrawerContent = (props) => {
  return (
    <View style={styles.drawerContentContainer}>
      <Image
        source={require("../../assets/images/logo.png")}
        style={styles.image}
      />
      <DrawerItemList {...props} />
    </View>
  );
};

export default memo(DrawerContent);

const styles = StyleSheet.create({
  drawerContentContainer: {
    flex: 1,
    overflow: "hidden",
  },
  image: {
    width: "50%",
    height: "20%",
    alignSelf: "center",
    marginVertical: 30,
  },
});
