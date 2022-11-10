// import { Sign } from "crypto";
// import { SignInMethod } from "firebase/auth";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import { SamplePage1 } from "./Chat";
import Login from "./Login";

export const RouterConfig: React.VFC = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/page1" element={<SamplePage1 />} />
        </Routes>
      </BrowserRouter>
    </div>
    );
}
