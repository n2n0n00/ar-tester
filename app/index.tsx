import React from "react";
import { WebView } from "react-native-webview";

const ARScreen = () => {
  return (
    <WebView
      source={require("../components/ar-scene.html")} // Adjust path based on your project structure
      style={{ flex: 1 }}
    />
  );
};

export default ARScreen;
