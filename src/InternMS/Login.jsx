import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Kaussiklandingpage.css";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
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

    navigate("/"); // redirect after successful login
  };

  return (
    <div className="ims-login-page">
      {/* LEFT - brand panel */}
      <div className="ims-login-left ims-login-left--gradient">
        <div className="ims-login-left__inner">
          <Link to="/" className="ims-logo ims-logo--light">
            InternMS
            <span className="ims-logo__by ims-logo__by--light">by Kaussik</span>
          </Link>

          <h1>Welcome back to your career command center.</h1>
          <p>
            Log in to track applications, manage placements, and stay
            connected with your internship journey.
          </p>

          <div className="ims-login-stats">
            <div>
              <strong>500+</strong>
              <span>Universities</span>
            </div>
            <div>
              <strong>10k+</strong>
              <span>Companies</span>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT - form panel */}
      <div className="ims-login-right">
        <div className="ims-login-form-wrap">
          <h2>Log in to InternMS</h2>
          <p className="ims-login-subtitle">
            Enter your credentials to access your account.
          </p>

          <form onSubmit={handleSubmit} className="ims-login-form" noValidate>
            <label>
              Email Address
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
              />
            </label>

            <label>
              Password
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={form.password}
                onChange={handleChange}
              />
            </label>

            <div className="ims-login-row">
              <label className="ims-login-checkbox">
                <input type="checkbox" />
                Remember me
              </label>
              <Link to="/forgot-password" className="ims-text-link">
                Forgot password?
              </Link>
            </div>

            {error && <p className="ims-login-error">{error}</p>}

            <button
              type="submit"
              className="ims-btn ims-btn--dark ims-login-submit"
            >
              Log In
            </button>
          </form>

          <p className="ims-login-footer-text">
            Don&apos;t have an account?{" "}
            <Link to="/register" className="ims-text-link">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
