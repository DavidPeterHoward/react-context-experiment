import React from "react";
import { ThemeProvider } from "styled-components";
import Media from "./Media";
const Theme = ({ children }) => (
  <ThemeProvider
    theme={{
      ...Media
    }}
  >
    {children}
  </ThemeProvider>
);
export default Theme;
