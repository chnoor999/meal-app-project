import { createDrawerNavigator } from "@react-navigation/drawer";
import { Colors } from "../../config/colors/colors";

const Drawer = createDrawerNavigator();
import AllCategoriesScreen from "../meal/AllCategoriesScreen";
import AllMealsScreen from "../meal/AllMealsScreen";
import FavouritesMealScreen from "../meal/FavouritesMeals";
import DrawerContent from "../../components/ui/DrawerContent";

export default function DrawerScreens() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.color500 },
        drawerStyle: { backgroundColor: Colors.black1000 },
        drawerInactiveTintColor: "#bbbbbb",
        drawerActiveTintColor: Colors.color100,
        headerTitleStyle: { fontFamily: "openSansBold" },
        drawerLabelStyle: { fontFamily: "openSansBold" },
      }}
      drawerContent={(props) => <DrawerContent {...props} />}
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
