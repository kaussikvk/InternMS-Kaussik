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
