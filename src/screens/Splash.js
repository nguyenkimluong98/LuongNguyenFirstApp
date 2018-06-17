import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import Login from "../pages/Login";

class Splash extends Component {
  render() {
    return <Login />;
  }
}

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
