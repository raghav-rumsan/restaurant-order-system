import { ShoppingCartOutlined, DeleteOutlined } from "@ant-design/icons";
import { Badge, Button, Input, Popover, Table } from "antd";

const cartItems = [
  {
    id: 22,
    dishName: "Momo",
    price: 120,
    quantity: 2,
    preference: "non-veg",
    type: "buff",
  },
  {
    id: 22,

    dishName: "Chowmein",
    price: 100,
    quantity: 4,
    preference: "veg",
    type: "veg",
  },
];

const cartColumns = [
  {
    title: "Dish Name",
    dataIndex: "dishName",
    key: "dishName",
    render: (text, record) => (
      <>
        {text}({record.preference}/{record.type})
      </>
    ),
  },
  {
    title: "Unit Price",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "Quantity",
    dataIndex: "quantity",
    key: "quantity",
    render: (text, record) => (
      <>
        <Input style={{ width: 50 }} type="number" value={text} />
      </>
    ),
  },
  {
    title: "Total Price",
    render: (text, record) => <>{record.price * record.quantity}</>,
  },
  {
    title: "Action",
    render: (text, record) => (
      <Button type="primary" icon={<DeleteOutlined />} />
    ),
  },
];

const cartFooter = (props) => {
  return (
    <>
      <div style={{ float: "left" }}>
        <h4>
          Total Price: Rs.{" "}
          {props.reduce((acc, curr) => {
            return acc + curr.price * curr.quantity;
          }, 0)}
        </h4>
      </div>
      <div style={{ float: "right" }}>
        <Button type="primary">Order Now</Button>
      </div>
    </>
  );
};

const Cart = () => {
  const cartContent = () => {
    return (
      <Table
        scroll={{ x: true }}
        pagination={false}
        bordered={false}
        columns={cartColumns}
        dataSource={cartItems}
        footer={cartFooter}
      />
    );
  };
  return (
    <Popover style={{ width: 300 }} content={cartContent}>
      <Badge count={0}>
        <ShoppingCartOutlined style={{ fontSize: 22, color: "grey" }} />
      </Badge>
    </Popover>
  );
};

export default Cart;
