import { Col, Row } from "antd";
import ItemsCard from "./components/ItemsCard";
import items from "./items";

const Home = () => {
  return (
    <>
      <Row>
        <Col>
          {items.map(({ title, dishes }, index) => (
            <ItemsCard
              title={title}
              key={`item-${title}-${index}`}
              dishes={dishes}
            />
          ))}
        </Col>
      </Row>
    </>
  );
};

export default Home;
