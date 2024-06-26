import { message } from "antd";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../Context/AuthContext";

export default function useForgotPassword() {
  const { readUserProfile } = useAuthContext();

  const navigate = useNavigate();
  const [state, setState] = useState({ email: "", password: "" });
  const [isProcessing, setIsProcessing] = useState(false);

  const handleChange = (e) =>
    setState((s) => ({ ...s, [e.target.name]: e.target.value }));

  const handleRestPassword = (e) => {
    e.preventDefault();
    const auth = getAuth();
    let { email } = state;
    sendPasswordResetEmail(auth, email)
      .then(() => {
        message.success("Check your Email");
        setTimeout(() => {
          navigate("/auth/login");
        }, 1000);
      })
      .catch((error) => {
        message.error("There is an error while sending link");
      });
  };
  return {
    state,
    handleChange,
    handleRestPassword,
    isProcessing,
    setIsProcessing,
    navigate,
    readUserProfile,
  };
}
