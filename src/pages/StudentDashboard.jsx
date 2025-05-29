import React, { useState } from "react";
import StatsOverview from "../components/Dashboard/StatsOverview";
import CourseList from "../components/Dashboard/CourseList";
//import SearchFilter from "../components/Dashboard/SearchFilter";
import "../styles/dashboard/dash.scss";
import Sidebar from "../components/shared/sidebar";
import { FiSearch, FiBell, FiChevronDown } from "react-icons/fi";

export default function StudentDashboard() {
  const [searchItem, setSearchItem] = useState("");
  const courses = [
    {
      code: "CSC401",
      title: "Web Development",
      instructor: "Dr. Sarah Johnson",
      nextClass: "Thursday 10:30 AM",
      attendance: 85,
      attendanceColor: "green",
      canJoin: true,
    },
    {
      code: "CSC402",
      title: "Data Structures",
      instructor: "Prof. Michael Chen",
      nextClass: "Thursday 2:00 PM",
      attendance: 75,
      attendanceColor: "orange",
      canJoin: false,
    },
    {
      code: "CSC403",
      title: "Software Engineering",
      instructor: "Dr. Emily Brown",
      nextClass: "Friday 9:00 AM",
      attendance: 92,
      attendanceColor: "green",
      canJoin: true,
    },
    {
      code: "CSC403",
      title: "System Modeling",
      instructor: "Dr. Emily Brown",
      nextClass: "Friday 9:00 AM",
      attendance: 60,
      attendanceColor: "orange",
      canJoin: false,
    },
    {
      code: "CSC403",
      title: "Software Engineering",
      instructor: "Dr. Emily Brown",
      nextClass: "Friday 9:00 AM",
      attendance: 92,
      attendanceColor: "green",
      canJoin: true,
    },

    // add more courses as needed
  ];

  const filteredCourses = courses.filter(
    (course) =>
      course.title.toLowerCase().includes(searchItem.toLowerCase()) ||
      course.code.toLowerCase().includes(searchItem.toLowerCase())
  );
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard__content">
        <div className="header">
          <div className="header__top">
            <div className="header__top-left">
              <FiSearch className="header__top-search--icon" />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchItem}
                onChange={(e) => setSearchItem(e.target.value)}
              />
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
        <h2 className="dashboard__title">Welcome back, John</h2>
        <StatsOverview />

        <div className="dashboard__courses-header">
          <h3>My Courses</h3>
          {/* <SearchFilter /> */}
        </div>

        <CourseList key={courses.code} courses={filteredCourses} />
      </div>
    </div>
  );
}
