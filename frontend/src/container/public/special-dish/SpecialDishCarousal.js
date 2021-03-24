import { Carousel, Image, Col, Button, Space } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import items from "./items";
import AddToCart from "../../components/AddToCart";
import OrderNow from "../../components/OrderNow";

const SpecialDishCarousal = () => {
  const carousalActions = (id, name) => (
    <>
      <Col>
        <OrderNow
          itemId={id}
          style={{
            background: "none",
            color: "white",
            width: 300,
            margin: 10,
          }}
          size="large"
          //   type="dashed"
        />
      </Col>
      <Col>
        <AddToCart
          itemName={name}
          itemId={id}
          style={{
            background: "none",
            color: "white",
            width: 290,
          }}
          size="large"
          icon={<ShoppingCartOutlined />}
        />
      </Col>
    </>
  );
  return (
    <div>
      <Carousel style={{ background: "#CC313d" }} autoplay>
        {items.map(({ title, dishes }) => (
          <div style={{ textAlign: "center", padding: 30, margin: 30 }}>
            <h1
              style={{
                color: "white",
                fontSize: 40,
                fontWeight: "bold",
                // textAlign: "center",
                paddingLeft: "8%",
                marginTop: 35,
              }}
            >
              {title}
            </h1>
            <Col
              style={{
                padding: 30,
                textAlign: "center",
                alignContent: "center",
              }}
              span={24}
            >
              <Col
                style={{
                  alignContent: "center",
                  alignSelf: "center",
                  textAlign: "center",
                }}
                lg={8}
              >
                <Image
                  height={200}
                  width={300}
                  placeholder={
                    <Image preview={false} src={dishes[0].image} width={200} />
                  }
                  src={dishes[0].image}
                  alt={dishes[0].dishName}
                  // loading="lazy"
                />
                <h1
                  style={{
                    color: "white",
                    fontSize: 30,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  {dishes[0].dishName}
                </h1>
                <h5
                  style={{
                    color: "white",
                    lineHeight: 1,
                    fontSize: 25,
                    textAlign: "center",
                  }}
                >
                  Rs. {dishes[0].price}
                </h5>
                <h5
                  style={{
                    lineHeight: 0,
                    color: "white",
                    fontSize: 20,
                    textAlign: "center",
                  }}
                >
                  {dishes[0].preference}/{dishes[0].type}
                </h5>
              </Col>
              <Col
                style={{
                  float: "right",
                  position: "absolute",
                  top: "22%",
                  right: "20%",
                }}
                lg={8}
              >
                {carousalActions(dishes[0].id, dishes[0].dishName)}
              </Col>
            </Col>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default SpecialDishCarousal;
