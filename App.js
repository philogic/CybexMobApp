import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default class App extends React.Component {
  componentDidMount() {
    const Cybex = require("romejs");
    (async () => {
      const cybex = new Cybex();
      const assetPair = "ETH/USDT";
      const orderbook = await cybex.fetchOrderBook(assetPair, 5);
      console.log(orderbook);
    })();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Hello World!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
