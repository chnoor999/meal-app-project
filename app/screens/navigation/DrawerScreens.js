import { Image, StyleSheet, View } from "react-native";
// navigation
import {
  createDrawerNavigator,
  DrawerItemList,
} from "@react-navigation/drawer";
const Drawer = createDrawerNavigator();
// screens
import AllCategoriesScreen from "../meal/AllCategoriesScreen";
import AllMealsScreen from "../meal/AllMealsScreen";
import FavouritesMealScreen from "../meal/FavouritesMeals";
import { Colors } from "../../config/colors/colors";

export default function DrawerScreens() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.color600 },
        drawerStyle: { backgroundColor: Colors.black1000 },
        drawerInactiveTintColor: "#bbbbbb",
        drawerActiveTintColor: Colors.color100,
        headerTitleStyle:{fontFamily:"openSansBold"},
        drawerLabelStyle:{fontFamily:"openSansBold"}
      }}
      drawerContent={(props) => {
        return (
          <View style={styles.drawerContentContainer}>
            <Image
              source={require("../../assets/images/logo.png")}
              style={styles.image}
            />
            <DrawerItemList {...props} />
          </View>
        );
      }}
    >
      <Drawer.Screen
        name="allCategories"
        component={AllCategoriesScreen}
        options={{ title: "All Categories" }}
      />
      <Drawer.Screen
        name="allMeals"
        component={AllMealsScreen}
        options={{ title: "All Meals" }}
      />
      <Drawer.Screen
        name="favouritesMeal"
        component={FavouritesMealScreen}
        options={{ title: "Favourite Meals" }}
      />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  drawerContentContainer: { flex: 1, overflow: "hidden" },
  image: {
    width: "50%",
    height: "20%",
    alignSelf: "center",
    marginVertical: 30,
  },
});
