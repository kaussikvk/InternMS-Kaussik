import React from "react";
import { Link } from "react-router-dom";
import "../Components-LandingPage/LandingPage.css";
import "./Login.css";
import "./AuthExtras.css";
import { CheckCircleIcon } from "./AuthIcons";

import illustrationSuccess from "../assets/Auth/illustration-success.png";

export default function ResetSuccess() {
  return (
    <div className="ims-login-page">
     
      <div className="ims-login-left">
        <div className="ims-login-left__inner">
          <div className="ims-auth-shield-lg">
            <div className="ims-auth-shield-inner">
              <CheckCircleIcon />
            </div>
          </div>

          <h1>Password reset successfully</h1>
          <p>
            Your security is our priority. You can now log in with your new
            credentials.
          </p>

          <div className="ims-auth-illustration-card">
            <img
              src={illustrationSuccess}
              alt=""
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
          </div>
        </div>
      </div>

      <div className="ims-login-right">
        <div className="ims-login-form-wrap">
          <span className="ims-success-pill">⚙ Action Complete</span>

          <h2>Success</h2>
          <p className="ims-login-subtitle" style={{ marginBottom: 30 }}>
            Your password has been updated. To keep your account secure, we
            recommend not sharing your password with anyone.
          </p>

          <Link to="/login" className="ims-btn ims-btn--dark ims-login-submit" style={{ textAlign: "center" }}>
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
}
