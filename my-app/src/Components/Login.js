import React from "react";
import { NavLink } from "react-router-dom";
import imga from "../img/login.png";

const Login = () => {
  return (
    <>
      <section className="login">
        <div className="container mt-5">
          <div className="login-content">
            <div className="login-box">
              <h2 className="form-title">Login</h2>

              <form className="login-form" id="login-form">

                <div className="form-group">
                  <label htmlFor="email">
                    <i className="bi bi-person-fill"></i>
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Your registered email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">
                    <i className="bi bi-key-fill"></i>
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Your password"
                  />
                </div>
                <div className="form-btn">
                  <input
                    type="submit"
                    name="signin"
                    id="signin"
                    className="login-user"
                    value="Log in"
                  />
                  <button>
                    <NavLink
                      to="/contact"
                      className="signup-image-link"
                      style={{ color: "#fff"}}
                    >
                      Create an Account
                    </NavLink>
                  </button>
                </div>
              </form>
              <div className="login-images">
                <figure>
                  <img src={imga} alt="" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
