import React, { useState } from "react";
import { FiSearch, FiBell, FiChevronDown } from "react-icons/fi";
//import Header from "../components/shared/Lecturer-Header";
import AttendanceOverview from "../components/lecturer/AttendanceOverview";
import StudentAttendanceTable from "../components/lecturer/StudentAttendance";

import LecturerSidebar from "../components/lecturer/LecturerSidebar";
//import AttendanceSummary from "../components/Dashboard/AttendanceSummary";
import AttendanceSummaryLecturer from "../components/lecturer/AttendanceSummary-Lecturer";

const LecturerDashboard = () => {
  // const [searchItem, setSearchItem] = useState("");
  // const stats = [
  //   {
  //     label: "Today's Attendance",
  //     value: "85%",
  //     graphic: <div className="line-graph"></div>,
  //   },
  //   {
  //     label: "Weekly Average",
  //     value: "92%",
  //     graphic: <div className="bar-graph"></div>,
  //   },
  //   {
  //     label: "Total Students",
  //     value: "156",
  //     graphic: null,
  //   },
  // ];
  // const filteredCourses = stats.filter(
  //   (course) =>
  //     course.title.toLowerCase().includes(searchItem.toLowerCase()) ||
  //     course.code.toLowerCase().includes(searchItem.toLowerCase())
  // );
  return (
    <div className="dashboard">
      <LecturerSidebar />
      <div className="dashboard__content">
        <div className="header">
          <div className="header__top">
            <div className="header__top-left">
              <FiSearch className="header__top-search--icon" />
              <input type="text" placeholder="Search name..." />
            </div>
            <div className="header__top-right">
              <FiBell className="header__icon bell" />
              <div className="header__icon-1">1</div>

              <div className="header__top-profile">
                <img src="/profile-pic.jpeg" alt="Profile" />
                <span>John Smith</span>
                <FiChevronDown />
              </div>
            </div>
          </div>
        </div>
        <AttendanceOverview />

        <AttendanceSummaryLecturer />
        <StudentAttendanceTable />
      </div>
    </div>
  );
};

export default LecturerDashboard;
