import React from "react";
import {
  FaBookOpen,
  FaUserCheck,
  FaCalendarAlt,
  FaClock,
} from "react-icons/fa";

export default function StatsOverview() {
  return (
    <>
      <div className="stats-overview">
        <div className="stat-card">
          <div className="stat-card__icon">
            <FaBookOpen />
          </div>
          <div>
            <p className="stat-card__text--1">Active Courses</p>
            <strong className="stat-card__text--2">6 Courses</strong>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-card__icon">
            <FaUserCheck />
          </div>

          <div>
            <p className="stat-card__text--1">Overall Attendance</p>
            <strong className="stat-card__text--2">85% Present</strong>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-card__icon">
            <FaCalendarAlt />
          </div>
          <div>
            <p className="stat-card__text--1">Today's Classes</p>
            <strong className="stat-card__text--2">3 Classes</strong>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-card__icon">
            <FaClock />
          </div>
          <div>
            <p className="stat-card__text--1">Next Class</p>
            <strong className="stat-card__text--2">In 45 mins</strong>
          </div>
        </div>
      </div>
      {/* <Stat icon={<FaClock />}>
        <p className="stat-card__text--1">Next Class</p>
        <strong className="stat-card__text--2">In 45 mins</strong>
      </Stat> */}
    </>
  );
}

// function Stat({ icon, children }) {
//   return (
//     <div className="stat-card">
//       <div className="stat-card__icon">{icon}</div>
//       <div>{children}</div>
//     </div>
//   );
// }
