import { memo, useLayoutEffect, useMemo } from "react";

import Data from "../../data/Data";
import MealCardList from "../../components/meal/MealCardList";

const MealsScreen = ({ route, navigation }) => {
  const { id, categoriesTitle } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({ title: categoriesTitle });
  }, []);

  const filteredMeal = useMemo(
    () =>
      Data.MEALS.filter((item) => {
        return item.categoryIds.includes(id);
      }),
    [Data.MEALS]
  );

  return <MealCardList data={filteredMeal} />;
};

export default memo(MealsScreen);
