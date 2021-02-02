import React from "react";
import { ErrorBoundary } from "../index";
import "./loader.css";
import video from "./2.mp4";

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
      <video playsInline autoPlay loop width="500" height="500">
        <source src={video} type="video/mp4" />
      </video>
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
