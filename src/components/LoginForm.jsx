import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaLock, FaUniversity, FaGraduationCap } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";

function LoginForm() {
  const [matricNumber, setMatricNumber] = useState("");
  const [password, setPassword] = useState("");
  const [school, setSchool] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log({ matricNumber, password, school });
  };

  return (
    <form className="login-form" onSubmit={handleLogin}>
      <div className="login-form__intro">
        <h3 className="login-form__intro--text">Sign in to your account</h3>
        {/* <p className="login-form__intro--text">
          Enter your credentials to access the attendance portal
        </p> */}
      </div>

      <label className="labels">Matric Number</label>
      <div className="inputText">
        <FaGraduationCap className="inputText__icons" />
        <input
          type="text"
          placeholder="Enter your matric number"
          value={matricNumber}
          onChange={(e) => setMatricNumber(e.target.value)}
        />
      </div>

      <label className="labels">Password</label>
      <div className="inputText">
        <FaLock className="inputText__icons" />

        <input
          type={showPassword ? "text" : "password"}
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <span
          className="toggle-password"
          onClick={() => setShowPassword(!showPassword)}
        >
          <IoEyeOutline className="inputText__icons" />
        </span>
      </div>

      <label className="labels">School/Faculty</label>
      <div className="inputText">
        <FaUniversity className="inputText__icons" />
        <select value={school} onChange={(e) => setSchool(e.target.value)}>
          <option value="">Select your school</option>
          <option value="science">School of Medical Science</option>
          <option value="engineering">School of Engineering</option>
          <option value="agriculture">School of Agriculture</option>
        </select>
      </div>

      <div className="form-options">
        <label className="checkbos">
          <input type="checkbox" className="checkbos-style" /> Remember me
        </label>
        <Link to="/reset" className="form-options__links">
          Forgot password?
        </Link>
      </div>

      <Link to="/dashboard " className="btn-1">
        Sign In
      </Link>

      <span className="login-form__signup">
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </span>
      <div className="straight-line"></div>

      <p className="login-form__signup">
        Need help? <Link to="/support">Contact support</Link>
      </p>
    </form>
  );
}

export default LoginForm;
