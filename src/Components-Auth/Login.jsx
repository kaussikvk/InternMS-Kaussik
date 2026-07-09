import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Components-LandingPage/LandingPage.css";
import "./Login.css";
import "./AuthExtras.css";
import { EyeIcon, EyeOffIcon, GoogleGIcon } from "./AuthIcons";

import loginIllustration from "../assets/Auth/icon-shield.png";
import iconVerified from "../assets/Auth/icon-verified.png";
import iconMail from "../assets/Auth/icon-mail.png";
import iconLock from "../assets/Auth/icon-lock.png";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
  if (!form.email || !form.password) {
    return "Please fill in both fields.";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(form.email)) {
    return "Please enter a valid email address.";
  }

  const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
  if (!passwordRegex.test(form.password)) {
    return "Password must be at least 8 characters, with 1 uppercase letter and 1 number.";
  }

  return "";
};

const handleSubmit = (e) => {
  e.preventDefault();

  const validationError = validateForm();
  if (validationError) {
    setError(validationError);
    return;
  }

  setError("");
  console.log("Logging in with:", form);
  navigate("/two-step-verification");
};

  // Dummy Google sign-in handler (frontend-only placeholder, no real auth)
  const handleGoogleLogin = () => {
    console.log("Google sign-in clicked (dummy - not implemented)");
  };

  return (
    
    <div className="ims-login-page">
      {/* LEFT - brand panel */}
      <div className="ims-login-left">
        <div className="ims-login-left__inner">
          <div className="ims-logo ims-logo--light">
            InternHub
          
          </div>
          <h1>Your Next Big Leap Starts Here.</h1>
          <p>Connect with industry leaders, manage your
applications, and accelerate your career path with our
comprehensive internship management platform.</p>

          <div className="ims-login-badge">
            <img src={iconVerified} alt="" />
      
          </div>

          <div className="ims-login-stats">
            <div>
              <strong>500+</strong>
              <span>Patner Companies</span>
            </div>
            <div>
              <strong>10k+</strong>
              <span>Success Stories</span>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT - form panel */}
      <div className="ims-login-right">
        <div className="ims-login-form-wrap">
          <h2>Welcome Back</h2>
          <p className="ims-login-subtitle">Manage your career journey.</p>

          <form onSubmit={handleSubmit} className="ims-login-form" noValidate>
            <label>
              Email Address
              <div className="ims-input-icon-wrap">
                <img src={iconMail} alt="" />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Email address"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
            </label>

            <label>
              <div className="ims-login-row" style={{ marginBottom: 8 }}>
                <span>Password</span>
                <Link to="/forgot-password" className="ims-text-link">
                  Forgot Password?
                </Link>
              </div>
              <div className="ims-input-icon-wrap">
                <img src={iconLock} alt="" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  value={form.password}
                  onChange={handleChange}
                  style={{ paddingRight: 42 }}
                />
                <button
                  type="button"
                  className="ims-eye-toggle"
                  onClick={() => setShowPassword((v) => !v)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOffIcon width={18} height={18} /> : <EyeIcon width={18} height={18} />}
                </button>
              </div>
            </label>

            <label className="ims-login-checkbox">
              <input type="checkbox" />
                  Keep me signed in
            </label>

            {error && <p className="ims-login-error">{error}</p>}

            <button type="submit" className="ims-btn ims-btn--dark ims-login-submit">
              Sign In &rarr;
            </button>
          </form>

          <div className="ims-divider">OR CONTINUE WITH</div>

          <button type="button" className="ims-social-btn" onClick={handleGoogleLogin}>
            <GoogleGIcon width={18} height={18} />
            Google
          </button>

          <p className="ims-login-footer-text">
            Don&apos;t have an account?{" "}
            <Link to="/register" className="ims-text-link">
              Create Account
            </Link>
          </p>

          <div className="ims-auth-footer-links">
            <Link to="/help">Help</Link>
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms">Terms</Link>
          </div>
        </div>
      
    </div>
    </div>
  );
}
