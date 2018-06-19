import React, { Component } from "react";
import { Image } from "react-native";

import { createBottomTabNavigator } from "react-navigation";

import Home from "../screens/Home";
import Addition from "../screens/Addition";
import Notification from "../screens/Notification";
import NewsFeed from "../screens/NewsFeed";
import MyFoods from "../screens/MyFoods";

class Main extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    global.stackNavigation = this.props.navigation;
    return <TabbarBottom />;
  }
}

export default Main;

const TabbarBottom = createBottomTabNavigator(
  {
    Home: {
      screen: Home
    },
    NewsFeed: {
      screen: NewsFeed
    },
    Notification: {
      screen: Notification
    },
    MyFoods: {
      screen: MyFoods
    },
    Addition: {
      screen: Addition
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      // tabBarLabel: ({ focused }) => {
      //   return <Text />;
      // },
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Home") {
          iconName = focused
            ? require("../assets/icons/IconHomeBlue.png")
            : require("../assets/icons/IconHomeGray.png");
        } else if (routeName === "NewsFeed") {
          iconName = focused
            ? require("../assets/icons/IconNewsBlue.png")
            : require("../assets/icons/IconNewsGray.png");
        } else if (routeName === "Notification") {
          iconName = focused
            ? require("../assets/icons/IconNotificationBlue.png")
            : require("../assets/icons/IconNotificationGray.png");
        } else if (routeName === "MyFoods") {
          iconName = focused
            ? require("../assets/icons/IconMyFoodsBlue.png")
            : require("../assets/icons/IconMyFoodsGray.png");
        } else if (routeName === "Addition") {
          iconName = focused
            ? require("../assets/icons/IconAdditionBlue.png")
            : require("../assets/icons/IconAdditionGray.png");
        }
        return <Image source={iconName} color={tintColor} style={{ height: 25, width: 25 }} />;
      }
    }),
    tabBarOptions: {
      style: {
        backgroundColor: "#1c313a"
      }
    },
    //tabBarComponent: TabBarBottom,
    tabBarPosition: "bottom",
    animationEnabled: true,
    swipeEnabled: true
  }
);
