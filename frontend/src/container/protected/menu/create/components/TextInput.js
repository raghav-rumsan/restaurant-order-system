import { Form, Input } from "antd";
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setDataValue } from "../actions";

const TextInput = ({ required, setDataValue, ...props }) => {
  const handleInputChange = (e) => {
    const { value } = e.target;
    // console.log("value", value);
    setDataValue({
      key: props.name,
      value: value,
    });
  };

  return (
    <div>
      {/* <h3>{label}</h3> */}
      <Form.Item
        {...props}
        rules={[
          {
            required,
            message: `Please Input ${props.placeholder}`,
          },
        ]}
      >
        <Input {...props} onChange={handleInputChange} />
      </Form.Item>
    </div>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

const mapDispatchToProps = { setDataValue };

export default connect(null, mapDispatchToProps)(TextInput);
