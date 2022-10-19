import { View, Image, Text, StyleSheet } from "react-native";

export default ({ style }) => {
  return (
    <View style={[styles.container, style]}>
      <Image
        style={styles.backButton}
        source={require("../assets/OrderDetailScreen/arrow-left.png")}
      />
      <Text style={styles.title}>Order Details</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  backButton: {
    width: 24,
    height: 24,
    position: "absolute",
    left: 24,
    alignSelf: "center",
    bottom: 0,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
