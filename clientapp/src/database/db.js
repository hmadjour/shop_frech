import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
} from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyCwR2arV8n-WioNfi5jO1OLaEdqueW30-Q",
  authDomain: "shop-frechou.firebaseapp.com",
  projectId: "shop-frechou",
  storageBucket: "shop-frechou.appspot.com",
  messagingSenderId: "411602625925",
  appId: "1:411602625925:web:3a76e26e5c742941f990ec",
  measurementId: "G-2Y1BF5TQRY",
};

const database = initializeApp(firebaseConfig);
const db = getFirestore(database);

export const getProducts = async () => {
  const productsCol = collection(db, "products");
  const productsSnapshot = await getDocs(productsCol);
  const productsList = productsSnapshot.docs.map((doc) => doc.data());
  return productsList;
};

export const uploadFile = async (file) => {
  const fileCol = collection(db, "files");
  const productsSnapshot = await addDoc(fileCol, {
    url: file,
  });
  return productsSnapshot;
};
