import React from "react";
import { ThemeProvider } from "styled-components";
import Media from "./Media";
const Theme = ({ children }) => (
  // primaryColor: "#666",
  <ThemeProvider
    theme={{
      ...Media
    }}
  >
    {children}
  </ThemeProvider>
);
export default Theme;
