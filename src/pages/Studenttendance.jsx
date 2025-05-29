import React, { useState } from "react";
import Sidebar from "../components/shared/sidebar";
import Header from "../components/Dashboard/Header";
import AttendanceSummary from "../components/Dashboard/AttendanceSummary";
import CourseTable from "../components/Dashboard/CourseTable";
import RecentAttendance from "../components/Dashboard/RecentAttendance";
import "../styles/dashboard/Dashboard.scss";

export default function StudentAttendance() {
  const [query, setQuery] = useState("");

  const stats = [
    { label: "Total Attendance", value: "26/30", note: "Classes" },
    { label: "Overall Percentage", value: "86.7%", note: "Present" },
    { label: "Last Attended", value: "May 13, 2025", note: "Via RFID" },
    { label: "Missed Sessions", value: "4", note: "Classes" },
  ];

  const allCourses = [
    {
      name: "Software Engineering",
      attendance: 90,
      attended: 18,
      total: 20,
      last: "May 13,2025",
      mode: "RFID",
      status: "Present",
    },
    {
      name: "Database Systems",
      attendance: 85,
      attended: 17,
      total: 20,
      last: "May 12,2025",
      mode: "QR",
      status: "Present",
    },
    {
      name: "Computer Networks",
      attendance: 80,
      attended: 16,
      total: 20,
      last: "May 11,2025",
      mode: "RFID",
      status: "Absent",
    },
  ];

  const records = [
    {
      course: "CSE301 Software Engineering",
      time: "May 13 at 10:05 AM",
      mode: "RFID",
      status: "Present",
    },
    {
      course: "CSE305 Database Systems",
      time: "May 12 at 11:15 AM",
      mode: "QR",
      status: "Present",
    },
    {
      course: "CSE309 Computer Networks",
      time: "May 11 at 2:30 PM",
      mode: "RFID",
      status: "Absent",
    },
  ];

  const filteredCourses = allCourses.filter((course) =>
    course.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="dashboard">
      <Sidebar />
      <main className="dashboard__content">
        <Header query={query} setQuery={setQuery} />
        <AttendanceSummary stats={stats} />
        <CourseTable courses={filteredCourses} />
        <RecentAttendance records={records} />
      </main>
    </div>
  );
}
