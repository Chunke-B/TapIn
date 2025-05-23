import React, { useState } from "react";
import { Link } from "react-router-dom";

const ResetPasswordForm = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Password reset instructions sent to " + email);
  };

  return (
    <div className="reset-form-container">
      <h2>Reset Your Password</h2>
      <p>Enter your email address to receive reset instructions.</p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Send Reset Link</button>
      </form>
      <div className="back-link">
        Back to <Link to="/">Login</Link>
      </div>
    </div>
  );
};

export default ResetPasswordForm;
