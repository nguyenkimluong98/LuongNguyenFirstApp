import { StackNavigator } from "react-navigation";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Main from "./pages/Main";
import UserInfo from "./screens/UserInfo";
import Home from "./screens/Home";

export const RootStack = StackNavigator(
  {
    Main: {
      screen: Main
    },
    Login: {
      screen: Login
    },
    SignUp: {
      screen: SignUp
    }
  },
  {
    initialRouteName: "Main"
  },
  {
    navigationOptions: {
      header: null
    }
  }
);
