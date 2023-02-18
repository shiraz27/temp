import React from "react";
// nav
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { DrawerNavigation } from "./Drawer";
// components
import { Register } from "../Screens/Register/index";
import { Login } from "../Screens/Login/index";
import { selectUser } from "../redux/selector/AuthSelector";
import { useSelector } from "react-redux";
import { Text } from "@ui-kitten/components";
// style
import { ThemeContext } from "../theme/theme-context";

export function AppNavigator() {
  const { Navigator, Screen } = createStackNavigator();
  const currentUser = useSelector(selectUser);
  const { themeElements } = React.useContext(ThemeContext);
  const [loading, setLoading] = React.useState(true);
  console.log("user", currentUser);

  return (
    <NavigationContainer
      onReady={async () => {
        // setLoading(false);
        setTimeout(() => setLoading(false), 3000);
        // await RNBootSplash.hide({fade: true});
      }}
    >
      {loading ? (
        <Text> loading... </Text>
      ) : (
        <Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: themeElements["color-background"],
            },
          }}
          // initialRouteName={currentUser?.ID ? "Home" : "Login"}
        >
          <Screen
            name="Login"
            component={Login}
            options={{ headerShown: true }}
          />
          <Screen
            name="Register"
            component={Register}
            options={{ headerShown: true }}
          />
          <Screen
            name="Home"
            component={DrawerNavigation}
            options={{ headerShown: true }}
          />
        </Navigator>
      )}
    </NavigationContainer>
  );
}
