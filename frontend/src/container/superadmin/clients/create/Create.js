import { Title } from "../../../components";
import { useInjectReducer } from "../../../../utils/injectReducer";
import reducer from "./reducers";
import { reduxKey, selectLoading } from "./selectors";
import { Button, Form, Input } from "antd";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { useState } from "react";
import { clientCreate } from "./actions";
// import TextInput from "./components/TextInput";

const Create = ({ loading }) => {
  const [form] = Form.useForm();
  const TextInput = ({
    name = "",
    label = "",
    placeholder = "",
    required,
    type,
    // setDataValue,
  }) => {
    useInjectReducer({ reducer, key: reduxKey });

    const [state, setState] = useState({
      name: "",
      email: "",
      phone: "",
      password: "",
    });

    const handleInputChange = (e) => {
      const { value } = e.target;
      // console.log("value", value);
      setState({
        ...state,
        [name]: value,
      });
    };
    console.log(`state`, state);

    return (
      <div>
        <h3>{label}</h3>
        <Form.Item
          rules={[
            {
              required,
              message: `Please Input ${placeholder}`,
            },
          ]}
          name={name}
        >
          <Input
            type={type}
            onChange={handleInputChange}
            placeholder={placeholder}
          />
        </Form.Item>
      </div>
    );
  };

  const handleForm = async () => {
    // const createdClient = await clientCreate(state)
  };

  return (
    <div>
      <Title>Create Client</Title>
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
