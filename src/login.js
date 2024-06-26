import React, { useState, useRef, useEffect } from "react";
import Form from "react-validation/build/form";
import CheckButton from "react-validation/build/button";
//import { Link } from "react-router-dom";
import AuthService from "./services/auth.service";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import './loginpage.css';
import wallpaper from "../src/assets/img/dashboards/wallpaper.jpg";
import loginlogo from "../src/assets/img/dashboards/loginlogo.png";

const required = (value) => {
  if (!value) {
    return (
      <div className="invalid-feedback d-block">This field is required!</div>
    );
  }
};

const Loginpage = () => {
  useEffect(() => {
    document.title = "Admin Login";
    const auth = AuthService.getCurrentUser();
    if (auth) {
       window.location.href = "/";
    }
  }, []);

  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [phoneCode, setPhoneCode] = useState("254");
  const [showCountryCode, setShowCountryCode] = useState(false);
  const [showEmailField, setShowEmailField] = useState(true);
  const [passwordType, setPasswordType] = useState("password");

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
    if (/^\d+$/.test(username)) {
      setShowCountryCode(true);
      setShowEmailField(false);
    } else {
      setShowCountryCode(false);
      setShowEmailField(true);
    }
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const togglePassword = () => {
    setPasswordType(passwordType === "password" ? "text" : "password");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);
    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      const loginUsername = showEmailField ? username : `${phoneCode}${username}`;
      AuthService.login(loginUsername, password).then(
        () => {
          window.location.href = '/';
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setLoading(false);
          setMessage(resMessage);
        }
      );
    } else {
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid login-container">
      <div className="row login-row">
        <div className="col-md-6 login-form-section">
          {/* window.location.href={"/"} */}
            <img
              src={loginlogo}
              className="main_logo"
              alt="Logo"
            />
          <h3 className="mt-4">Sign In</h3>
          <p>Please login to your account</p>
          {message && (
            <div className="alert alert-danger" role="alert">
              {message}
            </div>
          )}

          <Form onSubmit={handleLogin} className="mt-4" ref={form}>
            {showCountryCode && (
              <div className="phone-input-group">
                <PhoneInput
                  country={"ke"}
                  value={phoneCode}
                  defaultCountry="US"
                  onChange={setPhoneCode}
                />
                <input
                  type="tel"
                  maxLength={10}
                  name="username"
                  value={username}
                  required
                  autoFocus
                  onChange={onChangeUsername}
                  validations={[required]}
                  placeholder="Enter Phone Number*"
                />
              </div>
            )}
            {showEmailField && (
              <div className="form-group">
                <label>Username</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Your Username"
                  name="username"
                  value={username}
                  required
                  autoFocus
                  onChange={onChangeUsername}
                  validations={[required]}
                />
              </div>
            )}
            <div className="form-group">
              <label>Password</label>
              <input
                type={passwordType}
                className="form-control"
                placeholder="Enter Your Password"
                name="password"
                value={password}
                required
                onChange={onChangePassword}
                validations={[required]}
              />
              <button type="button" className="password-toggle-btn" onClick={togglePassword}>
                {passwordType === "password" ? "Show" : "Hide"}
              </button>
            </div>
            <div className="form-group d-grid">
              <button className="btn btn-primary btn-block" disabled={loading}>
                {loading && <span className="spinner-border spinner-border-sm"></span>}
                <span>Login</span>
              </button>
            </div>
            <CheckButton style={{ display: "none" }} ref={checkBtn} />
          </Form>
        </div>
        <div className="col-md-6 login-image-section">
          <img
            src={wallpaper}
            className="img-fluid"
            alt="Login Illustration"
          />
        </div>
      </div>
    </div>
  );
};

export default Loginpage;
