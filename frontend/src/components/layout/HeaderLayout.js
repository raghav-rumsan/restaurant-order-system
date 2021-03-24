import { Layout, Row, Col, Affix, Badge } from "antd";
import { appName } from "../../constants/strings";
// import Locale from "./Locale";
import ThemeHandler from "./ThemeHandler";
import { Link } from "@reach/router";
import { selectIsLoggedIn } from "../../container/selectors";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { ShoppingCartOutlined } from "@ant-design/icons";
import Cart from "../../container/components/Cart";

const { Header } = Layout;

const HeaderLayout = ({ isLoggedIn }) => {
  return (
    <Affix>
      <Header>
        <Row>
          <Col span={6} style={{ float: "left" }}>
            <Link to={isLoggedIn ? "/" : "/home"}>
              <h4
                style={{ fontFamily: "Raleway", fontWeight: 900, fontSize: 24 }}
              >
                {appName}
              </h4>
            </Link>
          </Col>
          <Col
            style={{ float: "right", alignContent: "end", alignItems: "end" }}
            span={18}
          >
            <Col style={{ float: "right" }}>
              <Col style={{ float: "left" }} span={12}>
                <ThemeHandler />{" "}
              </Col>

              {/* <Col style={{ float: "right" }} span={12}>
                <Locale />
              </Col> */}
              <Col style={{ float: "right" }} span={12}>
                <Cart />
              </Col>
            </Col>
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
