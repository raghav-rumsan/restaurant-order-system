import { Title } from "../../../components";
import { useInjectReducer } from "../../../../utils/injectReducer";
import reducer from "./reducers";
import { reduxKey, selectLoading } from "./selectors";
import { Button, Form } from "antd";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import TextInput from "./components/TextInput";

const Create = ({ loading }) => {
  const [form] = Form.useForm();
  useInjectReducer({ reducer, key: reduxKey });
  return (
    <div>
      <Title>Create Client</Title>
      <div>
        <Form form={form}>
          <TextInput
            name="name"
            label="Restaurant's Name"
            placeholder="Name of the Restaurant"
            required
          />
          <TextInput
            name="email"
            label="Email"
            placeholder="Email of the Restaurant"
            required
          />
          <TextInput
            name="phone"
            type="number"
            label="Phone Number"
            placeholder="Phone Number of the Restaurant"
            required
          />
          <TextInput
            name="password"
            label="Admin Password"
            placeholder="Password for the admin"
            required
          />
          <Form.Item>
            <Button htmlType="submit" type="primary">
              Add
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  loading: selectLoading,
});

export default connect(mapStateToProps)(Create);
