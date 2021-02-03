import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectToken,
  selectUser,
  selectClient,
  selectAccessToken,
} from "../selectors";
import Loader from "../../components/loader/Loader";

// Route only logged-in-user can access
const SuperAdminRoute = ({
  client,
  token,
  user,
  accessToken,
  container: Container,
  navigate,
  ...restProps
}) => {
  useEffect(() => {
    if (!accessToken) {
      navigate("/login", {
        state: { from: restProps.location.pathname },
        replace: false,
      });
    }
  }, [accessToken]);

  if (user.id) {
    if (user.role !== "super-admin") {
      return <h1>You do not have permission to view this.</h1>;
    }
    return <Container {...restProps} />;
  }
  return <Loader />;
};

const mapStateToProps = createStructuredSelector({
  token: selectToken,
  user: selectUser,
  client: selectClient,
  accessToken: selectAccessToken,
});

export default connect(mapStateToProps)(SuperAdminRoute);
