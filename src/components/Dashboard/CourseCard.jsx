// components/Dashboard/CourseCard.jsx
import React from "react";
import { FiClock } from "react-icons/fi";
import { FaQrcode, FaVideo } from "react-icons/fa";
import "../../styles/dashboard/dash.scss";

const CourseCard = ({ course }) => {
  return (
    <div className="course-card">
      <div className="course-card__header">
        <div className="course-card__header--1">
          <h4 className="course-card__code">{course.code}</h4>
          <h3 className="course-card__title">{course.title}</h3>
        </div>
        <span className={`course-card__attendance ${course.attendanceColor}`}>
          {course.attendance}%
        </span>
      </div>
      <div className="course-card__details">
        <div className="course-card__detail header__top-profile">
          {/* <FiUser /> */}
          <img src="./profile-pic.jpeg" alt="teacher's pic" />
          <span className="span-color">{course.instructor}</span>
        </div>
        <div className="course-card__detail">
          <div className="course-card__detail--next">
            <FiClock />
            <span className="span-color">Next class</span>
          </div>
          <span>{course.nextClass}</span>
        </div>
      </div>
      <div className={course.canJoin ? "actions" : "no-action"}>
        {course.canJoin && (
          <button className="btn btn-primary">
            <FaVideo /> Join Zoom
          </button>
        )}
        <button
          className={`btn ${course.canJoin ? "btn-noScan" : "btn-border"}`}
        >
          <FaQrcode /> Scan QR
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
