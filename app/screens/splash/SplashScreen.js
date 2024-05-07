import { Image, StyleSheet, View } from "react-native";
import { memo } from "react";
import { Colors } from "../../config/colors/colors";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/images/logo.png")}
      />
    </View>
  );
};

export default memo(SplashScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.black1000,
  },
  image: {
    height: hp(40),
    width: wp(90),
  },
});
