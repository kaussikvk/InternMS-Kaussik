import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Components-LandingPage/LandingPage.css";
import "./Login.css";
import "./Register.css";
import { TrackingIcon, ShieldCheckIcon } from "./AuthIcons";
import mentorOfficeImg from "../assets/Auth/Mentor-Office.png";
import internAvatarImg from "../assets/Auth/Icon-Blueman.png";
import handshakeIcon from "../assets/Auth/Icon-Handshake.png";
import iconHR from "../assets/Auth/icon-HR.png";
import iconMentor from "../assets/Auth/Icon-mentor.png";
import iconIntern from "../assets/Auth/Icon-intern.png";
import iconCompany from "../assets/Auth/Icon-company.png";
import iconConnections from "../assets/Auth/icon-connections.png";
import pplBackgroundIcon from "../assets/Auth/pplBackground.png";
import sparkleIcon from "../assets/Auth/sparkle1.png";
import shieldIcon from "../assets/Auth/shield.png";
import verifiedCircleIcon from "../assets/Auth/Verified circle.png";
import verifiedShieldIcon from "../assets/Auth/Verified shield.png";
import AuthFooter from "./AuthFooter";

const HR_BG = "rgba(138, 76, 252, 1)";
const MENTOR_BG = "rgba(79, 70, 229, 1)";
const COMPANY_BG = "rgba(53, 37, 205, 1)";

const ROLE_CONFIG = {
  hr: {
    label: "HR",
    tabIconImg: iconHR,
    leftTitle: "Empower your team with top-tier talent.",
    leftText:
      "Streamline your recruitment process, manage internships with ease, and connect with the next generation of industry leaders.",
    formTitle: "Create your HR account",
    formSubtitle: "Join our ecosystem of professional employers.",
    illustration: {
      iconImg: pplBackgroundIcon,
      iconOriginalColor: true,
      iconBgColor: HR_BG,
      title: "Unified Talent Dashboard",
      text: "Monitor all applications in real-time.",
      progress: 65,
      statLeft: "75% Efficiency Boost",
      statRight: "120+ Placements",
    },
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
    tabIconImg: iconMentor,
    leftTitle: "Empower the next generation of talent.",
    leftText:
      "Join a community of experts guiding students through their career journey. Share your knowledge and shape the industry's future.",
    leftBullets: [
      { iconImg: shieldIcon, iconOriginalColor: true, iconBgColor: MENTOR_BG, title: "Direct Impact", text: "Shape careers through 1:1 mentorship." },
      { iconImg: iconConnections, iconBgColor: MENTOR_BG, title: "Meaningful Connections", text: "Build a network across industries." },
      { iconImg: sparkleIcon, iconOriginalColor: true, iconBgColor: MENTOR_BG, title: "Recognition & Growth", text: "Earn credentials for your contributions." },
    ],
    formTitle: "Mentor Registration",
    formSubtitle: "Complete your profile to start connecting with students.",
    leftImage: mentorOfficeImg,
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
    tabIconImg: iconIntern,
    leftTitle: "Your gateway to professional excellence starts here.",
    leftText:
      "Join thousands of ambitious students securing world-class internships at leading tech companies and creative agencies.",
    leftBullets: [
      { iconImg: verifiedCircleIcon, iconOriginalColor: true, noBg: true, title: "Verified Employers", text: "Connect with pre-vetted top-tier companies worldwide." },
      { icon: TrackingIcon, title: "Smart Tracking", text: "Manage all your applications in one organized dashboard." },
    ],
    formTitle: "Intern Registration",
    formSubtitle: "Fill in the details below to create your professional account.",
    testimonial: {
      avatar: internAvatarImg,
      quote: "InternMS helped me land my dream internship at a Fortune 500 company within 3 weeks of joining.",
      name: "Sarah J.",
      role: "Product Design Intern",
    },
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
        type: "number",
        placeholder: "e.g. 2026",
      },
      { name: "resume", label: "Resume (Optional)", type: "file", fullWidth: true },
    ],
  },
  company: {
    label: "Company",
    tabIconImg: iconCompany,
    leftTitle: "Partner with InternMS to scale your team.",
    leftText:
      "Connect with over 100,000+ top-tier students and graduates ready to bring innovation to your company.",
    leftBullets: [
      { iconImg: iconConnections, iconBgColor: COMPANY_BG, title: "Effortless Hiring", text: "Post jobs and manage applicants in one centralized dashboard." },
      { iconImg: verifiedShieldIcon, iconOriginalColor: true, iconBgColor: COMPANY_BG, title: "Verified Talent", text: "Every student profile is verified for education and skill credentials." },
    ],
    formTitle: "Create Company Account",
    formSubtitle: "Fill in the details to register your organization and start hiring.",
    leftImage: handshakeIcon,
    leftImageGlass: true,
    fields: [
      { name: "companyName", label: "Company Name", type: "text", placeholder: "e.g. Acme Corp" },
      { name: "website", label: "Company Website", type: "text", placeholder: "https://" },
      { name: "workEmail", label: "Work Email", type: "email", placeholder: "name@company.com" },
      { name: "phone", label: "Phone Number", type: "tel", placeholder: "Enter your number", hasPrefix: "+91" },
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
};

const ROLE_ORDER = ["hr", "mentor", "intern", "company"];

function BulletIconRenderer({ bullet }) {
  if (bullet.iconImg) {
    const wrapperStyle = bullet.noBg
      ? undefined
      : bullet.iconBgColor
      ? { background: bullet.iconBgColor, border: "none" }
      : undefined;
    return (
      <span
        className={`ims-register-bullets__icon ims-register-bullets__icon--img${
          bullet.noBg ? " ims-register-bullets__icon--img-nobg" : ""
        }`}
        style={wrapperStyle}
      >
        <img
          src={bullet.iconImg}
          alt=""
          className={bullet.iconOriginalColor ? "ims-register-bullets__icon-img--original" : ""}
        />
      </span>
    );
  }
  const BulletIcon = bullet.icon;
  return (
    <span className="ims-register-bullets__icon">
      <BulletIcon width={18} height={18} />
    </span>
  );
}

export default function Register() {
  const navigate = useNavigate();
  const [role, setRole] = useState("intern");
  const [formData, setFormData] = useState({});
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const config = ROLE_CONFIG[role];
  const isIntern = role === "intern";
  const isHrOrCompany = role === "hr" || role === "company";

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

    navigate(isHrOrCompany ? "/company-hr-login" : "/login");
  };

  return (
    <div className="ims-login-page ims-register-page">
      {/* LEFT */}
      <div className={`ims-login-left ${isIntern || role === "mentor" ? "ims-login-left--top" : ""}`}>
        <div className="ims-auth-logo">
          InterMS
        </div>
        <div className="ims-login-left__inner">
          <h1>{config.leftTitle}</h1>
          <p>{config.leftText}</p>

          {config.leftBullets && (
            <ul className={`ims-register-bullets ${isIntern ? "ims-register-bullets--glass" : ""}`}>
              {config.leftBullets.map((b) => (
                <li key={b.title}>
                  <BulletIconRenderer bullet={b} />
                  <div>
                    <strong>{b.title}</strong>
                    <p>{b.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}

          {config.illustration && (
            <div className="ims-register-illustration">
              <div className="ims-register-illustration__header">
                <span
                  className="ims-register-illustration__icon"
                  style={config.illustration.iconBgColor ? { background: config.illustration.iconBgColor } : undefined}
                >
                  {config.illustration.iconImg ? (
                    <img
                      src={config.illustration.iconImg}
                      alt=""
                      style={{ width: 22, height: 22, objectFit: "contain" }}
                    />
                  ) : (
                    (() => {
                      const IllustrationIcon = config.illustration.icon;
                      return <IllustrationIcon width={20} height={20} />;
                    })()
                  )}
                </span>
                <div>
                  <strong>{config.illustration.title}</strong>
                  <p>{config.illustration.text}</p>
                </div>
              </div>
              <div className="ims-register-illustration__bar">
                <div
                  className="ims-register-illustration__bar-fill"
                  style={{ width: `${config.illustration.progress}%` }}
                />
              </div>
              <div className="ims-register-illustration__stats">
                <span>{config.illustration.statLeft}</span>
                <span>{config.illustration.statRight}</span>
              </div>
            </div>
          )}

          {config.leftImage && config.leftImageGlass && (
            <div className="ims-register-handshake">
              <img src={config.leftImage} alt="" />
            </div>
          )}

          {config.leftImage && !config.leftImageGlass && (
            <div className="ims-register-left-image">
              <img src={config.leftImage} alt="" />
            </div>
          )}

          {role === "hr" && (
            <div className="ims-login-stats">
              <div>
                <strong>500+</strong>
                <span>Companies</span>
              </div>
              <div>
                <strong>10k+</strong>
                <span>Students</span>
              </div>
            </div>
          )}

          {config.testimonial && (
            <div className="ims-register-testimonial">
              <p>&quot;{config.testimonial.quote}&quot;</p>
              <div className="ims-register-testimonial__author">
                <img src={config.testimonial.avatar} alt={config.testimonial.name} />
                <span>
                  — {config.testimonial.name}, {config.testimonial.role}
                </span>
              </div>
            </div>
          )}
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
            {ROLE_ORDER.map((r) => (
              <button
                type="button"
                key={r}
                className={`ims-register-tab ${role === r ? "ims-register-tab--active" : ""}`}
                onClick={() => handleRoleChange(r)}
              >
                <span className="ims-register-tab__icon">
                  <img src={ROLE_CONFIG[r].tabIconImg} alt="" />
                </span>
                {ROLE_CONFIG[r].label}
              </button>
            ))}
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

                  {["text", "email", "tel", "date", "number"].includes(field.type) && !field.hasPrefix && (
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      value={formData[field.name] || ""}
                      onChange={(e) => handleFieldChange(field.name, e.target.value)}
                      required={field.label.includes("Optional") ? false : true}
                    />
                  )}

                  {["text", "email", "tel", "date", "number"].includes(field.type) && field.hasPrefix && (
                    <div className="ims-phone-prefix-row">
                      <span className="ims-phone-prefix-row__prefix">{field.hasPrefix}</span>
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        value={formData[field.name] || ""}
                        onChange={(e) => handleFieldChange(field.name, e.target.value)}
                        required={field.label.includes("Optional") ? false : true}
                      />
                    </div>
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
            <Link to={isHrOrCompany ? "/company-hr-login" : "/login"} className="ims-text-link">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
