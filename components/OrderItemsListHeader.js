import { Text, View, StyleSheet, Image } from "react-native";

export default () => {
  return (
    <View style={styles.container}>
      <View style={styles.topSubContainer}>
        <Text style={styles.id}>IN-8-623132342EW</Text>
        <Text style={styles.date}>5 may 2021</Text>
      </View>
      <View style={styles.bottomSubContainer}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={{ borderRadius: 100, overflow: "hidden" }}>
            <Image
              style={styles.image}
              source={require("../assets/OrderDetailScreen/man.jpg")}
            ></Image>
          </View>
          <Text style={styles.name}>Iqbal Asim</Text>
        </View>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, constur adipicig elit, bictum dudgu in
          edit lectus.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",

    overflow: "hidden",
    borderRadius: 10,
    elevation: 5,
    marginBottom: 20,
  },
  nothing: {
    backgroundColor: "#ffffff",
    elevation: 2,
    borderRadius: 10,
    width: "100%",
    padding: 8,
    marginVertical: 8,
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
    justifyContent: "space-between",
  },
  topSubContainer: {
    backgroundColor: "#E83BA5",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
  },
  bottomSubContainer: {
    padding: 16,
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: 0,
  },
  id: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  date: {
    color: "#FFF",
  },
  name: {
    marginStart: 10,
    fontWeight: "bold",
    fontSize: 16,
  },
  description: {
    marginTop: 12,
  },
});
