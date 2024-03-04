//navigation
import { NavigationContainer } from "@react-navigation/native";
//screens
import StackScreens from "./app/screens/navigation/StackScreens";
//context
import { FavouritesContextProvider } from "./app/store/Favourites-Context";

export default function App() {
  return (
    <FavouritesContextProvider>
      <NavigationContainer>
        <StackScreens />
      </NavigationContainer>
    </FavouritesContextProvider>
  );
}
