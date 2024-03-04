import { createContext, useContext } from "react";
import useAsyncStorage from "../hook/useAsyncStorage";

export const FavouritesContext = createContext({
  id: [],
  addFavourites: (id) => {},
  removeFavourites: (id) => {},
});

export const FavouritesContextProvider = ({ children }) => {
  // this is custom hook state that is stored in asyncStorage
  const [favouriteID, setFavouriteID] = useAsyncStorage("favourite", []);

  const addFavourites = (id) => {
    setFavouriteID((pre) => [...pre, id]);
  };

  const removeFavourites = (id) => {
    setFavouriteID((pre) => pre.filter((item) => item != id));
  };

  const value = {
    id: favouriteID,
    addFavourites,
    removeFavourites,
  };

  return (
    <FavouritesContext.Provider value={value}>
      {children}
    </FavouritesContext.Provider>
  );
};

export const useFavouritesContext = () => {
  return useContext(FavouritesContext);
};
