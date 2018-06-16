import { StackNavigator } from "react-navigation";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Main from "./pages/Main";
import Form from "./components/Form";

export const RootStack = StackNavigator(
  {
    Login: {
      screen: Login
    },
    SignUp: {
      screen: SignUp
    },
    Main: {
      screen: Main
    }
  },
  {
    navigationOptions: {
      header: null
    }
  }
);
