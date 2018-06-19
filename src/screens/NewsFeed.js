import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, Dimensions } from "react-native";

import Header from "../components/Header";

const { width, height } = Dimensions.get("window");

class NewsFeed extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header navigation={this.props.navigation} />
        <View style={{ height: 40, backgroundColor: "rgba(255, 255, 255, 0.3)", flexDirection: "row" }}>
          <TouchableOpacity style={[styles.popDownMenu, { flex: 4 }]}>
            <Text style={styles.titlePopDownMenu}>Toàn quốc</Text>
            <Image style={styles.iconSortDown} source={require("../assets/icons/IconSortDown.png")} />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.popDownMenu, { flex: 4 }]}>
            <Text style={styles.titlePopDownMenu}>Loại món ăn</Text>
            <Image style={styles.iconSortDown} source={require("../assets/icons/IconSortDown.png")} />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.popDownMenu, { flex: 3, borderRightWidth: 0 }]}>
            <Text style={styles.titlePopDownMenu}>Lọc món</Text>
            <Image style={styles.iconSortDown} source={require("../assets/icons/IconSortDown.png")} />
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.content}>
          <View style={styles.contentItems}>
            <View style={{ flex: 3, flexDirection: "row", borderWidth: 1, margin: 5 }}>
              <Image source={require("../assets/icons/IconUserInfo.png")} style={{ width: 100, height: 100 }} />
              <View style={{ marginLeft: 10, maxWidth: 250 }}>
                <Text>Cơm chiên hải sản</Text>
                <Text>
                  Cơm được nấu từ những hạt gạo chọn lọc kĩ càng, hòa quyện cùng hải sản tươi sống kết hợp cùng các
                  nguyên liệu vô cùng thơm ngon!
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default NewsFeed;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#455a64",
    justifyContent: "flex-start"
  },
  popDownMenu: {
    flexDirection: "row",
    borderRightWidth: 1,
    borderRightColor: "gray",
    alignItems: "center",
    justifyContent: "space-around"
  },
  titlePopDownMenu: {
    fontSize: 14,
    color: "white"
  },
  iconSortDown: { width: 18, height: 18 },
  content: {
    flex: 1,
    borderWidth: 1
  },
  contentItems: {
    flex: 1,
    backgroundColor: "red",
    borderWidth: 1,
    margin: 2,
    borderRadius: 5,
    padding: 5
  }
});
