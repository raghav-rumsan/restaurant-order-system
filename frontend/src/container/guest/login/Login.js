import React from "react";
import { Form, Input, Button, Checkbox, Card } from "antd";
import openNotification from "../../components/Notification";
import TitleHeader from "../../components/TitleHeader";

const layout = {
  labelCol: {
    span: 8
  },
  wrapperCol: {
    span: 16
  }
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16
  }
};

const Login = props => {
  const onFinish = values => {
    openNotification("success", "Successfully Logged In");
  };

  const onFinishFailed = errorInfo => {
    openNotification("error", "Error logging in", "Check the internet");
  };

  return (
    <Card
      style={{
        width: "50%",
        margin: "auto",
        position: "relative",
        top: "3rem"
      }}
    >
      <TitleHeader>Poultry</TitleHeader>
      <TitleHeader style={{ fontSize: 60, textAlign: "center" }}>
        Log into your organization's account{" "}
      </TitleHeader>
      <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: true
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!"
            }
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!"
            }
          ]}
        >
          <Input.Password style={{ width: 200 }} />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button loading={props.loading} type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default Login;
