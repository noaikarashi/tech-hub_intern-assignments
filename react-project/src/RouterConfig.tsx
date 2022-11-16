import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import { Home } from "./Home";
// import Login from "./Login";

export const RouterConfig: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/app" element={<App />} />
          <Route path="/" element={<Home />} />
          {/* <Route path="/login" element={<Login />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
    );
}
