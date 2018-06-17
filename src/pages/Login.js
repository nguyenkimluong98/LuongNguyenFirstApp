import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity, StatusBar, TouchableWithoutFeedback, Keyboard } from "react-native";

import Logo from "../components/Logo";
import Form from "../components/Form";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isKeyboardShowed: false
    };
  }

  setShowKeyboard = isShowed => {
    this.setState({ isKeyboardShowed: isShowed });
  };

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <StatusBar backgroundColor="#1c313a" barStyle="light-content" />
          <Logo />
          <Form type="Login" navigation={this.props.navigation} setShowKeyboard={this.setShowKeyboard.bind(this)} />
          <View style={styles.signupTextContent}>
            <Text style={styles.notifyText}>Don't have an account yet? </Text>
            <TouchableOpacity onPress={() => this.props.navigation.navigate("SignUp")}>
              <Text style={styles.signupText}> Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#455a64"
  },
  signupTextContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
    marginVertical: 16,
    flexDirection: "row"
  },
  notifyText: {
    color: "rgba(255,255,255,0.7)",
    fontSize: 16
  },
  signupText: {
    fontSize: 18,
    color: "greenyellow",
    fontWeight: "500"
  }
});
