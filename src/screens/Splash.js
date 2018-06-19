import React, { Component } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";

import App from "../../App";
import Logo from "../components/Logo";
import Login from "../pages/Login";

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      changeScreen: true
    };
    //setInterval(() => this.setState({ changeScreen: true }), 3000);
  }

  render() {
    const comps = this.state.changeScreen ? (
      <App />
    ) : (
      <View style={styles.container}>
        <StatusBar backgroundColor="#1c313a" barStyle="light-content" />
        <Logo title="Luong Nguyen's Awsome App" />
      </View>
    );

    return comps;
  }
}

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c313a",
    alignItems: "center",
    justifyContent: "center"
  }
});
