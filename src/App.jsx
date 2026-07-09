import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Components-LandingPage/LandingPage";
import Login from "./Components-Auth/Login";
import Register from "./Components-Auth/Register";
import ForgotPassword from "./Components-Auth/ForgotPassword";
import VerifyCode from "./Components-Auth/VerifyCode";
import ResetPassword from "./Components-Auth/ResetPassword";
import ResetSuccess from "./Components-Auth/ResetSuccess";
import TwoStepVerification from "./Components-Auth/TwoStepVerification";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-code" element={<VerifyCode />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/reset-password-success" element={<ResetSuccess />} />

        
        <Route path="/two-step-verification" element={<TwoStepVerification />} />
      </Routes>
    </BrowserRouter>
  );
}
