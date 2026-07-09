import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Components-LandingPage/LandingPage.css";
import "./Login.css";
import "./Register.css";
import { HRIcon, MentorIcon, InternIcon, CompanyIcon, AdminIcon, TargetIcon, ConnectionIcon, TrophyIcon, TrackingIcon } from "./AuthIcons";

const ROLE_CONFIG = {
  hr: {
    label: "HR",
    tabIcon: HRIcon,
    leftTitle: "Empower your team with top-tier talent.",
    leftText:
      "Streamline your recruitment process, manage internships with ease, and connect with the next generation of industry leaders.",
    leftBullets: [
      { icon: TargetIcon, title: "Unified Talent Dashboard", text: "Monitor all applications in real-time." },
      { icon: ConnectionIcon, title: "Faster Hiring", text: "Cut time-to-hire with streamlined workflows." },
    ],
    formTitle: "Create your HR account",
    formSubtitle: "Join our ecosystem of professional employers.",
    fields: [
      { name: "fullName", label: "Full Name", type: "text", placeholder: "John Doe" },
      { name: "workEmail", label: "Work Email Address", type: "email", placeholder: "john.doe@company.com" },
      { name: "phone", label: "Phone Number", type: "tel", placeholder: "Enter your phone number" },
      {
        name: "department",
        label: "Department",
        type: "select",
        options: ["Human Resources", "Talent Acquisition", "Operations", "Finance", "IT", "Other"],
      },
      { name: "companyName", label: "Company Name", type: "text", placeholder: "InternHub Inc.", fullWidth: true },
    ],
  },
  mentor: {
    label: "Mentor",
    tabIcon: MentorIcon,
    leftTitle: "Empower the next generation of talent.",
    leftText:
      "Join a community of experts guiding students through their career journey. Share your knowledge and shape the industry's future.",
    leftBullets: [
      { icon: TargetIcon, title: "Direct Impact", text: "Shape careers through 1:1 mentorship." },
      { icon: ConnectionIcon, title: "Meaningful Connections", text: "Build a network across industries." },
      { icon: TrophyIcon, title: "Recognition & Growth", text: "Earn credentials for your contributions." },
    ],
    formTitle: "Mentor Registration",
    formSubtitle: "Complete your profile to start connecting with students.",
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
    tabIcon: InternIcon,
    leftTitle: "Your gateway to professional excellence starts here.",
    leftText:
      "Join thousands of ambitious students securing world-class internships at leading tech companies and creative agencies.",
    leftBullets: [
      { icon: TargetIcon, title: "Verified Employers", text: "Connect with pre-vetted top-tier companies worldwide." },
      { icon: TrackingIcon, title: "Smart Tracking", text: "Manage all your applications in one organized dashboard." },
    ],
    formTitle: "Intern Registration",
    formSubtitle: "Fill in the details below to create your professional account.",
    fields: [
      { name: "fullName", label: "Full Name", type: "text", placeholder: "Enter your full name" },
      { name: "email", label: "Email Address", type: "email", placeholder: "Enter your email address" },
      { name: "phone", label: "Phone Number", type: "tel", placeholder: "Enter your phone number" },
      { name: "dob", label: "Date of Birth", type: "date" },
      { name: "college", label: "College / University", type: "text", placeholder: "Enter your university name" },
      {
        name: "field",
        label: "Field of Study",
        type: "select",
        options: ["Computer Science", "Business", "Design", "Engineering", "Marketing", "Other"],
      },
      {
        name: "gradYear",
        label: "Graduation Year",
        type: "select",
        options: ["2025", "2026", "2027", "2028", "2029"],
      },
      { name: "resume", label: "Resume (Optional)", type: "file", fullWidth: true },
    ],
  },
  company: {
    label: "Company",
    tabIcon: CompanyIcon,
    leftTitle: "Partner with InternMS to scale your team.",
    leftText:
      "Connect with over 100,000+ top-tier students and graduates ready to bring innovation to your company.",
    leftBullets: [
      { icon: ConnectionIcon, title: "Effortless Hiring", text: "Post jobs and manage applicants in one centralized dashboard." },
      { icon: TrophyIcon, title: "Verified Talent", text: "Every student profile is verified for education and skill credentials." },
    ],
    formTitle: "Create Company Account",
    formSubtitle: "Fill in the details to register your organization and start hiring.",
    fields: [
      { name: "companyName", label: "Company Name", type: "text", placeholder: "e.g. Acme Corp" },
      { name: "website", label: "Company Website", type: "text", placeholder: "https://" },
      { name: "workEmail", label: "Work Email", type: "email", placeholder: "name@company.com" },
      { name: "phone", label: "Phone Number", type: "tel", placeholder: "Enter your number" },
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
      { name: "regNumber", label: "Registration Number", type: "text", placeholder: "Business ID or Tax ID", fullWidth: true },
    ],
  },
  admin: {
    label: "Admin",
    tabIcon: AdminIcon,
    leftTitle: "Manage your organization with full control.",
    leftText:
      "Oversee accounts, permissions, and platform-wide settings from a single secure admin console.",
    leftBullets: [
      { icon: TrophyIcon, title: "Full Access Control", text: "Manage every role and permission from one place." },
      { icon: TrackingIcon, title: "Audit & Security Logs", text: "Track every action across the platform." },
    ],
    formTitle: "Admin Registration",
    formSubtitle: "Set up a secure administrator account for your organization.",
    fields: [
      { name: "fullName", label: "Full Name", type: "text", placeholder: "Enter your full name" },
      { name: "workEmail", label: "Work Email", type: "email", placeholder: "Enter your work email" },
      { name: "phone", label: "Phone Number", type: "tel", placeholder: "Enter your phone number" },
      { name: "organization", label: "Organization Name", type: "text", placeholder: "Enter your organization name" },
      {
        name: "accessLevel",
        label: "Access Level",
        type: "select",
        options: ["Super Admin", "Support Admin", "Content Admin"],
      },
      { name: "securityKey", label: "Security Key (Optional)", type: "text", placeholder: "2FA / hardware key ID", fullWidth: true },
    ],
  },
};

const ROLE_ORDER = ["hr", "mentor", "intern", "company", "admin"];

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
      {/* LEFT */}
      <div className="ims-login-left">
        <div className="ims-login-left__inner">
          <h2  className="ims-logo ims-logo--light">
            InternHub
            
          </h2>

          <h1>{config.leftTitle}</h1>
          <p>{config.leftText}</p>
          <ul className="ims-register-bullets">
            {config.leftBullets.map((b) => {
              const BulletIcon = b.icon;
              return (
                <li key={b.title}>
                  <span className="ims-register-bullets__icon">
                    <BulletIcon width={18} height={18} />
                  </span>
                  <div>
                    <strong>{b.title}</strong>
                    <p>{b.text}</p>
                  </div>
                </li>
              );
            })}
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

      {/* RIGHT - form panel */}
      <div className="ims-login-right">
        <div className="ims-register-form-wrap">
          <h2>{config.formTitle}</h2>
          <p className="ims-login-subtitle">{config.formSubtitle}</p>

          <p className="ims-register-label">
            Registering as <span>*</span>
          </p>

          <div className="ims-register-tabs">
            {ROLE_ORDER.map((r) => {
              const TabIcon = ROLE_CONFIG[r].tabIcon;
              return (
                <button
                  type="button"
                  key={r}
                  className={`ims-register-tab ${role === r ? "ims-register-tab--active" : ""}`}
                  onClick={() => handleRoleChange(r)}
                >
                  <span className="ims-register-tab__icon">
                    <TabIcon width={20} height={20} />
                  </span>
                  {ROLE_CONFIG[r].label}
                </button>
              );
            })}
          </div>

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
                      required={field.label.includes("Optional") ? false : true}
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
