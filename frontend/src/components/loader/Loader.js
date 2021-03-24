import { ErrorBoundary } from "../index";
import { Spin } from "antd";
// import LocaleContext from "../../LocaleContext";
// import { useContext } from "react";

const Loader = () => {
  // const localeContext = useContext(LocaleContext).Loader;
  return (
    <ErrorBoundary>
      <div style={{ textAlign: "center" }}>
        <Spin tip={<h1>Loading</h1>} size="large" />
      </div>
    </ErrorBoundary>
  );
};
export default Loader;
