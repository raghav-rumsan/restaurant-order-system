import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectToken, selectUser, selectClient } from "../selectors";
import Loader from "../../components/loader/Loader";

// Route only logged-in-user can access
const ProtectedRoute = ({
  client,
  token,
  user,
  container: Container,
  navigate,
  ...restProps
}) => {
  useEffect(() => {
    if (!token) {
      navigate("/login", {
        state: { from: restProps.location.pathname },
        replace: false,
      });
    }
  }, [token]);

  if (user.id) {
    return <Container {...restProps} />;
  }
  return <Loader />;
};

const mapStateToProps = createStructuredSelector({
  token: selectToken,
  user: selectUser,
  client: selectClient,
});

export default connect(mapStateToProps)(ProtectedRoute);
