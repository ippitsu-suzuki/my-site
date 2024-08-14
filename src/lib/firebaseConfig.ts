import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBKo6Z8GJ01iTsf_gzY1ZAIHD9MuuBh_yU",
  authDomain: "ippitsu-suzuki-contact-form.firebaseapp.com",
  projectId: "ippitsu-suzuki-contact-form",
  storageBucket: "ippitsu-suzuki-contact-form.appspot.com",
  messagingSenderId: "520091157542",
  appId: "1:520091157542:web:d9e06ef28e951d432a52e7"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };