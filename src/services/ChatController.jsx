import { db } from "server/Firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    await addDoc(collection(db, "tasks"), {
      title: title,
      description: description,
      completed: false,
      created: Timestamp.now(),
    });
    onClose();
  } catch (err) {
    alert(err);
  }
};
