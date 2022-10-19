import { View, Text, StyleSheet, Image } from "react-native";

export default ({
  address = {
    title: "Shipping Address",
    address: "SRV Info Tech, Down Town Complex",
  },
  style,
}) => {
  return (
    <View style={[styles.container, style]}>
      <Image
        style={styles.icon}
        source={require("../assets/StoreScreen/home.png")}
      />
      <Text style={styles.address}>{address.address}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItem: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  address: {
    fontSize: 11,
    marginStart: 8,
    color: "#F9F9F9",
  },
  icon: {
    width: 16,
    height: 16,
  },
});
