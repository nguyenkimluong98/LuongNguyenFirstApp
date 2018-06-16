import React, { Component } from "react";
import { Image, StyleSheet, View, Text } from "react-native";

class Logo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require("../images/IconLogo.png")} />
        <Text style={styles.title}>Luong Nguyen's Awsome App</Text>
      </View>
    );
  }
}

export default Logo;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    width: 60,
    height: 100
  },
  title: {
    marginVertical: 5,
    fontSize: 18,
    color: "rgba(255,255,255,0.7)"
  }
});
