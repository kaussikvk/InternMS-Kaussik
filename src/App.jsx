import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Kaussiklandingpage from "./InternMS/Kaussiklandingpage";
import Login from "./InternMS/Login";
import Register from "./InternMS/Register";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Kaussiklandingpage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}
