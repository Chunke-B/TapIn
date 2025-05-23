import React from "react";
import { FiRefreshCcw } from "react-icons/fi";

const RecentAttendance = ({ records }) => (
  <div className="dashboard__overall">
    <div className="dashboard__recent  ">
      <div className="dashboard__recent-header">
        <h3 className="dashboard__recent--heading ">
          Recent Attendance Records
        </h3>
        <FiRefreshCcw />
      </div>
      <ul>
        {records.map((record, index) => (
          <li key={index} className={`record ${record.status.toLowerCase()}`}>
            <span>
              <strong>{record.course}</strong> <br />
              {record.time}
            </span>
            <span>{record.mode}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default RecentAttendance;
