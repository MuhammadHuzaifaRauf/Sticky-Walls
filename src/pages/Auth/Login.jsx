import React, { useState } from "react";
import { Button, Divider, Form, Input, Typography, message } from "antd";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const { Title } = Typography;

export default function Login() {
  const { state, handleChange, handleLogin, isProcessing } = useLogin();

  return (
    <main className="auth">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card p-3 p-md-4">
              <Title level={2} className="m-0 text-center">
                Login
              </Title>

              <Divider />

              <Form layout="vertical">
                <Form.Item label="Email">
                  <Input
                    placeholder="Input your email"
                    name="email"
                    onChange={handleChange}
                  />
                </Form.Item>
                <Form.Item label="Password">
                  <Input.Password
                    placeholder="Input your password"
                    name="password"
                    onChange={handleChange}
                  />
                </Form.Item>

                <Button
                  type="primary"
                  htmlType="submit"
                  className="w-100"
                  loading={isProcessing}
                  onClick={handleLogin}
                >
                  Login
                </Button>
              </Form>
              <Link to="/auth/register" className="text-center mt-3 nav-link">
                Create the account
              </Link>
              <Link
                to="/auth/forgot-password"
                className="text-center mt-3 nav-link"
              >
                Forget Password
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
