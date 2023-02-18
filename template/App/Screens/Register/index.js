import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { Text } from "@ui-kitten/components";
import { ScreenContainer } from "../../Components/ScreenContainer";
export const Register = () => {
  return (
    <ScreenContainer withBoundaries>
      {" "}
      <Text>Hello Register</Text>
    </ScreenContainer>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "aliceblue",
  },
});
