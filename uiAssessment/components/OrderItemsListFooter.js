import { View, StyleSheet } from "react-native";

import Address from "./Address";
import Billing from "./Billing";

export default ({ style }) => {
  return (
    <View style={[styles.container, style]}>
      <Address />
      <Billing style={styles.billing} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  billing: {
    marginTop: 24,
  },
});
