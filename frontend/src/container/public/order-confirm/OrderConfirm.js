import { Steps, Button, message } from "antd";
import { useState } from "react";
import FirstStep from "./first-step/FirstStep";
import SecondStep from "./second-step/SecondStep";
import ThirdStep from "./third-step/ThirdStep";

const { Step } = Steps;

const steps = [
  {
    title: "First",
    content: <FirstStep />,
  },
  {
    title: "Second",
    content: <SecondStep />,
  },
  {
    title: "Last",
    content: <ThirdStep />,
  },
];

const OrderConfirm = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <>
      <Steps current={current}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content">{steps[current].content}</div>
      <div className="steps-action">
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => message.success("Processing complete!")}
          >
            Done
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div>
    </>
  );
};

export default OrderConfirm;
