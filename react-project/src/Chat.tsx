import { useAuthState } from "react-firebase-hooks/auth"
import React from "react";
import SignUp from "./components/SignUp";
import { auth } from "./firebaseConfig";
import { Navigate } from "react-router-dom";

export const SamplePage1: React.FC = () => {
  const [user] = useAuthState(auth);
  return (
      <div>
        <h3>Sample Page 1</h3>

      <div>{user ? <Navigate to="/app" /> :<SignUp/>}</div>
      </div>
    )
}
