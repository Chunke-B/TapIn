import React from "react";

export default function AttendanceSummary({ stats }) {
  return (
    <div className="dashboard__summary">
      {stats.map((item, index) => (
        <div className="dashboard__card" key={index}>
          <h3>{item.label}</h3>
          <p>{item.value}</p>
          <small>{item.note}</small>
        </div>
      ))}
    </div>
  );
}
