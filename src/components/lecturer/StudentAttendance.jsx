// /src/components/lecturer/StudentAttendanceTable.jsx
import React from "react";
import { FaEdit } from "react-icons/fa";
import "../../styles/lecturer/StudentTable.scss";

const students = [
  {
    name: "Alice Johnson",
    matric: "CS2021001",
    status: "Present",
    time: "10:05 AM",
    mode: "RFID",
  },
  {
    name: "Bob Smith",
    matric: "CS2021002",
    status: "Absent",
    time: "-",
    mode: "-",
  },
  {
    name: "Carol Williams",
    matric: "CS2021003",
    status: "Present",
    time: "10:02 AM",
    mode: "QR",
  },
  {
    name: "David Brown",
    matric: "CS2021004",
    status: "Present",
    time: "10:08 AM",
    mode: "RFID",
  },
  {
    name: "Eva Davis",
    matric: "CS2021005",
    status: "Present",
    time: "10:01 AM",
    mode: "QR",
  },
];

const StudentAttendanceTable = () => {
  return (
    <div className="attendance-table">
      <h2>Student Attendance</h2>
      <table>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Matric Number</th>
            <th>Status</th>
            <th>Time</th>
            <th>Mode</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.matric}</td>
              <td
                className={student.status === "Present" ? "present" : "absent"}
              >
                {student.status}
              </td>
              <td>{student.time}</td>
              <td>{student.mode}</td>
              <td>
                <FaEdit />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="export-buttons">
        <button className="export">Export PDF</button>
        <button className="export">Export CSV</button>
      </div>
    </div>
  );
};

export default StudentAttendanceTable;
