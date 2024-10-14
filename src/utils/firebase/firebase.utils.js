import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  Firestore,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCtozpetfhm5RH2gCJmTvInwbaMFe-gG6M",
  authDomain: "crwn-clothing-23abb.firebaseapp.com",
  projectId: "crwn-clothing-23abb",
  storageBucket: "crwn-clothing-23abb.appspot.com",
  messagingSenderId: "791145804422",
  appId: "1:791145804422:web:2f540049c073fcef8c5707",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating the user'", error.message);
    }

    return userDocRef;
  }

  // if user data does not exists
  // create set the document with the data from userAuth in my collection
  // if user data exisis
  //return userDocRef
};
