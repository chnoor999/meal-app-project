import { memo } from "react";

import ImageViewer from "react-native-image-zoom-viewer";

const MealImageScreen = ({ route }) => {
  const { imageUrl } = route.params;

  return <ImageViewer imageUrls={[{ url: imageUrl }]} />;
};

export default memo(MealImageScreen);
