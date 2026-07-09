import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Components-LandingPage/LandingPage.css";
import "./Login.css";
import "./AuthExtras.css";
import { ShieldIcon } from "./AuthIcons";

import iconForgotPassword from "../assets/Auth/icon-shield.png";
import iconLock from "../assets/Auth/icon-lock-alt.png";

export default function ResetPassword() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const hasMinLength = password.length >= 8;
  const passwordsMatch = password.length > 0 && password === confirmPassword;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!hasMinLength || !passwordsMatch) {
      setError("Please meet both password requirements below.");
      return;
    }

    setError("");
    
    console.log("Updating password:", password);

    navigate("/reset-password-success");
  };

  return (
    <div className="ims-login-page">
  
      <div className="ims-login-left">
        <div className="ims-login-left__inner">
          <h1>Secure your account.</h1>
          <p>
            Ensure your career progress is protected. Set a strong password
            to continue your journey with InternMS.
          </p>

          <div className="ims-auth-left-icon-box">
            <ShieldIcon />
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div className="ims-login-right">
        <div className="ims-login-form-wrap">
          <div className="ims-auth-badge-icon">
            <img src={iconForgotPassword} alt="" />
          </div>

          <h2>Set New Password</h2>
          <p className="ims-login-subtitle">
            Your new password must be different from previous passwords.
          </p>

          <form onSubmit={handleSubmit} className="ims-login-form" noValidate>
            <label>
              New Password
              <div className="ims-input-icon-wrap">
                <img src={iconLock} alt="" />
                <input
                  type="password"
                  placeholder="       Min. 8 characters"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </label>

            <label>
              Confirm New Password
              <div className="ims-input-icon-wrap">
                <img src={iconLock} alt="" />
                <input
                  type="password"
                  placeholder="       Repeat your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </label>

            <div className="ims-validation-list">
              <div className={`ims-validation-item ${hasMinLength ? "ims-validation-item--valid" : ""}`}>
                <span className="ims-validation-item__dot" />
                At least 8 characters
              </div>
              <div className={`ims-validation-item ${passwordsMatch ? "ims-validation-item--valid" : ""}`}>
                <span className="ims-validation-item__dot" />
                Passwords match
              </div>
            </div>

            {error && <p className="ims-login-error">{error}</p>}

            <button type="submit" className="ims-btn ims-btn--dark ims-login-submit">
              Update Password &rarr;
            </button>
          </form>

          <p className="ims-login-footer-text">
            <Link to="/login" className="ims-text-link">
              Back to Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
