import React, { useState } from "react";
import { useAuthContext } from "../Context/AuthContext";
import { signInWithEmailAndPassword } from "firebase/auth";
import { message } from "antd";
import { auth } from "../Config/firebase";

export default function useLogin() {
  const { readUserProfile } = useAuthContext();
  const [state, setState] = useState({ email: "", password: "" });
  const [isProcessing, setIsProcessing] = useState(false);

  const handleChange = (e) =>
    setState((s) => ({ ...s, [e.target.name]: e.target.value }));

  const handleLogin = (e) => {
    e.preventDefault();

    let { email, password } = state;

    setIsProcessing(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        readUserProfile(user);
      })
      .catch((err) => {
        message.error("Something went wrong while signing user");
        console.error(err);
      })
      .finally(() => {
        setIsProcessing(false);
      });
  };
  return {
    state,
    handleChange,
    handleLogin,
    isProcessing,
  };
}
