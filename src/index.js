import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import API from "./api/api";
import AppRouter, { history } from "./routers/AppRouter";
import configureStore from "./store/configureStore";

import "semantic-ui-css/semantic.min.css";
import "@trendmicro/react-buttons/dist/react-buttons.css";
import "@trendmicro/react-dropdown/dist/react-dropdown.css";
import "react-dates/lib/css/_datepicker.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "mapbox-gl/dist/mapbox-gl.css";
import "./styles/index.css";
import "normalize.css/normalize.css";
import { firebase } from "./components/firebase/firebase";
import { login, logout } from "./actions/auth";

const store = configureStore();
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById("root"));
    hasRendered = true;
  }
};

firebase.auth().onAuthStateChanged(async user => {
  if (user) {
    const token = await user.getIdToken()
    console.log(token);
    
    store.dispatch(login(user));
    console.log("log in");
    renderApp();
  } else {
    console.log("log out");

    store.dispatch(logout());
    renderApp();
  }
});
