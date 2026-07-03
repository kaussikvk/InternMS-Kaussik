import React from "react";
import "./Kaussiklandingpage.css";
import { Link } from "react-router-dom";

import iconSparkle from "../assets/Icon.png";
import iconAutomatedMatching from "../assets/Icon (1).png";
import iconRealtimeTracking from "../assets/Icon (2).png";
import iconSecureDocuments from "../assets/Icon (3).png";
import iconCheckmark from "../assets/Icon (4).png";
import iconMail from "../assets/Icon (5).png";
import iconGlobe from "../assets/Link.png";
import dashboardPreview from "../assets/Internship Management Dashboard.png";
import floatingCardShadow from "../assets/Floating Element_shadow.png";
import heroGradient from "../assets/Gradient.png";
import officePhoto from "../assets/office-photo.jpg";

const FEATURES = [
  {
    icon: iconAutomatedMatching,
    title: "Automated Matching",
    text: "Our AI-driven algorithm pairs candidates with their ideal roles based on skills, culture fit, and academic requirements.",
  },
  {
    icon: iconRealtimeTracking,
    title: "Real-time Tracking",
    text: "Monitor progress from application to final evaluation with granular dashboards for all stakeholders.",
  },
  {
    icon: iconSecureDocuments,
    title: "Secure Documents",
    text: "Enterprise-grade encryption for contracts, NDAs, and compliance certifications with automated reminders.",
  },
];

const STATS = [
  { value: "500+", label: "Universities" },
  { value: "10k+", label: "Global Companies" },
  { value: "1M+", label: "Placements" },
];

const STUDENT_POINTS = [
  {
    title: "One-click Applications",
    text: "Apply to top-tier firms instantly with your verified profile.",
  },
  {
    title: "AI Career Coaching",
    text: "Personalized insights to help you stand out and land the role.",
  },
  {
    title: "Verified Credentials",
    text: "A portable digital record of your internship success.",
  },
];

export default function KaussikInternMS() {
  return (
    <div className="ims-page">

      <header className="ims-navbar">
        <div className="ims-navbar__inner">
          <div className="ims-logo">
            InternMS
            <span className="ims-logo__by">by Kaussik</span>
          </div>
          <div className="ims-navbar__actions">
            <Link to="/login" className="ims-link">
              Login
            </Link>
            <Link to="/register" className="ims-btn ims-btn--dark">
              Register
            </Link>
          </div>
        </div>
      </header>

     
      <section className="ims-hero">
        <img src={heroGradient} alt="" className="ims-hero__bg" aria-hidden="true" />
        <div className="ims-container ims-hero__grid">
          <div className="ims-hero__content">
            <span className="ims-badge">
              <img src={iconSparkle} alt="" />
              Next-Generation Placement OS
            </span>
            <a className="hero-title">
              Seamless<br/>
              Interships. <br/>
              <span >Smarter</span><br/>
              <span>Management.</span>

            </a>
            <div className="hero-line"></div>
            <p>
              Bridging the gap between ambitious talent and global
              opportunities. The definitive operating system for
              universities, students, and world-class employers.
            </p>
            <div className="ims-hero__actions">
              <Link to="/login" className="ims-btn ims-btn--dark">
                Get Started &rarr;
              </Link>
              <button className="ims-btn ims-btn--outline">Book a Demo</button>
            </div>
          </div>

          <div className="ims-hero__visual">
            <img
              src={dashboardPreview}
              alt="InternMS dashboard preview"
              className="ims-hero__image"
            />
            <div className="ims-floating-card">
              <img src={floatingCardShadow} alt="" className="ims-floating-card__shadow" />
              <div className="ims-floating-card__content">
                <span className="ims-floating-card__icon">&#8599;</span>
                <div>
                  <div className="ims-floating-card__label">Success Rate</div>
                  <div className="ims-floating-card__value">+24% Increase</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     
      <section className="ims-stats">
        <div className="ims-container ims-stats__grid">
          {STATS.map((s) => (
            <div className="ims-stat" key={s.label}>
              <div className="ims-stat__value">{s.value}</div>
              <div className="ims-stat__label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

     
      <section className="ims-section">
        <section className="ims-bgcolor">
        <div className="ims-container">
          <div className="ims-section__heading-row">
            <div>
              <h2 className="ims-section-title">Engineered for Efficiency</h2>
              <p className="ims-section-subtitle">
                Complex placement workflows simplified into an intuitive,
                high-speed ecosystem designed for scale.
              </p>
            </div>
            <a href="#features" className="ims-text-link">
              Explore all features &rarr;
            </a>
          </div>

          <div className="ims-features">
            {FEATURES.map((f) => (
              <div className="ims-feature-card" key={f.title}>
                <div className="ims-feature-card__icon">
                  <img src={f.icon} alt="" />
                </div>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
        </section>
      </section>

     
      <section className="ims-section">
        <div className="ims-container ims-audience">
          <div className="ims-audience__content">
            <a className="ims-section-title ims-section-title--left">
              For Students:<br/>
              <span className="ims-hero__accent">Your Career Launchpad.</span>
            </a>

            <ul className="ims-checklist">
              {STUDENT_POINTS.map((p) => (
                <li key={p.title}>
                  <img src={iconCheckmark} alt="" />
                  <div>
                    <strong>{p.title}</strong>
                    <p>{p.text}</p>
                  </div>
                </li>
              ))}
            </ul>

            
            <div className="ims-tabs">
              <button type="button" className="ims-tabs__btn">
                Students
              </button>
              <button type="button" className="ims-tabs__btn">
                Employers
              </button>
              <button type="button" className="ims-tabs__btn">
                Universities
              </button>
            </div>
          </div>

          <div className="ims-audience__visual">
            <img
              src= {officePhoto}
              alt="Team working in a modern collaborative office"
              className="ims-audience__photo"
            />
          </div>
        </div>
      </section>

      
      <footer className="ims-footer">
        <div className="ims-container ims-footer__grid">
          <div>
            <div className="ims-logo ims-logo--light">
              InterMS
              <span className="ims-logo__by ims-logo__by--light">by Kaussik</span>
            </div>
            <p>
              The ultimate platform for managing internships, connecting
              talent, and building the future of work.
            </p>
            <div className="ims-footer__social">
              <img src={iconGlobe} alt="Website" />
              <img src={iconMail} alt="Email" />
            </div>
          </div>

          <div>
            <h5>Product</h5>
            <ul>
              <li>
                <a href="#students">For Students</a>
              </li>
              <li>
                <a href="#employers">For Employers</a>
              </li>
              <li>
                <a href="#universities">For Universities</a>
              </li>
              <li>
                <a href="#pricing">Pricing</a>
              </li>
            </ul>
          </div>

          <div>
            <h5>Company</h5>
            <ul>
              <li>
                <a href="#privacy">Privacy Policy</a>
              </li>
              <li>
                <a href="#terms">Terms of Service</a>
              </li>
              <li>
                <a href="#resources">Resources</a>
              </li>
              <li>
                <a href="#contact">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="ims-container ims-footer__bottom">
          <span>&copy; 2024 InterMS. All rights reserved.</span>
          <span>Made with &hearts; for the future workforce</span>
        </div>
      </footer>
    </div>
  );
}
