import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from "react-native";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  loginSuccess() {
    const { email, password } = this.state;
    if (email == "1" && password == "1") this.props.navigation.navigate("Main");
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.inputBox}
          onChangeText={text => this.setState({ email: text })}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Email"
          placeholderTextColor="#ffffff"
          onSubmitEditing={() => this.refs.password.focus()}
        />
        <TextInput
          style={styles.inputBox}
          onChangeText={text => this.setState({ password: text })}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Password"
          secureTextEntry
          placeholderTextColor="#ffffff"
          ref="password"
        />
        <TouchableOpacity style={styles.buttonLogin} onPress={this.loginSuccess.bind(this)}>
          <Text style={styles.textLogin}>{this.props.type}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Form;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  inputBox: {
    width: 300,
    backgroundColor: "rgba(255,255,255,0.3)",
    paddingHorizontal: 16,
    borderRadius: 25,
    fontSize: 16,
    color: "#ffffff",
    marginVertical: 10,
    paddingVertical: 12
  },
  textLogin: {
    fontSize: 16,
    fontWeight: "500",
    color: "#ffffff"
  },
  buttonLogin: {
    width: 300,
    backgroundColor: "rgba(22,17,77,0.3)",
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 12,
    alignItems: "center",
    justifyContent: "center"
  }
});
