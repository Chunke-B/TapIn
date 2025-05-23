import React from "react";
// import "./LoginPage.css";

export default function Logo() {
  return (
    <div className="login-header">
      {/* Header */}

      <img src="/lmu-logo.jpeg" alt="University Logo" className="logo" />
      <LogoText>
        <h2>Landmark Metropolitan University</h2>
        <p className="subheading">Student Attendance Portal</p>
      </LogoText>
    </div>
  );
}

function LogoText({ children }) {
  return <div>{children}</div>;
}
