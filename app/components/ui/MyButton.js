import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { memo } from "react";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

const MyButton = ({ onPress, children }) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <Text style={[styles.text]}>{children}</Text>
    </TouchableOpacity>
  );
};

export default memo(MyButton);

const styles = StyleSheet.create({
  text: {
    color: "#ffffff80",
    fontFamily: "openSans",
    fontSize: hp(1.65),
  },
});
