import React from "react";
import ReactDOM from "react-dom";
import App from "@/App";
import GlobalStyle from "./components/GlobalStyle";

ReactDOM.render(
  <React.Fragment>
    <GlobalStyle>
      <App />
    </GlobalStyle>
  </React.Fragment>,
  document.getElementById("root")
);
