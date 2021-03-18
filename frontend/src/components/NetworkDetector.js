import { Alert } from "antd";
import { Detector } from "react-detect-offline";

const NetworkDetector = () => {
  return (
    <div>
      <Detector
        render={({ online }) => {
          if (!online) {
            return (
              <Alert message="You are currently offline!!" type="warning" />
            );
          }
          return [];
        }}
      />
    </div>
  );
};

export default NetworkDetector;
