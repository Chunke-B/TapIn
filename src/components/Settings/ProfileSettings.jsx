import React from "react";
import { FiCamera } from "react-icons/fi";
import "../../styles/Settings/ProfileSettings.scss";

export default function ProfileSettings({ profilePic, onPhotoUpload }) {
  return (
    <div className="profile-settings">
      <div className="profile-settings__avatar-container">
        <div className="profile-settings__avatar">
          <img
            src={profilePic}
            alt="Profile"
            className="profile-settings__image"
          />
          <label className="profile-settings__camera-icon">
            <FiCamera />
            <input type="file" hidden onChange={onPhotoUpload} />
          </label>
        </div>

        <label className="profile-settings__upload-button">
          Upload New Photo
          <input type="file" hidden onChange={onPhotoUpload} />
        </label>
      </div>
    </div>
  );
}
