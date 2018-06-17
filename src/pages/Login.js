import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
  Image
} from "react-native";

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
          <View style={{ flex: 5, marginTop: 60 }}>
            <StatusBar backgroundColor="#1c313a" barStyle="light-content" />
            <Logo title="Login to see incredble things" />
            <Form type="Login" navigation={this.props.navigation} setShowKeyboard={this.setShowKeyboard.bind(this)} />
            <TouchableOpacity
              style={[styles.buttonLogin, { backgroundColor: "rgba(255, 255,255, 0.1)" }]}
              onPress={null}
            >
              <Text style={[styles.textLogin, { fontWeight: "normal", color: "black", fontStyle: "italic" }]}>
                Forgot password?
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.moreTypeLogin}>
            <View style={styles.titileMoreLogin}>
              <View style={{ borderBottomColor: "gray", borderBottomWidth: 1, flex: 1 }} />
              <Text style={[styles.textLogin, { marginHorizontal: 5, fontWeight: "normal", color: "white" }]}>
                Option
              </Text>
              <View style={{ borderBottomColor: "gray", borderBottomWidth: 1, flex: 1 }} />
            </View>
            <View style={styles.rowButtonMoreLogin}>
              <TouchableOpacity style={[styles.buttonMoreLogin, { right: 20, backgroundColor: "#576ea5" }]}>
                <Text style={[styles.textLogin, { marginHorizontal: 5, fontWeight: "normal", color: "white" }]}>
                  Facebook
                </Text>
                <Image source={require("../assets/images/IconFacebook.png")} style={{ width: 25, height: 25 }} />
              </TouchableOpacity>
              <View style={{ borderColor: "gray", borderWidth: 0.5 }} />
              <TouchableOpacity style={[styles.buttonMoreLogin, { left: 20, backgroundColor: "#e74c3c" }]}>
                <Text style={[styles.textLogin, { marginHorizontal: 5, fontWeight: "normal", color: "white" }]}>
                  Google
                </Text>
                <Image source={require("../assets/images/IconGoogle.png")} style={{ width: 25, height: 25 }} />
              </TouchableOpacity>
            </View>
          </View>
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
  },
  buttonLogin: {
    width: 300,
    backgroundColor: "rgba(22,17,77,0.3)",
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 12,
    alignItems: "center",
    justifyContent: "center"
  },
  textLogin: {
    fontSize: 16,
    fontWeight: "500",
    color: "#ffffff"
  },
  titileMoreLogin: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 50
  },
  moreTypeLogin: {
    flex: 1,
    alignItems: "center",
    position: "relative",
    top: 50
  },
  rowButtonMoreLogin: {
    flexDirection: "row",
    justifyContent: "space-around",
    position: "relative",
    top: 10
  },
  buttonMoreLogin: {
    flexDirection: "row",
    width: 120,
    height: 35,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    position: "relative"
  }
});
