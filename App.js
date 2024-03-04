//navigation
import { NavigationContainer } from "@react-navigation/native";
//screens
import StackScreens from "./app/screens/navigation/StackScreens";
//context
import { FavouritesContextProvider } from "./app/store/Favourites-Context";
// use fonts
import { useFonts } from "expo-font";
import SplashScreen from "./app/screens/SplashScreen";

export default function App() {
  const [fontLoaded] = useFonts({
    openSansBold: require("./app/config/fonts/OpenSans-Bold.ttf"),
    openSans: require("./app/config/fonts/OpenSans-Regular.ttf"),
  });

  return fontLoaded ? (
    <FavouritesContextProvider>
      <NavigationContainer>
        <StackScreens />
      </NavigationContainer>
    </FavouritesContextProvider>
  ) : <SplashScreen/>;
}
