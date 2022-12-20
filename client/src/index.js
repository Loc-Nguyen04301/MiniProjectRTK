import React from "react";
import ReactDOM from "react-dom";
import App from "@/App";
import GlobalStyle from "./components/GlobalStyle";
import store from "@/redux/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.Fragment>
    <GlobalStyle>
      <Provider store={store}>
        <App />
      </Provider>
    </GlobalStyle>
  </React.Fragment>,
  document.getElementById("root")
);
