import React from "react";
import { Provider } from "react-redux";
import jwtDecode from "jwt-decode";
import isBefore from "date-fns/isBefore";
import configureStore from "./redux/configureStore";
import AppContainer from "./container";
import { setToken } from "./container/actions";
import "./App.less";
import { ConfigProvider } from "antd";
import frFR from "antd/lib/locale/fr_FR";

const { store } = configureStore();

const token = localStorage.getItem("token");
if (token) {
  // todo: check for valid token
  const today = new Date();
  try {
    const tokenWithoutBearer = token.replace("Bearer ", "");
    var decoded = jwtDecode(tokenWithoutBearer);
    const { exp } = decoded;
    const expiryDate = new Date(exp * 1000);
    // assuming user time is in sync with server time
    if (isBefore(today, expiryDate)) {
      store.dispatch(setToken(token));
    } else {
      localStorage.removeItem("token");
    }
  } catch (err) {
    console.error(err);
  }
}
const App = () => {
  return (
    <Provider store={store}>
      <ConfigProvider locale={frFR}>
        <AppContainer />
      </ConfigProvider>
    </Provider>
  );
};

export default App;
