import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Kaussiklandingpage.css";
import "./Login.css";
import "./AuthExtras.css";

import iconForgotPassword from "../assets/icon (7).png";
import iconMail from "../assets/icon (5).png";
import iconMobile from "../assets/icon (6).png";

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [contact, setContact] = useState("");
  const [method, setMethod] = useState("email");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!contact) {
      setError(
        method === "sms"
          ? "Please enter your phone number first."
          : "Please enter your email address first."
      );
      return;
    }

    setError("");
    // TODO: replace with your real "send code" API call
    console.log("Sending reset code via", method, "to", contact);

    navigate("/verify-code", { state: { flow: "reset", method, contact } });
  };

  return (
    <div className="ims-login-page">
      {/* LEFT */}
      <div className="ims-login-left">
        <div className="ims-login-left__inner">
          <h1>Regain access to your professional future.</h1>
          <p>
            We&apos;re here to help you get back on track. Secure your account
            and continue exploring the best internship opportunities
            worldwide.
          </p>
        </div>
      </div>

      {/* RIGHT */}
      <div className="ims-login-right">
        <div className="ims-login-form-wrap">
          <div className="ims-auth-badge-icon">
            <img src={iconForgotPassword} alt="" />
          </div>

          <h2>Forgot Password?</h2>
          <p className="ims-login-subtitle">
            Choose how you&apos;d like to receive a one-time verification code,
            then enter your email or phone number.
          </p>

          <form onSubmit={handleSubmit} className="ims-login-form" noValidate>
            <div>
              <p style={{ fontWeight: 600, fontSize: "0.9rem", marginBottom: 10 }}>
                Verification Method
              </p>

              <div
                className={`ims-radio-card ${method === "email" ? "ims-radio-card--active" : ""}`}
                onClick={() => {
                  setMethod("email");
                  setContact("");
                }}
              >
                <div className="ims-radio-card__icon">
                  <img src={iconMail} alt="" />
                </div>
                <div className="ims-radio-card__text">
                  <strong>Email Address</strong>
                  <span>Send code to your registered email</span>
                </div>
                <div className="ims-radio-card__dot" />
              </div>

              <div
                className={`ims-radio-card ${method === "sms" ? "ims-radio-card--active" : ""}`}
                onClick={() => {
                  setMethod("sms");
                  setContact("");
                }}
              >
                <div className="ims-radio-card__icon">
                  <img src={iconMobile} alt="" />
                </div>
                <div className="ims-radio-card__text">
                  <strong>SMS / Text Message</strong>
                  <span>Send code to your registered phone</span>
                </div>
                <div className="ims-radio-card__dot" />
              </div>
            </div>

            <label>
              {method === "sms" ? "Phone Number" : "Email Address"}
              <input
                type={method === "sms" ? "tel" : "email"}
                placeholder={method === "sms" ? "Enter your phone number" : "you@example.com"}
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
            </label>

            {error && <p className="ims-login-error">{error}</p>}

            <button type="submit" className="ims-btn ims-btn--dark ims-login-submit">
              Send Verification Code &rarr;
            </button>
          </form>

          <Link to="/login" className="ims-back-link">
            &lsaquo; Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
}
