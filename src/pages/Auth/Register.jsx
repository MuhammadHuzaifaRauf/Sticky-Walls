import React, { useState } from "react";
import {
  Button,
  DatePicker,
  Divider,
  Form,
  Input,
  Typography,
  message,
} from "antd";
import { Link } from "react-router-dom";

import useRgister from "../../hooks/useRgister";

const { Title } = Typography;

export default function Register() {
  const { handleChange, handleRegister, isProcessing, setState } = useRgister();
  return (
    <main className="auth">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card p-3 p-md-4">
              <Title level={2} className="m-0 text-center">
                Register
              </Title>

              <Divider />

              <Form layout="vertical">
                <Form.Item label="Full Name">
                  <Input
                    placeholder="Input your full name"
                    name="fullName"
                    onChange={handleChange}
                  />
                </Form.Item>
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
                <Form.Item label="Birth Date">
                  <DatePicker
                    className="w-100"
                    onChange={(dateObject, dateString) => {
                      setState((s) => ({ ...s, dob: dateString }));
                    }}
                  />
                </Form.Item>

                <Button
                  type="primary"
                  htmlType="submit"
                  className="w-100"
                  loading={isProcessing}
                  onClick={handleRegister}
                >
                  Register
                </Button>
              </Form>
              <Link className="mt-3 nav-link" to="/auth/login">
                Already have an account ?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
