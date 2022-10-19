import { View, Text, Image, StyleSheet, ImageBackground } from "react-native";

export default () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchBarBackground}>
        <ImageBackground
          style={styles.searchBar}
          source={require("../assets/StoreScreen/gradient.png")}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingStart: 32,
              paddingEnd: 16,
              paddingVertical: 12,
            }}
          >
            <Text style={styles.searchText}>Search</Text>
            <Image
              style={styles.searchIcon}
              source={require("../assets/StoreScreen/search.png")}
            />
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { width: "100%" },
  searchBarBackground: {
    width: "50%",
    borderTopRightRadius: 100,
    borderBottomRightRadius: 100,
    overflow: "hidden",
    resizeMode: "cover",
  },
  searchText: {
    color: "#696969",
  },
  searchIcon: {
    width: 20,
    height: 20,
  },
});
