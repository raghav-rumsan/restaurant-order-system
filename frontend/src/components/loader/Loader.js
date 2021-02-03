import React from "react";
import { ErrorBoundary } from "../index";

const Loader = () => (
  <ErrorBoundary>
    {/* <div className="loader"> */}
    {/* <BarChartOutlined className="loader" /> */}
    <div
      style={{
        textAlign: "center",
        borderRadius: 20,
      }}
    >
      <p
        style={{
          fontSize: 50,
          fontWeight: "bold",
          color: "#32a852",
        }}
      >
        Loading...
      </p>
    </div>
    {/* </div> */}
    {/* </div> */}
  </ErrorBoundary>
);

export default Loader;
