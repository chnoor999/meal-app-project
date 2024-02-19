import React, { createContext, useContext, useState } from "react";

export const FavouritesContext = createContext({
  ids: [],
  addToFavourites: () => {},
  removeToFavourites: () => {},
});

export const FavouritesContextProvider = ({ children }) => {
  const [favouritesIds, setFavouritesIds] = useState([]);

  const addToFavourites = (id) => {
    setFavouritesIds((pre) => [...pre, id]);
  };

  const removeToFavourites = (id) => {
    setFavouritesIds((pre) => pre.filter((ids) => ids !== id));
  };

  const value = {
    ids: favouritesIds,
    addToFavourites: addToFavourites,
    removeToFavourites: removeToFavourites,
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
