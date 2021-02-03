import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Dropdown, Menu } from "antd";
import { Link } from "@reach/router";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";
import { selectUser } from "../selectors";

const UserDetail = ({ user }) => {
  const popoverContent = (
    <Menu>
      <Menu.Item type="ghost">
        <Link to="/profile">
          <span>
            <UserOutlined />
          </span>
          Profile
        </Link>
      </Menu.Item>
      {/* <Divider /> */}
      <Menu.Item style={{ color: "red" }} type="dashed">
        {/* <Link to="/profile"> */}
        <span>
          <LogoutOutlined />
        </span>
        Logout
        {/* </Link> */}
      </Menu.Item>
    </Menu>
  );
  return (
    <Dropdown.Button
      overlay={popoverContent}
      placement="bottomCenter"
      icon={<UserOutlined />}
    >
      {user.name}
    </Dropdown.Button>
  );
};

const mapStateToProps = createStructuredSelector({
  user: selectUser,
});

export default connect(mapStateToProps)(UserDetail);
