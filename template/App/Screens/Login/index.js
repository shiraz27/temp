// ui
import React, { useState } from "react";
import { StyleSheet, View, Pressable } from "react-native";
import { Button, Text, Input, Icon } from "@ui-kitten/components";
// components
import { ScreenContainer } from "../../Components/ScreenContainer";
import { Formik } from "formik";
import { showToastError } from "../../Components/Toast/index.js";
// localization
import { useTranslation } from "react-i18next";
// nav
import { useNavigation } from "@react-navigation/native";
// api
import { login } from "../../../App/services/auth/index";
// redux
import { useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setUser } from "../../redux/actions/user";

export const Login = () => {
  //
  const { replace, navigate } = useNavigation();
  const dispatch = useDispatch();
  const [hidePassword, setHidePassword] = useState(true);
  const [userType, setUserType] = useState(false);
  const [loading, setLoading] = useState(false);

  // localization
  const { t } = useTranslation(["Auth"]);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "aliceblue",
    },
  });

  const handleOnSubmit = (values, actions) => {
    setLoading(true);
    login(
      values.email,
      values.password,
      !userType ? "particulier" : "prestataire"
    )
      .then((res) => {
        setLoading(false);
        if (res.success) {
          AsyncStorage.setItem("id", res?.data?.user.data.ID);
          AsyncStorage.setItem("token", res?.data?.token);
          dispatch(setUser(res?.data?.user));
          replace("Home");
        }
      })
      .catch((err) => {
        setLoading(false);
        showToastError(t("LoginScreen.error"), err.data.message);
        console.log("login error", err.data.message);
      });
  };

  function getShowPasswordIcon() {
    return (
      <Pressable
        style={styles.eye}
        onPress={() => setHidePassword(!hidePassword)}
      >
        <Icon name={hidePassword ? "eye-off" : "eye"} fill={"gray"} />
        {/* */}
      </Pressable>
    );
  }

  return (
    <ScreenContainer withBoundaries>
      <Formik
        enableReinitialize
        initialValues={{ email: "", password: "" }}
        onSubmit={handleOnSubmit}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          isValid,
          dirty,
        }) => (
          <View>
            <Text adjustsFontSizeToFit style={styles.titleStyle} category="h1">
              {t("LoginScreen.title")}
            </Text>
            <Input
              style={styles.emailInputStyle}
              status="primary"
              placeholder={t("LoginScreen.input.email.placeholder")}
              onBlur={handleBlur("email")}
              value={values.email}
              onChangeText={handleChange("email")}
            />
            <Input
              status="primary"
              accessoryRight={getShowPasswordIcon()}
              secureTextEntry={hidePassword}
              placeholder={t("LoginScreen.input.password.placeholder")}
              onBlur={handleBlur("password")}
              value={values.password}
              onChangeText={handleChange("password")}
            />
            <Button
              appearance="filled"
              style={styles.loginButton}
              status="primary"
              size="small"
              disabled={loading}
              onPress={handleSubmit}
            >
              {t("LoginScreen.cta.login")}
            </Button>
            <Text
              adjustsFontSizeToFit
              style={styles.ctaForgottenPassword}
              onPress={() => console.log("reset password")}
              category="p1"
            >
              {t("LoginScreen.cta.forgotPassword")}
            </Text>
            <Text onPress={() => navigate("Home", { screen: "HomeScreen" })}>
              Go to home
            </Text>
          </View>
        )}
      </Formik>
    </ScreenContainer>
  );
};
