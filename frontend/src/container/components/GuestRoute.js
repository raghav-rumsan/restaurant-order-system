import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectAccessToken, selectToken } from "../selectors";

// Route logged-in-user cannot access
const GuestRoute = ({
  token,
  accessToken,
  container: Container,
  ...restProps
}) => {
  useEffect(() => {
    if (accessToken) {
      if (restProps.location.state && restProps.location.state.from) {
        restProps.navigate(restProps.location.state.from, { replace: true });
      } else {
        restProps.navigate("/", { replace: true });
      }
    }
  }, [accessToken]);
  return <Container {...restProps} />;
};

const mapStateToProps = createStructuredSelector({
  token: selectToken,
  accessToken: selectAccessToken,
});

export default connect(mapStateToProps)(GuestRoute);
