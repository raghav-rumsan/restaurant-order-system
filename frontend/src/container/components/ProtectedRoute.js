import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectToken, selectUser, selectClient } from "../selectors";
import { modules } from "../modules";
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
        replace: false
      });
    }
  }, [token]);

  const notPermitted = client.unauthorized.map(
    (perm, index) => modules[perm].route
  );

  if (notPermitted.includes(restProps.location.pathname)) {
    navigate("/", {
      state: { from: restProps.location.pathname },
      replace: false
    });
  }
  if (user.id) {
    return <Container unauthorized={notPermitted} {...restProps} />;
  }
  return <Loader />;
};

const mapStateToProps = createStructuredSelector({
  token: selectToken,
  user: selectUser,
  client: selectClient
});

export default connect(mapStateToProps)(ProtectedRoute);
