import React from "react";
import {
  SafeAreaView,
  View,
  Image,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  ImageBackground,
} from "react-native";

import OrderItemListHeader from "../components/OrderItemsListHeader";
import Header1 from "../components/Header1";
import OrderItemsListFooter from "../components/OrderItemsListFooter";
import Header2 from "../components/Header2";
import Search from "../components/Search";
import Address2 from "../components/Address2";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Prominent Store",
    quantity: 2,
    description:
      "Lorem ipsum dolor sit amet, consset adipcidng elit.consset adipcidng elit. Lorem ipsum dolor sit amet, consset adipcidng elit. ",
    price: 7.99,
    image: require("../assets/OrderDetailScreen/nikeshoe.png"),
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Prominent",
    quantity: 2,
    description:
      "Lorem ipsum dolor sit amet, consset adipcidng elit.kj hhsdkjoid kjlk  Lorem ipsum dolor sit amet, consset adipcidng elit. ",

    price: 17.99,
    image: require("../assets/OrderDetailScreen/shirt.png"),
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "White Hoodie",
    quantity: 2,
    description:
      "Lorem ipsum dolor sit amet, consset adpsum dolor sit amet, consset adpsum dolor sit amet, consset adipcidng elit.",
    price: 10.99,
    image: require("../assets/OrderDetailScreen/hoodie.png"),
  },
];

const Item = ({ title, quantity, description, price, image }) => (
  <View
    style={{
      borderRadius: 30,
      overflow: "hidden",
      marginTop: 28,
      marginHorizontal: 28,
    }}
  >
    <ImageBackground
      style={styles.itemBackground}
      source={require("../assets/StoreScreen/gradient.png")}
    >
      <Image
        source={require("../assets/StoreScreen/art1.png")}
        resizeMode={"contain"}
        style={{
          resizeMode: "contain",
          position: "absolute",
          width: 180,
          height: 180,
          end: 0,
          top: -10,
        }}
      />
      <View style={styles.iconsContainer}>
        <Image
          style={styles.actionIcon}
          source={require("../assets/StoreScreen/edit.png")}
        />
        <Image
          style={[styles.actionIcon, { top: 12 }]}
          source={require("../assets/StoreScreen/bin.png")}
        />
      </View>
      <View style={styles.container}>
        <View style={styles.itemDetail}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>
            {description}
            <Text style={styles.readMore}>Read More</Text>
          </Text>
          <Address2 style={{ marginTop: 16 }} />
        </View>
      </View>
    </ImageBackground>
  </View>
);

const renderItem = ({ item }) => {
  return (
    <Item
      title={item.title}
      quantity={item.quantity}
      description={item.description}
      price={item.price}
      image={item.image}
    />
  );
};
// const renderItem = ({ item }) => <Item title={item.title} />;
export default () => {
  return (
    // <SafeAreaView>
    <View>
      <Header2
        style={{
          //  paddingTop: StatusBar.currentHeight || 200
          paddingTop: 50,
          marginHorizontal: 28,
        }}
      />
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={{ marginTop: 16 }}
        ListHeaderComponent={() => {
          return (
            <View>
              <Search />
            </View>
          );
        }}
      />
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={{ flex: 1, paddingHorizontal: 0, marginTop: 24 }}
        ListHeaderComponent={() => {
          return (
            <View>
              <Search />
            </View>
          );
        }}
        ListFooterComponent={() => {
          return (
            <OrderItemsListFooter
              style={{ marginHorizontal: 32, marginTop: 16 }}
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginVertical: 8,
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
    justifyContent: "space-between",
    paddingStart: 28,
    paddingVertical: 28,
  },
  itemBackground: {
    backgroundColor: "magenta",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  quantity: {
    color: "#4E5256",
    fontSize: 12,
  },
  description: {
    fontSize: 11,
    color: "#E9E9E9",
    marginTop: 8,
  },
  price: {
    // color: "#E83BA5",
    color: "#000000",
    fontWeight: "bold",
    fontSize: 22,
  },
  backArt: {
    position: "absolute",
    width: 350,
    height: 350,
    top: 0,
    right: 0,
  },
  priceContainer: {
    flex: 2.5,
    alignItems: "flex-end",
  },
  image: {
    width: 80,
    height: 80,
    flex: 2.5,
  },
  itemDetail: {
    marginLeft: 10,
    width: "69%",
    paddingRight: 12,
  },
  readMore: {
    color: "#020202",
    fontSize: 12,
    margin: 8,
  },
  iconsContainer: {
    position: "absolute",
    end: 16,
    top: 16,
  },
  actionIcon: {
    width: 20,
    height: 20,
  },
});
