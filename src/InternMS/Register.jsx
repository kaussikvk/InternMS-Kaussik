import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Kaussiklandingpage.css";
import "./Login.css";
import "./Register.css";


import iconMentorTab from "../assets/icon-mentor-people.png";
import iconInternTab from "../assets/icon-intern-book.png";
import iconCompanyTab from "../assets/icon-company-building.png";

import iconWhite1 from "../assets/icon-white-1.png";
import iconWhite2 from "../assets/icon-white-2.png";
import iconWhite3 from "../assets/icon-white-3.png";
import iconWhite4 from "../assets/icon-white-4.png";

const ROLE_CONFIG = {
  mentor: {
    label: "Mentor",
    tabIcon: iconMentorTab,
    leftTitle: "Empower the next generation of talent.",
    leftText:
      "Join a community of experts guiding students through their career journey. Share your knowledge and shape the industry's future.",
    leftBullets: [
      { icon: iconWhite1, title: "Direct Impact", text: "Shape careers through 1:1 mentorship." },
      { icon: iconWhite2, title: "Meaningful Connections", text: "Build a network across industries." },
      { icon: iconWhite3, title: "Recognition & Growth", text: "Earn credentials for your contributions." },
    ],
    formTitle: "Mentor Registration",
    formSubtitle: "Create your profile to start connecting with students.",
    fields: [
      { name: "fullName", label: "Full Name", type: "text", placeholder: "Enter your full name" },
      { name: "email", label: "Email Address", type: "email", placeholder: "Enter your email address" },
      { name: "phone", label: "Phone Number", type: "tel", placeholder: "Enter your phone number" },
      { name: "title", label: "Professional Title", type: "text", placeholder: "e.g. Senior Product Manager" },
      { name: "expertise", label: "Skills / Expertise", type: "text", placeholder: "e.g. UX Design, Marketing" },
      {
        name: "experience",
        label: "Years of Experience",
        type: "select",
        options: ["0-2 years", "3-5 years", "6-10 years", "10+ years"],
      },
      {
        name: "bio",
        label: "Bio",
        type: "textarea",
        placeholder: "Tell us about your background and how you'd like to help interns",
        fullWidth: true,
      },
    ],
  },
  intern: {
    label: "Intern",
    tabIcon: iconInternTab,
    leftTitle: "Your gateway to professional excellence starts here.",
    leftText:
      "Join thousands of students securing top internships at leading companies and building lasting careers.",
    leftBullets: [
      { icon: iconWhite1, title: "Verified Employers", text: "Apply only to vetted, legitimate companies." },
      { icon: iconWhite4, title: "Instant Ranking", text: "See how your profile compares in real time." },
    ],
    formTitle: "Intern Registration",
    formSubtitle: "Students ready to create a career-first account.",
    fields: [
      { name: "fullName", label: "Full Name", type: "text", placeholder: "Enter your full name" },
      { name: "email", label: "Email Address", type: "email", placeholder: "Enter your email address" },
      { name: "phone", label: "Phone Number", type: "tel", placeholder: "Enter your phone number" },
      { name: "dob", label: "Date of Birth", type: "date" },
      { name: "college", label: "College / University", type: "text", placeholder: "Enter your institution name" },
      { name: "field", label: "Field of Study", type: "text", placeholder: "e.g. Computer Science" },
      {
        name: "gradYear",
        label: "Graduation Year",
        type: "select",
        options: ["2025", "2026", "2027", "2028", "2029"],
      },
      { name: "resume", label: "Resume / CV", type: "file", fullWidth: true },
    ],
  },
  company: {
    label: "Company",
    tabIcon: iconCompanyTab,
    leftTitle: "Partner with InternMS to scale your team.",
    leftText:
      "Access thousands of verified, motivated students and streamline your internship hiring end-to-end.",
    leftBullets: [
      { icon: iconWhite2, title: "Effortless Hiring", text: "Post roles and manage applicants in one place." },
      { icon: iconWhite3, title: "Verified Talent", text: "Every candidate is pre-screened and credentialed." },
    ],
    formTitle: "Create Company Account",
    formSubtitle: "Get set up to register your organization and start hiring.",
    fields: [
      { name: "companyName", label: "Company Name", type: "text", placeholder: "Enter your company name" },
      { name: "website", label: "Company Website", type: "text", placeholder: "https://yourcompany.com" },
      { name: "workEmail", label: "Work Email", type: "email", placeholder: "Enter your work email" },
      { name: "phone", label: "Phone Number", type: "tel", placeholder: "Enter your phone number" },
      {
        name: "industry",
        label: "Industry",
        type: "select",
        options: ["Technology", "Finance", "Healthcare", "Education", "Retail", "Other"],
      },
      {
        name: "companySize",
        label: "Company Size",
        type: "select",
        options: ["1-10", "11-50", "51-200", "201-500", "500+"],
      },
      { name: "regNumber", label: "Registration Number", type: "text", placeholder: "Company registration / tax ID" },
    ],
  },
};

const ROLE_ORDER = ["mentor", "intern", "company"];

export default function Register() {
  const navigate = useNavigate();
  const [role, setRole] = useState("intern");
  const [formData, setFormData] = useState({});
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const config = ROLE_CONFIG[role];

  const handleRoleChange = (newRole) => {
    setRole(newRole);
    setFormData({});
    setPassword("");
    setConfirmPassword("");
    setError("");
  };

  const handleFieldChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    setError("");
   
    console.log("Registering", role, { ...formData, password });

    navigate("/login");
  };

  return (
    <div className="ims-login-page">
   
      <div className="ims-login-left ims-login-left--gradient">
        <div className="ims-login-left__inner">
          <Link to="/" className="ims-logo ims-logo--light">
            InternMS
            <span className="ims-logo__by ims-logo__by--light">by Kaussik</span>
          </Link>

          <h1>{config.leftTitle}</h1>
          <p>{config.leftText}</p>

          <ul className="ims-register-bullets">
            {config.leftBullets.map((b) => (
              <li key={b.title}>
                <span className="ims-register-bullets__icon">
                  <img src={b.icon} alt="" />
                </span>
                <div>
                  <strong>{b.title}</strong>
                  <p>{b.text}</p>
                </div>
              </li>
            ))}
          </ul>

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

      <div className="ims-login-right">
        <div className="ims-register-form-wrap">
          <div className="ims-register-tabs">
            {ROLE_ORDER.map((r) => (
              <button
                type="button"
                key={r}
                className={`ims-register-tab ${role === r ? "ims-register-tab--active" : ""}`}
                onClick={() => handleRoleChange(r)}
              >
                <span className="ims-register-tab__icon">
                  <img src={ROLE_CONFIG[r].tabIcon} alt="" />
                </span>
                {ROLE_CONFIG[r].label}
              </button>
            ))}
          </div>

          <h2>{config.formTitle}</h2>
          <p className="ims-login-subtitle">{config.formSubtitle}</p>

          <form onSubmit={handleSubmit} className="ims-register-form" noValidate>
            <div className="ims-register-grid">
              {config.fields.map((field) => (
                <label
                  key={field.name}
                  className={field.fullWidth ? "ims-register-field--full" : ""}
                >
                  {field.label}

                  {field.type === "select" && (
                    <select
                      value={formData[field.name] || ""}
                      onChange={(e) => handleFieldChange(field.name, e.target.value)}
                      required
                    >
                      <option value="" disabled>
                        Select {field.label.toLowerCase()}
                      </option>
                      {field.options.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  )}

                  {field.type === "textarea" && (
                    <textarea
                      rows={4}
                      placeholder={field.placeholder}
                      value={formData[field.name] || ""}
                      onChange={(e) => handleFieldChange(field.name, e.target.value)}
                      required
                    />
                  )}

                  {field.type === "file" && (
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={(e) =>
                        handleFieldChange(field.name, e.target.files[0]?.name || "")
                      }
                    />
                  )}

                  {["text", "email", "tel", "date"].includes(field.type) && (
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      value={formData[field.name] || ""}
                      onChange={(e) => handleFieldChange(field.name, e.target.value)}
                      required
                    />
                  )}
                </label>
              ))}
            </div>

            <div className="ims-register-grid">
              <label>
                Password
                <input
                  type="password"
                  placeholder="Create a strong password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </label>
              <label>
                Confirm Password
                <input
                  type="password"
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </label>
            </div>

            <label className="ims-login-checkbox">
              <input type="checkbox" required />
              I agree to the Terms of Service and Privacy Policy
            </label>

            {error && <p className="ims-login-error">{error}</p>}

            <button
              type="submit"
              className="ims-btn ims-btn--dark ims-login-submit"
            >
              Create Account
            </button>
          </form>

          <p className="ims-login-footer-text">
            Already have an account?{" "}
            <Link to="/login" className="ims-text-link">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
