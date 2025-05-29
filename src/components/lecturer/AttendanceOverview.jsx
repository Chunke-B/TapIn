// /src/components/lecturer/AttendanceOverview.jsx
import React from "react";
import "../../styles/lecturer/AttendanceOverview.scss";

// src/components/lecturer/AttendanceOverview.jsx

import { FiCalendar, FiGrid } from "react-icons/fi";
import "../../styles/lecturer/AttendanceOverview.scss";

const AttendanceOverview = () => {
  return (
    <div className="attendance-overview">
      <h2>Class Attendance Overview</h2>
      <div className="attendance-controls">
        <select className="course-select">
          <option>All Courses</option>
          <option>Computer Science 101</option>
          <option>Data Structures</option>
          <option>Web Development</option>
        </select>
        <select className="course-select">
          <option>Choose Level</option>
          <option>100</option>
          <option>200</option>
          <option>300</option>
        </select>

        <div className="date-picker">
          <FiCalendar className="icon" />
          <input type="date" placeholder="Select Date" />
        </div>

        <button className="generate-btn">
          <FiGrid className="icon" />
          Generate QR Code
        </button>
      </div>
    </div>
  );
};

export default AttendanceOverview;

// /* AttendanceOverview.scss */
// .attendance-overview {
//   background: #fff;
//   border-radius: 1rem;
//   padding: 1.5rem;
//   margin-bottom: 2rem;
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
// }
// .attendance-overview .overview-top {
//   display: flex;
//   flex-wrap: wrap;
//   align-items: center;
//   gap: 1rem;
// }
// .attendance-overview .overview-top .dropdown,
// .attendance-overview .overview-top .date-picker {
//   flex: 1;
// }
// .attendance-overview .overview-top .qr-button {
//   background: #4f46e5;
//   color: #fff;
//   padding: 0.75rem 1.5rem;
//   border-radius: 0.5rem;
//   border: none;
//   cursor: pointer;
// }
// .attendance-overview .stats {
//   display: flex;
//   justify-content: space-between;
//   margin-top: 1.5rem;
//   flex-wrap: wrap;
// }
// .attendance-overview .stats .stat-card {
//   background: #f9f9f9;
//   border-radius: 1rem;
//   padding: 1rem;
//   text-align: center;
//   flex: 1 1 30%;
//   margin: 0.5rem 0;
// }
// .attendance-overview .stats .stat-card .label {
//   color: #555;
//   margin-bottom: 0.25rem;
// }
// .attendance-overview .stats .stat-card .value {
//   font-weight: bold;
//   font-size: 1.25rem;
// }/*# sourceMappingURL=AttendanceOverview.css.map */
//AttendanceOverview.css.map
// {"version":3,"sources":["AttendanceOverview.scss","AttendanceOverview.css"],"names":[],"mappings":"AA6CA,4BAAA;AACA;EACE,gBAAA;EACA,mBAAA;EACA,eAAA;EACA,mBAAA;EACA,wCAAA;AC5CF;AD8CE;EACE,aAAA;EACA,eAAA;EACA,mBAAA;EACA,SAAA;AC5CJ;AD8CI;;EAEE,OAAA;AC5CN;AD+CI;EACE,mBAAA;EACA,WAAA;EACA,uBAAA;EACA,qBAAA;EACA,YAAA;EACA,eAAA;AC7CN;ADiDE;EACE,aAAA;EACA,8BAAA;EACA,kBAAA;EACA,eAAA;AC/CJ;ADiDI;EACE,mBAAA;EACA,mBAAA;EACA,aAAA;EACA,kBAAA;EACA,aAAA;EACA,gBAAA;AC/CN;ADiDM;EACE,WAAA;EACA,sBAAA;AC/CR;ADkDM;EACE,iBAAA;EACA,kBAAA;AChDR","file":"AttendanceOverview.css"}
