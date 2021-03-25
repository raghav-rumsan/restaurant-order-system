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
const ProtectedRoute = ({
  client,
  accessToken,
  user,
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
    return <Container {...restProps} />;
  }
  return <Loader />;
};

const mapStateToProps = createStructuredSelector({
  accessToken: selectAccessToken,
  user: selectUser,
  client: selectClient,
});

export default connect(mapStateToProps)(ProtectedRoute);
