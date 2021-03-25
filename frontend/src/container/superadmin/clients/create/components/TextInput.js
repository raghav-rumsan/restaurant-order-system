import { Form, Input } from "antd";
import React from "react";
import { connect } from "react-redux";
import { setDataValue } from "../actions";

const TextInput = ({
  name = "",
  label = "",
  placeholder = "",
  required,
  type,
  setDataValue,
}) => {
  const handleInputChange = (e) => {
    const { value } = e.target;
    // console.log("value", value);
    setDataValue({
      key: name,
      value: value.trim(),
    });
  };

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

const mapDispatchToProps = { setDataValue };

export default connect(null, mapDispatchToProps)(TextInput);
