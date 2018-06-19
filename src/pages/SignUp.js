import React, { Component } from "react";
import { Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";

import Logo from "../components/Logo";
import Form from "../components/Form";

class SignUp extends Component {
  static navigationOptions = {
    headerStyle: { backgroundColor: "#455a64" }
  };
  render() {
    return (
      <View style={styles.container}>
        <Logo title="Sign up to create an account" />
        <Form type="Signup" />
        <View style={styles.signinTextContent}>
          <Text style={styles.notifyText}>Already have an account? </Text>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Login")}>
            <Text style={styles.signinText}> Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#455a64"
  },
  signinTextContent: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "flex-end",
    marginVertical: 16,
    flexDirection: "row"
  },
  notifyText: {
    color: "rgba(255,255,255,0.7)",
    fontSize: 16
  },
  signinText: {
    fontSize: 18,
    color: "greenyellow",
    fontWeight: "500"
  }
});
