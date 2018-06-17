import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

class NewsFeed extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>NewsFeed</Text>
      </View>
    );
  }
}

export default NewsFeed;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
