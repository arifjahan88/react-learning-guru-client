import React, { createContext } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
} from "firebase/auth";
import app from "../Firebase/Firebase.config";
import { useState } from "react";
import { useEffect } from "react";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleprovider = new GoogleAuthProvider();
const gitHubprovider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setuser] = useState(null);
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginuser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googlelogin = () => {
    return signInWithPopup(auth, googleprovider);
  };
  const githublogin = () => {
    return signInWithPopup(auth, gitHubprovider);
  };
  const logOut = () => {
    return signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      setuser(currentuser);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const AuthInfo = {
    createUser,
    loginuser,
    logOut,
    googlelogin,
    githublogin,
    user,
  };
  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
