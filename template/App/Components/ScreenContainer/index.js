// Packages
import React from "react";

// UI lib components
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { ThemeContext } from "../../theme/theme-context";

export function ScreenContainer({ children, withBoundaries }) {
  const { themeElements } = React.useContext(ThemeContext);
  const styles = StyleSheet.create({
    containerWithBoundaries: {
      paddingHorizontal: 20,
      flex: 1,
      backgroundColor: themeElements["color-background"],
    },
    container: {
      flex: 1,
      backgroundColor: themeElements["color-background"],
    },
  });

  return withBoundaries ? (
    <View style={styles.containerWithBoundaries}>{children}</View>
  ) : (
    <View style={styles.container}>{children}</View>
  );
}
