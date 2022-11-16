import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import { SamplePage1 } from "./Chat";
import Login from "./Login";

export const RouterConfig: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/app" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<SamplePage1 />} />
        </Routes>
      </BrowserRouter>
    </div>
    );
}
