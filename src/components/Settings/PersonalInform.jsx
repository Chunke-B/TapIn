// components/Settings/PersonalInfoForm.jsx
import React from "react";
import "../../styles/Settings/PersonalInfoForm.scss";

export default function PersonalInfoForm({ data, onChange }) {
  return (
    <div className="personal-info">
      <h3 className="personal-info__title">Personal Information</h3>
      {[
        "Full Name",
        "Email Address",
        "Phone Number",
        "Student ID",
        "Date of Birth",
      ].map((label, i) => {
        const key = label.toLowerCase().replace(/\s+/g, "-"); // e.g., full-name

        const inputClass =
          label === "Student ID"
            ? "personal-info__input personal-info__input--readonly"
            : "personal-info__input";

        return (
          <div key={i} className={`personal-info__group ${key}`}>
            <label htmlFor={key}>{label}</label>
            <input
              id={key}
              className={inputClass}
              type={label === "Date of Birth" ? "date" : "text"}
              value={data[label]}
              onChange={(e) => onChange(label, e.target.value)}
              readOnly={label === "Student ID"}
            />
          </div>
        );
      })}
    </div>
  );
}
