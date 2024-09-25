import React from "react";
import "./register.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="login__content">
      <div className="login">
        <h2>Registration</h2>
        <form className="login__form">
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm password" />
          <Link className="login__link" to="/">
            <button>Register</button>
          </Link>
          <p>
          Have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
