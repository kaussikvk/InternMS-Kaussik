import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Kaussiklandingpage.css";
import "./Login.css";
import "./AuthExtras.css";
import { useGoogleLogin } from "@react-oauth/google";
import { EyeIcon, EyeOffIcon, GoogleGIcon } from "./AuthIcons";

import loginIllustration from "../assets/icon (8).png";
import iconVerified from "../assets/icon (4).png";
import iconMail from "../assets/icon (5).png";
import iconLock from "../assets/icon (3).png";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      setError("Please fill in both fields.");
      return;
    }

    setError("");
    // TODO: replace with your real authentication call
    console.log("Logging in with:", form);

    // If your app requires 2FA after login, redirect there instead:
    navigate("/two-step-verification");
  };

  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const res = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
          headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
        });
        const profile = await res.json();

        // profile contains: { email, name, picture, sub, ... }
        // TODO: send this to your backend to create/find the user + issue your own session
        console.log("Google profile:", profile);

        navigate("/");
      } catch (err) {
        console.error(err);
        setError("Couldn't complete Google sign-in. Please try again.");
      }
    },
    onError: () => setError("Google sign-in failed. Please try again."),
  });

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
                  placeholder="      Enter Email address"
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
                  placeholder="      Enter your password"
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

          <button type="button" className="ims-social-btn" onClick={() => googleLogin()}>
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
