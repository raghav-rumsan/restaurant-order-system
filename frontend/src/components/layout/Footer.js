import { Layout } from "antd";
import moment from "moment";
import { appName } from "../../constants/strings";

const { Footer: AntFooter } = Layout;

const Footer = () => {
  return (
    <AntFooter>
      <h1 style={{ textAlign: "center" }}>
        {moment().format("YYYY")} {appName}
      </h1>
    </AntFooter>
  );
};

export default Footer;
