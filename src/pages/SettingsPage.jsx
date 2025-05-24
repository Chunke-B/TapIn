// pages/SettingsPage.jsx
import React, { useState } from "react";
import Sidebar from "../components/shared/sidebar";
import ProfileSettings from "../components/Settings/ProfileSettings";
import PersonalInfoForm from "../components/Settings/PersonalInform";
import AccountSettings from "../components/Settings/AccountSettings";
import "../styles/Settings/SettingsPage.scss";

export default function SettingsPage() {
  const [profilePic, setProfilePic] = useState("/profile-pic.jpeg");
  const [personalInfo, setPersonalInfo] = useState({
    "Full Name": "Sarah Johnson",
    "Email Address": "sarah.johnson@university.edu",
    "Phone Number": "+1 (555) 123-4567",
    "Student ID": "STU2024001",
    "Date of Birth": "1995-06-15",
  });
  const [notifications, setNotifications] = useState({
    email: false,
    sms: false,
  });

  const handlePhotoUpload = (e) => {
    const file = URL.createObjectURL(e.target.files[0]);
    setProfilePic(file);
  };

  const handleChange = (field, value) => {
    setPersonalInfo((prev) => ({ ...prev, [field]: value }));
  };

  const toggleNotification = (type) => {
    setNotifications((prev) => ({ ...prev, [type]: !prev[type] }));
  };

  return (
    <div className="settings-page">
      <Sidebar />
      <div className="settings-container">
        <ProfileSettings
          profilePic={profilePic}
          onPhotoUpload={handlePhotoUpload}
        />
        <PersonalInfoForm data={personalInfo} onChange={handleChange} />
        <AccountSettings
          notifications={notifications}
          toggleNotification={toggleNotification}
          onPasswordChange={() => alert("Redirect to password change page")}
        />
        <button className="save-btn">Save Changes</button>
      </div>
    </div>
  );
}
