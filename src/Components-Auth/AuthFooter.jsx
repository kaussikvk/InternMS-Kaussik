import React from "react";
import { Link } from "react-router-dom";
import "./AuthFooter.css";

export default function AuthFooter() {
  return (
    <footer className="ims-auth-footer">
      <div className="ims-auth-footer__inner">
        <span>&copy; 2026 InternMS. All rights reserved.</span>
        <div className="ims-auth-footer__links">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
          <Link to="/support">Support</Link>
        </div>
      </div>
    </footer>
  );
}
