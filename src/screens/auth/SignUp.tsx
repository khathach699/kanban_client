import { Button, Card, Checkbox, Form, Input, Space, Typography } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import SocialLogin from "./components/SocialLogin";

const { Title, Paragraph, Text } = Typography;
const SignUp = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [isRemember, setIsRemember] = React.useState(false);
  const [form] = Form.useForm();

  const handleLogin = (value: { email: string; password: string }) => {
    console.log(value);
  };
  return (
    <Card style={{ width: "60%" }}>
      <div className="text-center">
        <Title level={2}>Login to your account </Title>
        <Paragraph type="secondary">
          {" "}
          Welcome back to your account. Login to your account to continue
        </Paragraph>
      </div>
      <Form
        layout="vertical"
        form={form}
        onFinish={handleLogin}
        disabled={isLoading}
        size="large"
      >
        <Form.Item
          name={"name"}
          label="Name"
          rules={[
            {
              required: true,
              message: "Please input your Name!",
            },
          ]}
        >
          <Input allowClear maxLength={50} type="name" />
        </Form.Item>
        <Form.Item
          name={"email"}
          label="Email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input allowClear maxLength={100} type="email" />
        </Form.Item>

        <Form.Item
          name={"password"}
          label="Password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password maxLength={100} type="password" />
        </Form.Item>
      </Form>
      <div className="row">
        <div className="col">
          <Checkbox
            checked={isRemember}
            onChange={(val) => setIsRemember(val.target.checked)}
          >
            Remember
          </Checkbox>
        </div>
        <div className="col text-right">
          <Link to={"/"}> Forgot Password?</Link>
        </div>
      </div>

      <div className="mt-4">
        <Button
          onClick={() => form.submit()}
          type="primary"
          style={{
            width: "100%",
          }}
          size="large"
        >
          {" "}
          Login
        </Button>
      </div>
      <SocialLogin />
      <div className="mt-4 text-center">
        <Space>
          <Text> Do have an account</Text>
          <Link to={"/"}> Sign up</Link>
        </Space>
      </div>
    </Card>
  );
};

export default SignUp;
