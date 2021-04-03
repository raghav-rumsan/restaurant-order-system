import React, { useEffect } from "react";
import { api } from "../api";
import { Router } from "@reach/router";
import { createStructuredSelector } from "reselect";
import { getUser } from "./actions";
import { connect } from "react-redux";
import {
  PublicRoute,
  PageNotFound,
  GuestRoute,
  ProtectedRoute,
  SuperAdminRoute,
} from "./components";
import { Login } from "./guest";
import LayoutContainer from "../components/layout/LayoutContainer";
import { selectAccessToken, selectToken } from "./selectors";
import { Dashboard, Menu } from "./protected";
import { Clients } from "./superadmin";
import { Home, OrderConfirm } from "./public";
const AppContainer = ({ token, getUser, accessToken }) => {
  // useEffect(() => {
  //   getClient();
  // }, []);
  // const [theme] = useState(null);
  useEffect(() => {
    api.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    // if (accessToken) {
    //   // getUser();
    // }
  }, [accessToken, getUser]);

  return (
    <>
      <LayoutContainer>
        <Router>
          {/* Protected */}

          <ProtectedRoute container={Dashboard} path="/" />
          <ProtectedRoute container={Menu} path="/menu/*" />
          <PublicRoute container={Home} path="/home" />
          <PublicRoute container={OrderConfirm} path="/confirm-order/:id" />
          <GuestRoute container={Login} path="/login" />
          {/* SuperAdmin */}
          <SuperAdminRoute container={Clients} path="clients/*" />

          <PublicRoute container={PageNotFound} path="*" />
        </Router>
      </LayoutContainer>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  token: selectToken,
  accessToken: selectAccessToken,
});

const mapDispatchToProps = {
  getUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
