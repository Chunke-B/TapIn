// src/components/lecturer/AttendanceSummary.jsx

import React from "react";
import "../../styles/lecturer/AttendanceSummary.scss";

export default function AttendanceSummaryLecturer() {
  const stats = [
    {
      label: "Today's Attendance",
      value: "85%",
      graphic: (
        <svg width="100" height="40">
          <polyline
            fill="none"
            stroke="#0066ff"
            strokeWidth="3"
            points="0,30 20,10 40,20 60,5 80,25 100,10"
          />
        </svg>
      ),
    },
    {
      label: "Weekly Average",
      value: "92%",
      graphic: (
        <svg width="90" height="50">
          <rect x="5" y="10" width="14" height="30" fill="#0066ff" />
          <rect x="25" y="5" width="14" height="35" fill="#0066ff" />
          <rect x="45" y="20" width="14" height="20" fill="#0066ff" />
          <rect x="65" y="15" width="14" height="25" fill="#0066ff" />
        </svg>
      ),
    },
    {
      label: "Total Students",
      value: "156",
      graphic: null,
    },
  ];

  return (
    <div className="attendance-summary">
      {stats?.map((item, index) => (
        <div key={index} className="summary-card">
          <p className="label">{item.label}</p>
          <div className="value-group">
            <h3 className="value">{item.value}</h3>
            {item.graphic}
          </div>
        </div>
      ))}
    </div>
  );
}
