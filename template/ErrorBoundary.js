import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import RNRestart from "react-native-restart";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true });
  }

  handleSubmit = () => {
    RNRestart.Restart();
  };

  render() {
    if (this.state.hasError) {
      return (
        <View style={styles.container}>
          <Text style={{ fontSize: 32, fontFamily: "System" }}>
            Oups, une erreur est survenue!
          </Text>
          <TouchableOpacity onPress={this.handleSubmit} style={styles.btn}>
            <Text
              style={{
                fontSize: 22,
                color: "black",
                fontFamily: "System",
                fontWeight: "bold",
                width: "100%",
              }}
            >
              Redémarrer l'application
            </Text>
          </TouchableOpacity>
        </View>
      );
    }
    return this.props.children;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "alicebue",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: "15%",
  },
  btn: {
    backgroundColor: "pink",
    width: "100%",
    padding: 15,
    borderRadius: 15,
    marginTop: 5,
  },
});

export default ErrorBoundary;
