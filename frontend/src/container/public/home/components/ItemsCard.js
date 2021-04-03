import { Button, Card, Col, Image, Row, Tag } from "antd";
import PropTypes from "prop-types";
import OrderNow from "../../../components/OrderNow";
import AddToTray from "../../../components/AddToCart";

const ItemsCard = ({ dishes = [], title = "" }) => {
  const cardExtra = (
    <div>
      <Button type="text">View All</Button>
    </div>
  );

  const cardActions = (itemId, itemName) => [
    <OrderNow itemId={itemId} type="primary" />,
    <AddToTray itemId={itemId} itemName={itemName} />,
  ];

  const itemCardTitle = (dishName, dishPrice) => {
    return (
      <Row>
        <Col span={12}>
          <h1>{dishName}</h1>
        </Col>
        <Col span={12}>
          <h3 style={{ float: "right" }}>Rs. {dishPrice}</h3>
        </Col>
      </Row>
    );
  };
  const itemCardDesc = (type, dishPreference) => {
    return (
      <Row>
        <Col span={12}>
          <h4> {type}</h4>
        </Col>
        <Col span={12}>
          <Tag
            style={{
              float: "right",
              color: dishPreference === "veg" ? "green" : "red",
            }}
          >
            {dishPreference}
          </Tag>
        </Col>
      </Row>
    );
  };

  return (
    <Card bordered={false} title={<h2>{title}</h2>} extra={cardExtra}>
      <Row gutter={[16, 16]}>
        {dishes.map(
          ({ dishName, image, dishType, dishPreference, price, id }) => (
            <Col
              key={`${dishName}-${dishType}-${dishPreference}-${id}`}
              lg={6}
              sm={24}
              xs={24}
              md={8}
            >
              <Card
                style={{ maxHeight: 250, minHeight: 250 }}
                actions={cardActions(id, dishName)}
                cover={
                  <Image
                    placeholder={
                      <Image preview={false} src={image} width={200} />
                    }
                    src={image}
                    alt={dishName}
                    // loading="lazy"
                  />
                }
                bordered={false}
                hoverable
              >
                <Card.Meta
                  title={itemCardTitle(dishName, price)}
                  description={itemCardDesc(dishType, dishPreference)}
                />
              </Card>
            </Col>
          )
        )}
      </Row>
    </Card>
  );
};

ItemsCard.propTypes = {
  dishes: PropTypes.array.isRequired,
};

export default ItemsCard;
