import { Spin } from "antd";
import React from "react";
import { ErrorBoundary } from "../index";

const Loader = () => (
  <ErrorBoundary>
    <Spin spinning={true} />
    {/* </div> */}
    {/* </div> */}
  </ErrorBoundary>
);

export default Loader;
