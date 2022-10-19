import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

import OrderDetailScreen from "./screens/OrderDetailScreen";
import MyStoresScreen from "./screens/MyStoresScreen";
import { useState } from "react";

export default function App() {
  const [orderScreen, setOrderScreen] = useState(true);
  // return <OrderDetailScreen />;
  console.log(orderScreen);

  return (
    // <SafeAreaView>
    <View style={styles.container}>
      {orderScreen ? <OrderDetailScreen /> : <MyStoresScreen />}

      <View
        style={{
          position: "absolute",
          bottom: 0,
          flexDirection: "row",
          start: 0,
          end: 0,
          justifyContent: "center",
          borderTopLeftRadius: 100,
          borderTopRightRadius: 100,
          overflow: "hidden",
        }}
      >
        <TouchableOpacity onPress={() => setOrderScreen(true)}>
          <View
            style={
              orderScreen
                ? { backgroundColor: "magenta", padding: 16 }
                : { backgroundColor: "gray", padding: 16 }
            }
          >
            <Text>Order Detail</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setOrderScreen(false)}>
          <View
            style={
              !orderScreen
                ? { backgroundColor: "magenta", padding: 16 }
                : { backgroundColor: "gray", padding: 16 }
            }
          >
            <Text>My Stores</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 0,
    // alignItems: "center",
    // justifyContent: "center",
  },
});
