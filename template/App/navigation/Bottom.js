// ui
import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "@ui-kitten/components";
// assets
import HomeIcon from "../assets/home.svg";
import HomeIconActive from "../assets/homeactive.svg";
import AgendaIconActive from "../assets/agendaactive.svg";
import AgendaIcon from "../assets/agenda.svg";
import AssignmentIcon from "../assets/assignment.svg";
import AssignmentIconActive from "../assets/assignmentactive.svg";
import SearchIcon from "../assets/search.svg";
import SearchIconActive from "../assets/searchactive.svg";
// nav
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// components
import { HomeScreen } from "../Screens/Home/index";
import { AgendaScreen } from "../Screens/Agenda/index";
import { JournalScreen } from "../Screens/Journal/index";
import { SearchScreen } from "../Screens/Search/index";
import { ThemeContext } from "../theme/theme-context";

const Tab = createBottomTabNavigator();

export function BottomNavigator() {
  const { themeElements } = React.useContext(ThemeContext);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "aliceblue",
      height: "100%",
      width: "100%",
    },
  });
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: themeElements["color-background"],
        },
        headerShown: false,
        tabBarStyle: {
          height: 90,
          paddingHorizontal: 5,
          paddingTop: 0,
          backgroundColor: themeElements["color-background"],
        },
        tabBarLabelStyle: {
          flex: 1,
        },
      }}
      barStyle={{ backgroundColor: "pink" }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: "Acceuil",
          tabBarIcon: ({ color, size, focused }) =>
            focused ? <HomeIconActive width={24} /> : <HomeIcon width={24} />,
          tabBarActiveTintColor: themeElements["color-primary"],
        }}
      />
      <Tab.Screen
        name="AgendaScreen"
        component={AgendaScreen}
        options={{
          tabBarLabel: "Agenda",
          tabBarIcon: ({ color, size, focused }) =>
            focused ? (
              <AgendaIconActive width={24} />
            ) : (
              <AgendaIcon width={24} />
            ),
          tabBarActiveTintColor: themeElements["color-primary"],
        }}
      />
      <Tab.Screen
        name="JournalScreen"
        component={JournalScreen}
        options={{
          tabBarLabel: "Journal de bord",
          tabBarIcon: ({ color, size, focused }) =>
            focused ? (
              <AssignmentIconActive width={24} />
            ) : (
              <AssignmentIcon width={24} />
            ),
          tabBarActiveTintColor: themeElements["color-primary"],
        }}
      />
      <Tab.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          tabBarLabel: "Recherche",
          tabBarIcon: ({ color, size, focused }) =>
            focused ? (
              <SearchIconActive width={24} />
            ) : (
              <SearchIcon width={24} />
            ),
          tabBarActiveTintColor: themeElements["color-primary"],
        }}
      />
    </Tab.Navigator>
  );
}
