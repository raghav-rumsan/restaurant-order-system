import React, { useEffect, useState } from "react";
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
import { Dashboard } from "./protected";
import { Clients } from "./superadmin";
const AppContainer = ({ token, getUser, accessToken }) => {
  // useEffect(() => {
  //   getClient();
  // }, []);
  // const [theme] = useState(null);
  useEffect(() => {
    api.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    if (accessToken) {
      // getUser();
    }
  }, [accessToken, getUser]);

  return (
    <>
      <LayoutContainer>
        <Router>
          {/* Protected */}

          <ProtectedRoute container={Dashboard} path="/" />
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
