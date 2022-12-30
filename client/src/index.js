import React from "react";
import ReactDOM from "react-dom";
import App from "@/App";
import GlobalStyle from "./components/GlobalStyle";
import store from "@/redux/store";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

const persistor = persistStore(store);

ReactDOM.render(
  <React.Fragment>
    <GlobalStyle>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </GlobalStyle>
  </React.Fragment>,
  document.getElementById("root")
);
