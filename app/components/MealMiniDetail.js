import { StyleSheet, Text, View } from "react-native";

export default function MealMiniDetail({
  duration,
  complexity,
  affordability,
  color = "#3b3b3b",
}) {
  return (
    <View style={styles.detailContainer}>
      <Text style={[styles.subtitle, { color: color }]}>{duration}m</Text>
      <Text style={[styles.subtitle, { color: color }]}>
        {complexity.toUpperCase()}
      </Text>
      <Text style={[styles.subtitle, { color: color }]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  detailContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 15,
  },
  subtitle: {
    fontSize: 12,
  },
});
