import { createStackNavigator } from "react-navigation";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import UserInfo from "./UserInfo";

export const UserStack = createStackNavigator(
  {
    UserInfo: {
      screen: UserInfo
    },
    Login: {
      screen: Login
    },
    SignUp: {
      screen: SignUp
    }
  },
  {
    initialRouteName: "UserInfo"
  },
  {
    navigationOptions: {
      header: null
    }
  }
);
