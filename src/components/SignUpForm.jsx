import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function SignUpForm() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign Up Data:", formData);
    // Add validation or backend logic here
  };

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <h2>Create Account</h2>
      <p>Sign up with your email and password</p>

      <div className="input-group">
        <MdEmail className="input-icon" />
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="input-group">
        <RiLockPasswordLine className="input-icon" />
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Create password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <span className="input-icon toggle" onClick={handleTogglePassword}>
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </span>
      </div>

      <small>Password must be at least 8 characters</small>

      <button type="submit">Sign Up</button>

      <div className="switch-link">
        Already have an account? <Link to="/">Log In</Link>
      </div>
    </form>
  );
}
