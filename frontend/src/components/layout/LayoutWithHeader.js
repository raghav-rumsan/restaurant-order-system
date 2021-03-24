import { Layout, BackTop, Card } from "antd";
import SpecialDishCarousal from "../../container/public/special-dish/SpecialDishCarousal";
import HeaderLayout from "./HeaderLayout";

const { Content } = Layout;

const LayoutWithHeader = ({ children }) => {
  return (
    <Layout>
      <div style={{ marginBottom: 10 }}>
        <HeaderLayout />
        {<SpecialDishCarousal />}
      </div>
      <Content style={{ width: "90%", margin: "auto" }}>
        <Card bordered={false}>{children}</Card>
      </Content>
      <BackTop />
    </Layout>
  );
};

export default LayoutWithHeader;
