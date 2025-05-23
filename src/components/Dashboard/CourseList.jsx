import React from "react";
import CourseCard from "./CourseCard";

export default function CourseList({ courses }) {
  return (
    <div className="course-list">
      {courses === 0 ? (
        <p className="course-list__empty">No matching Items </p>
      ) : (
        courses.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))
      )}
    </div>
  );
}
