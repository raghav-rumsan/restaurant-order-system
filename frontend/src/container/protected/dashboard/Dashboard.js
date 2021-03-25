import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectUser } from "../../selectors";

const Dashboard = ({ user }) => {
  return <div>Dashboard for {user.name}'s Restaurant </div>;
};

const mapStateToProps = createStructuredSelector({
  user: selectUser,
});

export default connect(mapStateToProps)(Dashboard);
