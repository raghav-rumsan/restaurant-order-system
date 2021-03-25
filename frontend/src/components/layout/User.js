import { navigate } from "@reach/router";
import { Button, Menu, Dropdown } from "antd";
import { UserOutlined, DownOutlined, LoginOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectIsLoggedIn, selectUser } from "../../container/selectors";
import { logoutUser } from "../../container/actions";

const User = ({ isLoggedIn, user, logoutUser }) => {
  const menu = (
    <Menu>
      <Menu.Item key="1" icon={<UserOutlined />}>
        1st menu item
      </Menu.Item>
      <Menu.Item key="2" icon={<UserOutlined />}>
        2nd menu item
      </Menu.Item>
      <Menu.Item
        onClick={logoutUser}
        key="3"
        style={{ color: "red" }}
        icon={<LoginOutlined />}
      >
        <span>Logout</span>
      </Menu.Item>
    </Menu>
  );
  if (isLoggedIn) {
    return (
      <Dropdown overlay={menu}>
        <Button>
          {user.name} <DownOutlined />
        </Button>
      </Dropdown>
    );
  }
  return <Button onClick={() => navigate("/login")}>Login</Button>;
};

const mapStateToProps = createStructuredSelector({
  isLoggedIn: selectIsLoggedIn,
  user: selectUser,
});

const mapDispatchToProps = { logoutUser };

export default connect(mapStateToProps, mapDispatchToProps)(User);
