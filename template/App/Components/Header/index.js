import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Person from "../../assets/person.svg";
import Notification from "../../assets/notification.svg";
import { ThemeContext } from "../../theme/theme-context";

export function Header({
  title,
  onClickLeft,
  onClickRight,
  leftIconName,
  rightIconName,
}) {
  const { themeElements } = React.useContext(ThemeContext);
  const styles = StyleSheet.create({
    header: {
      backgroundColor: themeElements["color-background"],
    },
    content: {
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "space-between",
      paddingBottom: 10,
      paddingVertical: 20,
    },
    iconLeft: {
      alignSelf: "flex-start",
    },
    iconRight: {
      alignSelf: "flex-end",
    },
  });
  return (
    <View style={styles.header}>
      <View style={styles.content}>
        {onClickLeft ? (
          leftIconName == "person" && (
            <TouchableOpacity onPress={onClickLeft}>
              <Person style={styles.iconLeft} />
            </TouchableOpacity>
          )
        ) : (
          <View style={styles.iconLeft} />
        )}
        {onClickRight ? (
          <TouchableOpacity onPress={onClickRight}>
            {rightIconName == "notification" && (
              <Notification style={styles.iconRight} />
            )}
          </TouchableOpacity>
        ) : (
          <View style={styles.iconRight} />
        )}
      </View>
    </View>
  );
}
