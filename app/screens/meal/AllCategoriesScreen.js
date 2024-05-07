import { memo } from "react";

import Data from "../../data/Data";
import GridBoxList from "../../components/categories/GridBoxList";

const AllCategoriesScreen = () => {
  return <GridBoxList data={Data.CATEGORIES} />;
};

export default memo(AllCategoriesScreen);
