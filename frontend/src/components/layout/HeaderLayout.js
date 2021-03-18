import { Layout, Row, Col } from "antd";
import { appName } from "../../constants/strings";
import ThemeHandler from "./ThemeHandler";

const { Header } = Layout;

const HeaderLayout = () => {
  return (
    <Header>
      <Row>
        <Col span={12}>
          <h4>{appName}</h4>
        </Col>
        <Col style={{ float: "right" }} span={12}>
          <Col style={{ float: "left" }} span={12}>
            <p>R</p>
          </Col>
          <Col style={{ float: "right" }} span={12}>
            <ThemeHandler />{" "}
          </Col>
        </Col>
      </Row>
    </Header>
  );
};

export default HeaderLayout;
