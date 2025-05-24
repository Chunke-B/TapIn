import React from "react";
import "../../styles/Settings/AccountSettings.scss";

export default function AccountSettings({
  onPasswordChange,
  notifications,
  toggleNotification,
  onSave,
}) {
  return (
    <div className="account-settings">
      <h3 className="account-settings__title">Account Settings</h3>

      <div className="account-settings__group">
        <label>Password</label>
        <div className="account-settings__password-wrapper">
          <input
            type="password"
            value="********"
            readOnly
            className="account-settings__password-input"
          />
          <button
            className="account-settings__change-password"
            onClick={onPasswordChange}
          >
            Change Password →
          </button>
        </div>
      </div>

      <h4 className="account-settings__subtitle">Notification Preferences</h4>
      {["Email", "SMS"].map((type) => (
        <div key={type} className="account-settings__notification">
          <label>{type} Notifications</label>
          <label className="switch">
            <input
              type="checkbox"
              checked={notifications[type.toLowerCase()]}
              onChange={() => toggleNotification(type.toLowerCase())}
            />
            <span className="slider"></span>
          </label>
        </div>
      ))}
    </div>
  );
}
