import { useEffect, useState } from "react";
import { useAuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import {
  collection,
  deleteDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { firestore } from "../Config/firebase";
import { message } from "antd";

export default function useLists() {
  const { user } = useAuthContext();
  const [documents, setDocuments] = useState([]);
  const [allNote, setAllNote] = useState([]);
  const [date, setDate] = useState();
  const navigate = useNavigate();
  const getData = async () => {
    try {
      const q = query(
        collection(firestore, "note"),
        props.query,
        where("createdBy.uid", "==", user.uid)
      );
      const querySnapshot = await getDocs(q);
      const array = [];
      querySnapshot.forEach((doc) => {
        let data = doc.data();
        array.push(data);

        time(data);
      });
      setDocuments(array);
      setAllNote(array);
    } catch (error) {
      message.error("please connect to Internet");
    }
  };
  const time = (data) => {
    const serverTime = data.serverTime;
    const jsDate = serverTime.toDate();
    const formattedDate = jsDate.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });

    setDate(formattedDate);
  };
  useEffect(() => {
    getData();
  }, []);
  const handleDelete = async (document) => {
    try {
      await deleteDoc(doc(firestore, "note", document.id));
      let documentsAfterDelete = documents.filter(
        (doc) => doc.id !== document.id
      );
      setDocuments(documentsAfterDelete);
      setAllNote(documentsAfterDelete);
      message.success("Todo deleted successfully");
    } catch (error) {
      message.error("something went wrong while deleting note");
    }
  };
  return {
    handleDelete,
    navigate,
    date,
    allNote,
    documents,
  };
}
