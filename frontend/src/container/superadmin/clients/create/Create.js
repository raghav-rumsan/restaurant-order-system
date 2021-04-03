import { Title } from "../../../components";
import { useInjectReducer } from "../../../../utils/injectReducer";
import reducer from "./reducers";
import { reduxKey, selectError, selectLoading } from "./selectors";
import { Alert, Button, Form } from "antd";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { clientCreate } from "./actions";
import TextInput from "./components/TextInput";

const Create = ({ loading, clientCreate, errors }) => {
  const [form] = Form.useForm();

  useInjectReducer({ reducer, key: reduxKey });

  const handleForm = async () => {
    try {
      await clientCreate();
      form.resetFields();
    } catch (error) {
      console.log(`{error}`, { error });
    }
  };

  console.log(`errors`, errors);

  return (
    <div>
      <Title>Create Client</Title>
      {errors?.message && <Alert type="error" message={errors.message} />}
      <div>
        <Form onFinish={handleForm} form={form}>
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
            name="numberOfTables"
            type="number"
            label="Number of tables"
            placeholder="Number of tables in the Restaurant"
            required
          />
          <TextInput
            name="password"
            label="Admin Password"
            placeholder="Password for the admin"
            required
          />
          <Form.Item>
            <Button
              disabled={loading}
              loading={loading}
              htmlType="submit"
              type="primary"
            >
              Add Client
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  loading: selectLoading,
  errors: selectError,
});

const mapDispatchToProps = {
  clientCreate,
};

export default connect(mapStateToProps, mapDispatchToProps)(Create);
