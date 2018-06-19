import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
  StatusBar,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  FlatList
} from "react-native";

import Drawer from "react-native-drawer";

import { UserStack } from "./MenuInfo";
import { imageAssets } from "../components/ImageAssets";

import UserInfo from "./UserInfo";
import Login from "../pages/Login";

const { width } = Dimensions.get("window");

class Home extends Component {
  foodClick = food => {};

  closeControlPanel = () => {
    this._drawer.close();
  };
  openControlPanel = () => {
    this._drawer.open();
  };

  render() {
    return (
      <Drawer
        ref={ref => (this._drawer = ref)}
        content={<UserInfo {...this.props} />}
        tapToClose={true}
        openDrawerOffset={0.4}
        panCloseMask={0.4}
        closedDrawerOffset={-3}
      >
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss;
          }}
        >
          <View style={styles.container}>
            <StatusBar backgroundColor="#1c313a" barStyle="light-content" />
            <View style={{ height: 60, flexDirection: "row", backgroundColor: "#1c313a", alignItems: "center" }}>
              <TouchableOpacity onPress={this.openControlPanel}>
                <Image
                  source={require("../assets/icons/IconUserMenuGray.png")}
                  style={[styles.headerImage, { marginLeft: 8 }]}
                />
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
            </View>
            <FlatList
              data={imageAssets}
              numColumns={3}
              keyExtractor={({ index }) => index + ""}
              renderItem={({ item, index }) => (
                <TouchableOpacity onPress={() => this.foodClick(item.key)}>
                  <Image style={styles.itemsImage} source={item.link} />
                </TouchableOpacity>
              )}
            />
          </View>
        </TouchableWithoutFeedback>
      </Drawer>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#455a64",
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
  },
  itemsImage: {
    width: width / 3 - 3,
    height: width / 3 - 3,
    margin: 1,
    borderWidth: 1,
    borderColor: "white"
  }
});
