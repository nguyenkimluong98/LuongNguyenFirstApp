import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

class UserInfo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            height: 60,
            flexDirection: "column",
            backgroundColor: "#1c313a",
            justifyContent: "center",
            alignItems: "center",
            borderRightWidth: 1,
            borderRightColor: "gray"
          }}
        >
          <Text style={styles.textLogin}>User Infomation</Text>
        </View>
        <View style={styles.content}>
          <View style={styles.contentHeader}>
            <Image source={require("../assets/icons/IconUserInfo.png")} style={styles.imageHeader} />
            <TouchableOpacity onPress={() => this.handleClickLogin("Login")}>
              <Text style={styles.textHeader}>Sign in</Text>
            </TouchableOpacity>
            <Text style={{ fontSize: 16, color: "gray" }}> / </Text>
            <TouchableOpacity onPress={() => this.handleClickLogin("SignUp")}>
              <Text style={styles.textHeader}>Sign up</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.contentBody} />
          <View style={styles.contentFooter} />
        </View>
      </View>
    );
  }

  handleClickLogin = screen => {
    global.stackNavigation.navigate(screen, {});
  };
}

export default UserInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#455a64",
    alignItems: "stretch",
    justifyContent: "space-around"
  },
  textLogin: {
    fontSize: 16,
    fontWeight: "500",
    color: "#ffffff"
  },
  content: {
    flex: 1,
    padding: 10,
    borderRightWidth: 1,
    borderRightColor: "gray"
  },
  contentHeader: {
    flexDirection: "row",
    flex: 1,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "gray",
    justifyContent: "center",
    alignItems: "center"
  },
  contentBody: {
    flex: 2,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "gray",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 2
  },
  contentFooter: {
    flex: 2,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "gray",
    justifyContent: "center",
    alignItems: "center"
  },
  imageHeader: {
    width: 70,
    height: 70,
    position: "relative",
    right: 10
  },
  textHeader: {
    fontSize: 16,
    color: "white",
    fontWeight: "500"
  }
});
