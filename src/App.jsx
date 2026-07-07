import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Kaussiklandingpage from "./InternMS/Kaussiklandingpage";
import Login from "./InternMS/Login";
import Register from "./InternMS/Register";
import ForgotPassword from "./InternMS/ForgotPassword";
import VerifyCode from "./InternMS/VerifyCode";
import ResetPassword from "./InternMS/ResetPassword";
import ResetSuccess from "./InternMS/ResetSuccess";
import TwoStepVerification from "./InternMS/TwoStepVerification";
import "./App.css";

const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;

export default function App() {
  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Kaussiklandingpage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Forgot password flow */}
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/verify-code" element={<VerifyCode />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/reset-password-success" element={<ResetSuccess />} />

          {/* Two-step login verification */}
          <Route path="/two-step-verification" element={<TwoStepVerification />} />
        </Routes>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}
