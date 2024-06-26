import React, { useState } from "react";
import { useAuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { message } from "antd";
import { firestore } from "../Config/firebase";

export default function useRgister() {
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();
  const [state, setState] = useState({
    fullName: "",
    email: "",
    password: "",
    dob: "",
  });
  const [isProcessing, setIsProcessing] = useState(false);

  const handleChange = (e) =>
    setState((s) => ({ ...s, [e.target.name]: e.target.value }));

  const handleRegister = (e) => {
    e.preventDefault();

    let { fullName, email, password, dob } = state;

    setIsProcessing(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        createUserProfile(user);
      })
      .catch((err) => {
        message.error("Something went wrong while creating user");
        console.error(err);
      })
      .finally(() => {
        setIsProcessing(false);
      });
  };

  const createUserProfile = async (user) => {
    let { fullName, dob } = state;
    const { email, uid } = user;

    const userData = {
      fullName,
      email,
      uid,
      dob,
      dateCreated: serverTimestamp(),
      status: "active",
      roles: ["client"],
    };

    try {
      await setDoc(doc(firestore, "users", uid), userData);
      message.success("A new user has been created successfully");
      dispatch({ type: "SET_LOGGED_IN", payload: { user: userData } });
      navigate("/");
    } catch (e) {
      message.error("Something went wrong while creating user profile");
      console.error("Error adding document: ", e);
    }
  };
  return {
    state,
    handleChange,
    handleRegister,
    isProcessing,
    setState,
  };
}
