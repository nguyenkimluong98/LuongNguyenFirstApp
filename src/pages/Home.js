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
  TouchableOpacity
} from "react-native";

const { width } = Dimensions.get("window");

class Home extends Component {
  render() {
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss;
        }}
      >
        <View style={styles.container}>
          <StatusBar backgroundColor="#1c313a" barStyle="light-content" />
          <View style={{ height: 60, flexDirection: "row", backgroundColor: "#1c313a" }}>
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
          <ScrollView>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity>
                <Image source={require("../assets/images/cacmoncom.jpg")} style={styles.itemsImage} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={require("../assets/images/cacmoncanh.jpg")} style={styles.itemsImage} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={require("../assets/images/monnuong.jpg")} style={styles.itemsImage} />
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity>
                <Image source={require("../assets/images/ngucoc.jpg")} style={styles.itemsImage} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={require("../assets/images/monchay.jpg")} style={styles.itemsImage} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={require("../assets/images/douong.jpg")} style={styles.itemsImage} />
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity>
                <Image source={require("../assets/images/haisan.jpg")} style={styles.itemsImage} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={require("../assets/images/cacmonthit.jpg")} style={styles.itemsImage} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={require("../assets/images/cacmonsalad.jpg")} style={styles.itemsImage} />
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity>
                <Image source={require("../assets/images/raucuqua.jpg")} style={styles.itemsImage} />
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </TouchableWithoutFeedback>
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
    width: width / 3 - 6,
    height: width / 3 - 6,
    margin: 2,
    borderWidth: 1,
    borderColor: "white"
  }
});
