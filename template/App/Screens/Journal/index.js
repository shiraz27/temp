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
export const JournalScreen = ({ navigation }) => {
  return (
    <ScreenContainer withBoundaries>
      <Header
        title="Home"
        leftIconName="person"
        rightIconName="notification"
        onClickRight={() => console.log("right")}
        onClickLeft={() => navigation.dispatch(DrawerActions.toggleDrawer())}
      />
      <Text>Hello Journal</Text>
    </ScreenContainer>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "aliceblue",
  },
});
