import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { Text } from "@ui-kitten/components";
import { DrawerActions } from "@react-navigation/native";
import { Header } from "../../Components/Header";
import { ScreenContainer } from "../../Components/ScreenContainer";
export const ChangePasswordScreen = ({ navigation }) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "aliceblue",
    },
  });
  return (
    <ScreenContainer withBoundaries>
      {/* <Header
        title="Home"
        leftIconName="person"
        rightIconName="notification"
        onClickRight={() => console.log("right")}
        onClickLeft={() => navigation.dispatch(DrawerActions.toggleDrawer())}
      /> */}
      <Text>Hello change password</Text>
    </ScreenContainer>
  );
};
