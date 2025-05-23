import React from "react";
import { FiExternalLink } from "react-icons/fi";
import { FaQrcode, FaRss } from "react-icons/fa"; // QR and RFID icons

export default function CourseTable({ courses }) {
  return (
    <div className="dashboard__overall">
      <div className="dashboard__table">
        <h3 className="dashboard__table--heading">Course Attendance</h3>
        <table>
          <thead>
            <tr>
              <th>Course Name</th>
              <th>Attendance %</th>
              <th>Classes Attended</th>
              <th>Total Classes</th>
              <th>Last Attended</th>
              <th>Mode</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, index) => (
              <tr key={index}>
                <td>{course.name}</td>
                <td>
                  <div className="progress-bar">
                    <div style={{ width: `${course.attendance}%` }} />
                  </div>
                  {course.attendance}%
                </td>
                <td>{course.attended}</td>
                <td>{course.total}</td>
                <td>{course.last}</td>
                <td className="mode-icons">
                  {course.mode === "RFID" ? (
                    <>
                      <FaRss className="icon" />
                      <span>RFID</span>
                    </>
                  ) : (
                    <>
                      <FaQrcode className="icon" />
                      <span>QR</span>
                    </>
                  )}
                </td>
                <td className={`status ${course.status.toLowerCase()}`}>
                  {/* <FaCircle className="status-icon" /> */}
                  <span>{course.status}</span>
                </td>
                <td>
                  <FiExternalLink className="dashboard__icons" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
