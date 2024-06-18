import React from "react";
import { View, StyleSheet } from "react-native";
import ARScreen from "./index";

const App = () => {
  return (
    <View style={styles.container}>
      <ARScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
});

export default App;
