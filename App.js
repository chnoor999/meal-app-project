import StackScreens from "./app/screens/navigation/StackScreens";
import SplashScreen from "./app/screens/splash/SplashScreen";

import { NavigationContainer } from "@react-navigation/native";
import { FavouritesContextProvider } from "./app/store/Favourites-Context";
import { useFonts } from "expo-font";

export default function App() {
  const [fontLoaded] = useFonts({
    openSansBold: require("./app/config/fonts/OpenSans-Bold.ttf"),
    openSans: require("./app/config/fonts/OpenSans-Regular.ttf"),
  });

  if (!fontLoaded) {
    return <SplashScreen />;
  }

  return (
    <FavouritesContextProvider>
      <NavigationContainer>
        <StackScreens />
      </NavigationContainer>
    </FavouritesContextProvider>
  );
}
