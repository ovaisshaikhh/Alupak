import React from "react";
// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: "#1a365d", //blue
    800: "#153e75",
    700: "#2a69ac",
  },
};
const theme = extendTheme({ colors });

// 3. Pass the `theme` prop to the `ChakraProvider`
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
