import { Col, Row, Form, Button } from "antd";
import { connect } from "react-redux";
import { useInjectReducer } from "../../../../utils/injectReducer";
import { Title } from "../../../components";
import SelectInput from "./components/SelectInput";
import TextInput from "./components/TextInput";
import UploadImage from "./components/UploadImage";
import { reduxKey, selectData } from "./selectors";
import reducer from "./reducers";
import { createStructuredSelector } from "reselect";

const Create = ({ data }) => {
  useInjectReducer({ key: reduxKey, reducer });

  const [form] = Form.useForm();

  return (
    <div>
      <Title>Add to Menu</Title>
      <Form layout="vertical" form={form}>
        <Row gutter={[16, 16]}>
          <Col lg={6} sm={24} xs={24}>
            <TextInput
              name="dishName"
              label="Dish Name"
              placeholder="Name of the Dish"
              required
            />
          </Col>
          <Col lg={6} sm={24} xs={24}>
            <TextInput
              label="Price"
              name="price"
              type="number"
              placeholder="Price"
              required
            />
          </Col>
          <Col lg={6} sm={24} xs={24}>
            <SelectInput
              label="Food Type"
              placeholder="Food Type"
              name="foodType"
              optionsKey="foodTypes"
              required
            />
          </Col>
          {data.foodType === "dish" && (
            <>
              {" "}
              <Col lg={6} sm={24} xs={24}>
                <SelectInput
                  label="Dish Preference"
                  placeholder="Preference of the Dish"
                  name="dishPreference"
                  optionsKey="dishPreferences"
                  required
                />
              </Col>
              <Col lg={6} sm={24} xs={24}>
                <SelectInput
                  label="Dish Type"
                  placeholder="Type of the Dish"
                  name="dishType"
                  optionsKey="dishTypes"
                  required
                />
              </Col>
            </>
          )}
          {data.foodType === "drink" && (
            <Col lg={6} sm={24} xs={24}>
              <SelectInput
                label="Drink Type"
                placeholder="Type of the Drink"
                name="drinkPreference"
                optionsKey="drinkPreferences"
                required
              />
            </Col>
          )}
          <Col span={24}>
            <UploadImage />
          </Col>
        </Row>

        <Form.Item style={{ margin: "1rem" }}>
          <Button type="primary">Add Dish to the Menu</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  data: selectData,
});

export default connect(mapStateToProps)(Create);
