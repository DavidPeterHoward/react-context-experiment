import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Theme from "./Globals/Theme";
import { GlobalStyles } from "./Globals/Global";

ReactDOM.render(
  <Theme>
    <GlobalStyles />
    <App />
  </Theme>,
  document.getElementById("root")
);

serviceWorker.unregister();
