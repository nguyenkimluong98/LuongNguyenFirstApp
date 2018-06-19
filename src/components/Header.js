import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
  StatusBar,
  TouchableOpacity
} from "react-native";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alertColor: null
    };
  }

  changeAlertTintColor = () => {
    if (this.state.alertColor === null) this.setState({ alertColor: "red" });
    else this.setState({ alertColor: null });
  };

  render() {
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss;
        }}
      >
        <View style={styles.container}>
          <StatusBar backgroundColor="#1c313a" barStyle="light-content" />
          <View style={{ height: 60, flexDirection: "row", backgroundColor: "#1c313a", alignItems: "center" }}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Image source={require("../assets/icons/IconBack.png")} style={[styles.headerImage, { marginLeft: 8 }]} />
            </TouchableOpacity>
            <View style={styles.header}>
              <Image source={require("../assets/icons/IconSearch.png")} style={styles.headerImage} />
              <TextInput
                style={{ flex: 1, fontSize: 16, paddingVertical: 5 }}
                placeholder="Looking for food"
                placeholderTextColor="white"
                underlineColorAndroid="transparent"
                autoCorrect={false}
                onSubmitEditing={Keyboard.dismiss}
              />
            </View>
            <TouchableOpacity onPress={this.changeAlertTintColor}>
              <Image
                source={require("../assets/icons/IconAlert.png")}
                style={[styles.headerImage, { position: "relative", right: 5, tintColor: this.state.alertColor }]}
              />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 60,
    alignItems: "center",
    justifyContent: "flex-start"
  },
  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#455a64",
    height: 40,
    borderRadius: 5,
    margin: 10
  },
  headerImage: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: "stretch",
    alignItems: "center"
  }
});
