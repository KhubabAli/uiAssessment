import React from "react";
import {
  SafeAreaView,
  View,
  Image,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from "react-native";

import OrderItemListHeader from "../components/OrderItemsListHeader";
import Header1 from "../components/Header1";
import OrderItemsListFooter from "../components/OrderItemsListFooter";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Nike Shoes",
    quantity: 2,
    description: "Lorem ipsum dolor sit amet, consset adipcidng elit.",
    price: 7.99,
    image: require("../assets/OrderDetailScreen/nikeshoe.png"),
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Blue Shirt",
    quantity: 2,
    description: "Lorem ipsum dolor sit amet, consset adipcidng elit.",
    price: 17.99,
    image: require("../assets/OrderDetailScreen/shirt.png"),
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "White Hoodie",
    quantity: 2,
    description: "Lorem ipsum dolor sit amet, consset adipcidng elit.",
    price: 10.99,
    image: require("../assets/OrderDetailScreen/hoodie.png"),
  },
];

const Item = ({ title, quantity, description, price, image }) => (
  <View style={{ marginHorizontal: 24 }}>
    <View style={styles.item}>
      <Image style={styles.image} source={image} />
      <View style={styles.itemDetail}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.quantity}>Quantity {quantity}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>$ {price}</Text>
      </View>
    </View>
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
    <SafeAreaView>
      <Image
        source={require("../assets/OrderDetailScreen/back-art.png")}
        style={styles.backArt}
      />
      <Header1
        style={{
          //  paddingTop: StatusBar.currentHeight || 200
          paddingTop: 80,
        }}
      />
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={{ marginTop: 24 }}
        ListHeaderComponent={() => {
          return (
            <View style={{ marginHorizontal: 24 }}>
              <OrderItemListHeader />
            </View>
          );
        }}
        ListFooterComponent={() => {
          return (
            <OrderItemsListFooter
              style={{ marginHorizontal: 24, marginTop: 16 }}
            />
          );
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  item: {
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
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  quantity: {
    color: "#4E5256",
    fontSize: 12,
  },
  description: {
    fontSize: 11,
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
    flex: 5,
    paddingRight: 12,
  },
});
