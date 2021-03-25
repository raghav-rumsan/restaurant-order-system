import { Layout, Row, Col, Affix, Badge } from "antd";
import { appName } from "../../constants/strings";
// import Locale from "./Locale";
import ThemeHandler from "./ThemeHandler";
import { Link } from "@reach/router";
import { selectIsLoggedIn } from "../../container/selectors";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import Cart from "../../container/components/Cart";
import User from "./User";

const { Header } = Layout;

const HeaderLayout = ({ isLoggedIn }) => {
  return (
    <Affix>
      <Header>
        <Row>
          <Col lg={8} sm={12} xs={12} md={12} style={{ float: "left" }}>
            <Link to={isLoggedIn ? "/" : "/home"}>
              <h4
                style={{
                  fontWeight: 900,
                  fontSize: "1.5rem",
                }}
              >
                {appName}
              </h4>
            </Link>
          </Col>
          <Col style={{ float: "right" }} lg={16} sm={12} xs={12} md={12}>
            <Row gutter={24} style={{}}>
              <Col style={{}} span={8}>
                <ThemeHandler />{" "}
              </Col>

              <Col style={{}} span={8}>
                <Cart />
              </Col>
              <Col style={{ float: "right" }} span={8}>
                <User />
              </Col>
            </Row>
          </Col>
        </Row>
      </Header>
    </Affix>
  );
};

const mapStateToProps = createStructuredSelector({
  isLoggedIn: selectIsLoggedIn,
});

export default connect(mapStateToProps)(HeaderLayout);
