import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./components/App";
import "./index.css";
// import store from "./redux/configureStore";
import { Provider } from "react-redux";
import { store } from "./redux-tlk/configureStoreReduxTlk";

const rootElement = document.getElementById("app");
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
