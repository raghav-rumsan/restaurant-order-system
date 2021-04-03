import { Router } from "@reach/router";
import Create from "./create/Create";
import List from "./list/List";

const Menu = () => {
  return (
    <Router>
      <Create path="add" />
      <List path="list" />
    </Router>
  );
};

export default Menu;
