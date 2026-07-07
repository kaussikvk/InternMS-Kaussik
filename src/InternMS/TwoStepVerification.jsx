import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Kaussiklandingpage.css";
import "./Login.css";
import "./AuthExtras.css";
import { ShieldCheckIcon } from "./AuthIcons";

import iconMail from "../assets/icon (5).png";
import iconMobile from "../assets/icon (6).png";

export default function TwoStepVerification() {
  const navigate = useNavigate();
  const [method, setMethod] = useState("email");

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: replace with your real "send 2FA code" API call
    console.log("Sending 2FA code via", method);

    navigate("/verify-code", { state: { flow: "2fa", method } });
  };

  return (
    <div className="ims-login-page">
      {/* LEFT */}
      <div className="ims-login-left">
        <div className="ims-login-left__inner">
          <h1>Secure Your Account</h1>
          <p>
            Protecting your professional profile and application history is
            our top priority. Choose a method to verify your identity.
          </p>

          <div className="ims-trust-row">
            <div className="ims-auth-badge-icon">
              <ShieldCheckIcon />
            </div>
            <div>
              <strong>256-bit Encryption</strong>
              <span>Bank-grade security standards</span>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div className="ims-login-right">
        <div className="ims-login-form-wrap">
          <h2>Two-Step Verification</h2>
          <p className="ims-login-subtitle">Choose how you&apos;d like to verify your identity.</p>

          <form onSubmit={handleSubmit}>
            <div
              className={`ims-radio-card ${method === "email" ? "ims-radio-card--active" : ""}`}
              onClick={() => setMethod("email")}
            >
              <div className="ims-radio-card__icon">
                <img src={iconMail} alt="" />
              </div>
              <div className="ims-radio-card__text">
                <strong>Email Verification</strong>
                <span>Send code to your registered email</span>
              </div>
              <div className="ims-radio-card__dot" />
            </div>

            <div
              className={`ims-radio-card ${method === "sms" ? "ims-radio-card--active" : ""}`}
              onClick={() => setMethod("sms")}
            >
              <div className="ims-radio-card__icon">
                <img src={iconMobile} alt="" />
              </div>
              <div className="ims-radio-card__text">
                <strong>Mobile Verification</strong>
                <span>Send code to your registered phone</span>
              </div>
              <div className="ims-radio-card__dot" />
            </div>

            <button type="submit" className="ims-btn ims-btn--dark ims-login-submit" style={{ marginTop: 10 }}>
              Send Verification Code &rarr;
            </button>
          </form>

          <Link to="/login" className="ims-back-link">
            &larr; Back to Login
          </Link>

          <p style={{ marginTop: 24, textAlign: "center", fontSize: "0.85rem", borderTop: "1px solid var(--ims-border)", paddingTop: 20 }}>
            Need help?{" "}
            <Link to="/contact-support" className="ims-text-link">
              Contact Support
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
