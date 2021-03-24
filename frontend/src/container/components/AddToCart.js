import { Button, message } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";

const AddToCart = ({ itemId, itemName, ...props }) => {
  const onClick = () => {
    message.info(`${itemName} has been added to your tray `);
  };
  return (
    <div>
      <Button {...props} onClick={onClick} icon={<ShoppingCartOutlined />}>
        Add To Tray
      </Button>
    </div>
  );
};

AddToCart.propTypes = {
  itemId: PropTypes.number.isRequired,
  itemName: PropTypes.string.isRequired,
};

export default AddToCart;
