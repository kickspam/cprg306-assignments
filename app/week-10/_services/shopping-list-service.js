import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query, doc } from "firebase/firestore";

export async function getItems(userId) {
  const items = [];
  const userDoc = doc(db, "users", userId);
  const itemsCollection = collection(userDoc, "items");
  const querySnapshot = await getDocs(query(itemsCollection));
  
  querySnapshot.forEach((doc) => {
    items.push({
      id: doc.id,
      ...doc.data()
    });
  });

  return items;
}

export async function addItem(userId, item) {
  const userDoc = doc(db, "users", userId);
  const itemsCollection = collection(userDoc, "items");
  const docRef = await addDoc(itemsCollection, item);
  return docRef.id;
}