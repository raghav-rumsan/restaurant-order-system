import { navigate } from "@reach/router";
import { Button, Popconfirm } from "antd";

const OrderNow = ({ itemId, ...props }) => {
  const onClick = () => {
    navigate(`/confirm-order/${itemId}`);
    console.log(`itemId`, itemId);
  };
  return (
    <Popconfirm
      title={`Are you sure you want to place this order?`}
      okText="Yes"
      onConfirm={onClick}
    >
      <Button {...props}>Order Now</Button>
    </Popconfirm>
  );
};

export default OrderNow;
