import { View, Text, StyleSheet } from "react-native";

export default ({
  address = {
    title: "Shipping Address",
    address:
      "                                                                                                                                                         ",
  },
  style,
}) => {
  return (
    <View style={[styles.container, style]}>
      {/* <Text style={styles.title}>{address.title}</Text> */}
      {/* <Text style={styles.address}>{address.address}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "blue",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  address: {
    marginTop: 12,
  },
});
