import React from "react";
import "./login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login__content">
      <div className="login">
        <h2>Login</h2>
        <form className="login__form">
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <Link className="login__link" to="/"><button>Login</button></Link>
          <p>
            No accaunt? <Link to="/register">Register</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
