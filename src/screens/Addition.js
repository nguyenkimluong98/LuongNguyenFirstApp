import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

class Addition extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Addition</Text>
      </View>
    );
  }
}

export default Addition;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
