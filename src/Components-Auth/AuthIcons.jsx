import React from "react";

export function ShieldCheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M12 2l8 3v6c0 5-3.5 8.5-8 11-4.5-2.5-8-6-8-11V5l8-3z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 12l2.5 2.5L15.5 9"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CheckCircleIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M7.5 12.5l3 3 6-6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function EyeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M1.5 12S5 5 12 5s10.5 7 10.5 7-3.5 7-10.5 7S1.5 12 1.5 12z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function EyeOffIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M3 3l18 18M10.6 10.6a3 3 0 004.24 4.24M9.9 5.1A10.6 10.6 0 0112 5c7 0 10.5 7 10.5 7a13.3 13.3 0 01-3.1 3.9M6.2 6.9A13.6 13.6 0 001.5 12s3.5 7 10.5 7a10.7 10.7 0 004.2-.85"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ShieldIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M12 2l8 3v6c0 5-3.5 8.5-8 11-4.5-2.5-8-6-8-11V5l8-3z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M12 2.5v18.5" stroke="currentColor" strokeWidth="1" opacity="0.5" />
    </svg>
  );
}

/* ===== Registration role-tab icons (self-contained, no image files needed) ===== */

export function HRIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="8" cy="8" r="3" fill="#ec4899" />
      <circle cx="16" cy="8" r="2.4" fill="#f472b6" />
      <path d="M2 20c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#ec4899" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M14.5 14.3c2.6.4 4.5 2.6 4.5 5.2" stroke="#f472b6" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function MentorIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M12 5c-2-1.3-4.5-2-7-2v14c2.5 0 5 .7 7 2 2-1.3 4.5-2 7-2V3c-2.5 0-5 .7-7 2z" stroke="#3b82f6" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M12 5v14" stroke="#3b82f6" strokeWidth="1.7" />
    </svg>
  );
}

export function InternIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M12 3l10 5-10 5L2 8l10-5z" stroke="#8b5cf6" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M6 10.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-5.5" stroke="#8b5cf6" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

export function CompanyIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="4" y="3" width="16" height="18" rx="1.5" stroke="#14b8a6" strokeWidth="1.7" />
      <path d="M8 7h2M14 7h2M8 11h2M14 11h2M8 15h2M14 15h2" stroke="#14b8a6" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M10 21v-4h4v4" stroke="#14b8a6" strokeWidth="1.7" strokeLinejoin="round" />
    </svg>
  );
}

export function AdminIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="12" cy="8" r="4" fill="#f97316" />
      <path d="M4 20c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="#f97316" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function TargetIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </svg>
  );
}

export function ConnectionIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="6" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="18" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="18" r="2.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 7.5l6 8.5M16 7.5l-6 8.5M8.5 6h7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function TrophyIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M7 4h10v4a5 5 0 01-10 0V4z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M7 5H4v2a3 3 0 003 3M17 5h3v2a3 3 0 01-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M12 13v4M9 20h6M9.5 17h5l.5 3H9l.5-3z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  );
}

export function TrackingIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* Simple, non-trademarked "G" mark for the Google button */
export function GoogleGIcon(props) {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path fill="#4285F4" d="M23 12.27c0-.8-.07-1.57-.2-2.32H12v4.4h6.16a5.27 5.27 0 01-2.28 3.46v2.87h3.7c2.16-2 3.42-4.94 3.42-8.41z" />
      <path fill="#34A853" d="M12 23c3.08 0 5.66-1.02 7.55-2.77l-3.7-2.87c-1.02.69-2.33 1.1-3.85 1.1-2.96 0-5.47-2-6.36-4.68H1.8v2.94A11 11 0 0012 23z" />
      <path fill="#FBBC05" d="M5.64 13.78A6.6 6.6 0 015.28 12c0-.62.11-1.22.36-1.78V7.28H1.8A11 11 0 000 12c0 1.77.43 3.44 1.8 4.72l3.84-2.94z" />
      <path fill="#EA4335" d="M12 5.5c1.68 0 3.18.58 4.37 1.7l3.28-3.28C17.65 2.02 15.08 1 12 1a11 11 0 00-10.2 6.28l3.84 2.94C6.53 7.5 9.04 5.5 12 5.5z" />
    </svg>
  );
}
