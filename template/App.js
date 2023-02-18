import "react-native-gesture-handler"; // must be top most import
// ui
import React, { useState } from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import { ThemeContext } from "./App/theme/theme-context";
import appTheme from "./App/theme";
import mapping from "./App/theme/mapping.json";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
// nav
import { AppNavigator } from "./App/navigation";
// localization
import { I18nextProvider } from "react-i18next";
import i18n from "./App/localization/i18n";
// redux
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import store from "./App/redux/store";
// components
import Toast, { BaseToast, ErrorToast } from "react-native-toast-message";
import ErrorBoundary from "./ErrorBoundary";

// toast config
const toastConfig = {
  success: (props) => (
    <BaseToast {...props} text1NumberOfLines={2} text2NumberOfLines={4} />
  ),
  error: (props) => (
    <ErrorToast {...props} text1NumberOfLines={2} text2NumberOfLines={4} />
  ),
};

function getRootRenderingTarget() {
  return <AppNavigator />;
}

const App = () => {
  const [theme, setTheme] = useState("light");
  const persistor = persistStore(store);
  function toggleTheme(value) {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
  }

  return (
    <ErrorBoundary>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: theme === "light" ? "white" : "#20232a",
        }}
      >
        <StatusBar />
        <IconRegistry icons={EvaIconsPack} />
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <I18nextProvider i18n={i18n}>
              <ThemeContext.Provider
                value={{
                  themeElements: appTheme[theme],
                  theme,
                  toggleTheme,
                }}
              >
                <ApplicationProvider
                  {...eva}
                  theme={{ ...eva[theme], ...appTheme[theme] }}
                  customMapping={mapping}
                >
                  {getRootRenderingTarget()}
                  <Toast config={toastConfig} />
                </ApplicationProvider>
              </ThemeContext.Provider>
            </I18nextProvider>
          </PersistGate>
        </Provider>
      </SafeAreaView>
    </ErrorBoundary>
  );
};

export default App;
