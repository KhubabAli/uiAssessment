import { View, Image, Text, StyleSheet } from "react-native";

export default ({ style }) => {
  return (
    <View style={[styles.container, style]}>
      <Image
        style={styles.backButton}
        source={require("../assets/StoreScreen/left-arrow.png")}
      />
      <Text style={styles.title}>My Stores</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  backButton: {
    height: 20,
    width: 12,
    left: -12,
    bottom: 0,
  },
  title: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "bold",
    fontSize: 24,
  },
  container: {
    flexDirection: "column",
    justifyContent: "flex-start",
  },
});
