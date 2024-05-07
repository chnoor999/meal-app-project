import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Colors } from "../../config/colors/colors";

const Stack = createNativeStackNavigator();
import MealsScreen from "../meal/MealsScreen";
import MealDetailScreen from "../meal/MealsDetailScreen";
import MealImageScreen from "../meal/MealImageScreen";
import DrawerScreens from "./DrawerScreens";

export default function StackScreens() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.color500 },
        animation: "slide_from_right",
        headerTitleStyle: { fontFamily: "openSansBold" },
      }}
    >
      <Stack.Screen
        name="allDrawer"
        component={DrawerScreens}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="mealsScreen" component={MealsScreen} />
      <Stack.Screen
        name="mealDetail"
        component={MealDetailScreen}
        options={{ title: "Meal Detail" }}
      />
      <Stack.Screen
        name="mealImage"
        component={MealImageScreen}
        options={{
          title: "Meal Photo",
          headerStyle: { backgroundColor: "#000" },
          headerTintColor: "#fff",
          animation: "simple_push",
        }}
      />
    </Stack.Navigator>
  );
}
