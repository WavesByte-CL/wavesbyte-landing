import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

async function addRecordToFirestore(collectionName, data) {
  try {
    const docRef = await addDoc(collection(db, collectionName), data);
    console.log("Documento escrito con ID: ", docRef.id);
    return docRef.id;
  } catch (e) {
    console.error("Error al agregar documento: ", e);
    throw e;
  }
}

export default addRecordToFirestore;
