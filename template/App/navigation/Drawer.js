// ui
import React from "react";
import { Toggle, Text } from "@ui-kitten/components";
// nav
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { BottomNavigator } from "./Bottom";
import { ChangePasswordScreen } from "../Screens/ChangePassword/index.js";
import { useNavigation } from "@react-navigation/native";
// theme
import { ThemeContext } from "../../App/theme/theme-context";
// components
import AsyncStorage from "@react-native-async-storage/async-storage";
// redux
import { useDispatch } from "react-redux";
import { PURGE } from "redux-persist";

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  const [checked, setChecked] = React.useState(false);
  const { theme, toggleTheme } = React.useContext(ThemeContext);
  const dispatch = useDispatch();
  const { replace } = useNavigation();

  const onCheckedChange = (isChecked) => {
    setChecked(isChecked);
    toggleTheme();
  };

  function logout() {
    AsyncStorage.removeItem("id");
    AsyncStorage.removeItem("token");
    dispatch({ type: PURGE, key: "root", result: () => null });
    replace("Login");
  }

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <Toggle checked={checked} onChange={onCheckedChange}>
        {`toggled: ${theme}`}
      </Toggle>
      <DrawerItem label={"Déconnexion"} onPress={() => logout()}></DrawerItem>
    </DrawerContentScrollView>
  );
}

export function DrawerNavigation({}) {
  const { themeElements } = React.useContext(ThemeContext);
  const screenOptions = {
    headerStyle: {
      backgroundColor: themeElements["color-background"],
    },
    backgroundColor: "pink",
    drawerStyle: {
      backgroundColor: themeElements["color-background"],
    },
    drawerActiveTintColor: themeElements["color-primary"],
    backgroundColor: themeElements["color-background"],
  };
  return (
    <Drawer.Navigator
      initialRouteName=""
      useLegacyImplementation
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={screenOptions}
      style={{
        flex: 1,
        backgroundColor: themeElements["color-background"],
      }}
    >
      <Drawer.Screen
        name="DrawerScreen"
        component={BottomNavigator}
        options={{
          drawerItemStyle: { height: 0 },
        }}
      />
      <Drawer.Screen
        name="Changer mot de passe"
        component={ChangePasswordScreen}
        screenOptions={{ styles: { color: themeElements["color-primary"] } }}
      />
    </Drawer.Navigator>
  );
}
