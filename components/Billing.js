import { View, Text, StyleSheet } from "react-native";

export default ({
  style,
  billing = { totalBill: 999, comissionCharges: -150, netAmount: 849 },
}) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.horizontal}>
        <Text style={styles.text}>Total Bill</Text>
        <Text style={styles.text}>$ 999</Text>
      </View>
      <View style={[styles.horizontal, { marginTop: 8 }]}>
        <Text style={styles.text}>Commission charges</Text>
        <Text style={styles.text}>$ -150</Text>
      </View>
      <View style={[styles.horizontal, { marginTop: 16 }]}>
        <Text style={[styles.text, styles.bigText]}>Net. Amount</Text>
        <Text style={[styles.text, styles.bigText]}>$ 849</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E83BA5",
    padding: 24,
    borderRadius: 10,
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    color: "#fff",
  },
  bigText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
