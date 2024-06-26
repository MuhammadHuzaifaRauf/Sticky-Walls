import React, { useState } from "react";
import { Button, Divider, Form, Input, Typography, message } from "antd";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useAuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import useForgotPassword from "../../hooks/useForgotPassword";

const { Title } = Typography;

export default function Login() {
  const { handleChange, handleRestPassword, isProcessing } =
    useForgotPassword();

  return (
    <main className="auth">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card p-3 p-md-4">
              <Title level={2} className="m-0 text-center">
                Reset Password
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
                <Button
                  type="primary"
                  htmlType="submit"
                  className="w-100"
                  loading={isProcessing}
                  onClick={handleRestPassword}
                >
                  Reset Password
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
