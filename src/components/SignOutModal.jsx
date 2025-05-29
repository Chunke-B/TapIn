// components/SignOutModal.jsx
import React from "react";
import { FiLogOut } from "react-icons/fi";
import "../styles/Authentication/SignOutModal.scss";

export default function SignOutModal({ onConfirm, onCancel }) {
  return (
    <div className="signout-modal-overlay">
      <div className="signout-modal">
        <div className="signout-icon">
          <FiLogOut size={40} />
        </div>
        <h2>Sign Out</h2>
        <p className="primary-text">Are you sure you want to sign out?</p>
        <p className="secondary-text">
          You will need to sign in again to access your account.
        </p>
        <div className="button-group">
          <button className="signout-btn" onClick={onConfirm}>
            Sign Out
          </button>
          <button className="cancel-btn" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
