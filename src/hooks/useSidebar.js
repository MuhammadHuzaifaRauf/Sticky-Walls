import { useState } from "react";
import { useAuthContext } from "../Context/AuthContext";
import { getAuth, signOut } from "firebase/auth";
import { message } from "antd";

export default function useSidebar() {
  const { dispatch, user } = useAuthContext();
  const [collapsed, setCollapsed] = useState(false);
  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        message.success("Sign Out");
        dispatch({ type: "SET_LOGGED_OUT" });
      })
      .catch((error) => {
        console.log(error);
        message.error("Can not do Sign out");
      });
  };
  return {
    user,
    collapsed,
    setCollapsed,
    handleSignOut,
  };
}
