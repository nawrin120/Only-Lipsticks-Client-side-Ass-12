import React, { useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

import "./Resgister.css";

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const history = useHistory();

  const { registerUser, authError } = useAuth();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLogin = (e) => {
    registerUser(loginData.email, loginData.password, loginData.name, history);
    e.preventDefault();
  };
  return (
    <div className="container text-center my-5">
      <Link to="/">
        <img
          className="header-logo"
          src="https://i.ibb.co/YWBTHwJ/makeup.png"
          alt=""
        />
      </Link>
      <h2 className="banner-title">
        Shades <span className="banner-span">Of</span> Love
      </h2>

      <h5 className="banner-qutes">
        If You Are New User Please <span className="banner-span">Register</span>{" "}
      </h5>
      <div className="row">
        <div className="col-12">
          <img
            className="signin-img"
            src="https://i.ibb.co/WW1tnpD/regis.png"
            alt=""
          />
        </div>
        <div className="col-12 login-form-container">
          <div>
            <div className="login-frm">
              <form onSubmit={handleLogin} className="login-input">
                <input
                  className="login-input-field mb-4"
                  type="text"
                  name="name"
                  onBlur={handleOnBlur}
                  placeholder="Name"
                />

                <input
                  className="login-input-field mb-4"
                  type="email"
                  name="email"
                  onBlur={handleOnBlur}
                  placeholder="Email"
                />

                <input
                  className="login-input-field mb-4"
                  type="password"
                  name="password"
                  onBlur={handleOnBlur}
                  placeholder="Password"
                />

                <button
                  className="login-input-field log-registerBtn my-4"
                  type="submit"
                >
                  Register
                </button>

                {authError && <p>{authError}</p>}

                <p>
                  Alrady Registerd ? Please{" "}
                  <Link className="login-link-btn" to="login">
                    Login
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
