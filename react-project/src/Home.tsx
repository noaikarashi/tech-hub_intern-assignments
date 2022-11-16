import { useAuthState } from "react-firebase-hooks/auth"
import React from "react";
import SignUp from "./components/SignUp";
import { auth } from "./firebaseConfig";
import { Navigate } from "react-router-dom";

export const Home: React.FC = () => {
  const [user] = useAuthState(auth);
  return (
      <div>
      <h1>Welcome to Chat App</h1>
      <h2>Googleアカウントでログインしてください</h2>
      <div>{user ? <Navigate to="/app" /> :<SignUp/>}</div>
      </div>
    )
}
