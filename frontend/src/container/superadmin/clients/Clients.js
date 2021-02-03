import { Router } from "@reach/router";
import Create from "./create/Create";

const Clients = () => {
  return (
    <Router>
      <Create path="create" />
    </Router>
  );
};

export default Clients;
