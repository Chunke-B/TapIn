import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import ResetPasswordPage from "./pages/ResetPasswordPage.jsx";
import SettingsPage from "./pages/SettingsPage.jsx";
//import StudentDashboard from "./pages/StudentDashboard.jsx";
import "./scss/style.scss";
import StudentAttendance from "./pages/Studenttendance.jsx";
import StudentDashboard from "./pages/StudentDashboard.jsx";
import LogOutPage from "./pages/LogOutPage.jsx";
import LecturerDashboard from "./pages/LecturerDashboard.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/reset" element={<ResetPasswordPage />} />
        <Route path="/attendance" element={<StudentAttendance />} />
        <Route path="/dashboard" element={<StudentDashboard />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/logout" element={<LogOutPage />} />
        <Route path="/lecturer/dashboard" element={<LecturerDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
