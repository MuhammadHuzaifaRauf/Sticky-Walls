import React from "react";
import List from "../../components/List";
import { where } from "firebase/firestore";

export default function Personal() {
  return (
    <>
      <List query={where("status", "==", "personal")} />
    </>
  );
}
