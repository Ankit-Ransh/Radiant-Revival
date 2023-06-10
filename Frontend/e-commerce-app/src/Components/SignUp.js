import React, { useEffect, useState } from "react";
import "./Login.css";

export default function SignUp() {
  const [user, setUser] = useState({
    name: "",
    username: "",
    address: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const [togglePassword, setTogglePassword] = useState(false);
  const [toggleConfirmPassword, setToggleConfirmPassword] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setFormErrors(validate(user));
    setIsSubmit(true);
  }

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(user);
    }
  }, [formErrors, isSubmit, user]);

  function validate(users) {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const phoneRegex = /^\+?\d{1,3}[-.\s]?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;

    if (users.name === "") {
      errors.name = "Name is required!";
    }
    if (users.username === "") {
      errors.username = "Username is required!";
    }
    if (users.address === "") {
      errors.address = "Address is required!";
    }
    if (users.phoneNumber === "") {
      errors.phoneNumber = "Phone Number is required!";
    } else if (!phoneRegex.test(users.phoneNumber)) {
      errors.phoneNumber = "Invalid Phone Number!";
    }

    if (users.email === "") {
      errors.email = "Email is required!";
    } else if (!regex.test(users.email)) {
      errors.email = "This is not a valid email format!";
    }

    if (users.password === "" || users.confirmPassword === "") {
      errors.password = "Password cannot be empty!";
    } else if (users.password !== users.confirmPassword) {
      errors.password = "Passwords do not match!";
    }

    return errors;
  }

  function showPassword() {
    let initialPasswordState = togglePassword;
    setTogglePassword(!initialPasswordState);
  }

  function showConfirmPassword() {
    let initialPasswordState = toggleConfirmPassword;
    setToggleConfirmPassword(!initialPasswordState);
  }

  return (
    <>
      {/* Signup container  */}

      <div className="LoginPageContainer">
        <div className="LoginPageInnerContainer">
          <div className="ImageContianer">
            <img
              src={require("./images/login_left.png")}
              alt="Login left"
              className="GroupImage"
            />
          </div>
          <div className="LoginFormContainer">
            <div className="LoginFormInnerContainer">
              <div className="LogoContainer">
                <img
                  src={require("./images/login_in_logo.png")}
                  className="logo"
                  alt="login-logo"
                />
              </div>
              <header className="header">Sign Up</header>
              <header className="subHeader">
                Welcome to <b>The Inventory Emporium!</b> Please Enter your
                Details
              </header>

              {Object.keys(formErrors).length === 0 && isSubmit ? (
                <div className="alert alert-info" role="alert">
                  Account Created Successfully
                </div>
              ) : (
                ""
              )}

              {/* Form  */}
              <form onSubmit={handleSubmit}>
                {/* <!-- Name --> */}
                <div className="inputContainer">
                  <label className="label" htmlFor="name">
                    <img
                      src={require("./images/name.png")}
                      className="labelIcon"
                      alt="name-logo"
                    />
                    <span>Name*</span>
                  </label>
                  <input
                    type="text"
                    className="input"
                    placeholder="Enter your Name"
                    name="name"
                    id="name"
                    value={user.name}
                    onChange={handleChange}
                  />
                </div>

                {/* Display Error Message  */}
                {formErrors.name && (
                  <div className="alert alert-danger" role="alert">
                    {formErrors.name}
                  </div>
                )}

                {/* <!-- Username --> */}
                <div className="inputContainer">
                  <label className="label" htmlFor="username">
                    <img
                      src={require("./images/username.png")}
                      className="labelIcon"
                      alt="username-logo"
                    />
                    <span>User Id*</span>
                  </label>
                  <input
                    type="text"
                    className="input"
                    placeholder="Enter your User Name"
                    name="username"
                    value={user.username}
                    id="username"
                    onChange={handleChange}
                  />
                </div>

                {/* Display Error Message  */}
                {formErrors.username && (
                  <div className="alert alert-danger" role="alert">
                    {formErrors.username}
                  </div>
                )}

                {/* <!-- Address  --> */}
                <div className="inputContainer">
                  <label className="label" htmlFor="address">
                    <img
                      src={require("./images/address.png")}
                      className="labelIcon"
                      alt="address-logo"
                    />
                    <span>Address*</span>
                  </label>
                  <input
                    type="textarea"
                    className="input"
                    placeholder="Enter your Address"
                    name="address"
                    value={user.address}
                    id="address"
                    onChange={handleChange}
                  />
                </div>

                {/* Display Error Message  */}
                {formErrors.address && (
                  <div className="alert alert-danger" role="alert">
                    {formErrors.address}
                  </div>
                )}

                {/* <!-- Phone Number  --> */}
                <div className="inputContainer">
                  <label className="label" htmlFor="phoneNumber">
                    <img
                      src={require("./images/phone_number.png")}
                      className="labelIcon"
                      alt="phone-logo"
                    />
                    <span>Phone Number*</span>
                  </label>
                  <input
                    type="tel"
                    className="input"
                    placeholder="Enter your Phone Number"
                    name="phoneNumber"
                    value={user.phoneNumber}
                    id="phoneNumber"
                    onChange={handleChange}
                  />
                </div>

                {/* Display Format  */}
                {!formErrors.phoneNumber && formErrors.length && <div className="alert alert-warning" role="alert">
                    (Country Code) Phone Number
                </div>}

                {/* Display Error Message  */}
                {formErrors.phoneNumber && (
                  <div className="alert alert-danger" role="alert">
                    {formErrors.phoneNumber}
                  </div>
                )}

                {/* <!-- Email  --> */}
                <div className="inputContainer">
                  <label className="label" htmlFor="email">
                    <img
                      src={require("./images/login_email.png")}
                      className="labelIcon"
                      alt="email-logo"
                    />
                    <span>Email Address*</span>
                  </label>
                  <input
                    type="email"
                    className="input"
                    placeholder="Enter your Email Address"
                    name="email"
                    value={user.email}
                    id="email"
                    onChange={handleChange}
                  />
                </div>

                {/* Display Error Message  */}
                {formErrors.email && (
                  <div className="alert alert-danger" role="alert">
                    {formErrors.email}
                  </div>
                )}

                {/* <!-- Password --> */}
                <div className="inputContainer">
                  <label className="label" htmlFor="password">
                    <img
                      src={require("./images/login_pass.png")}
                      className="labelIcon"
                      alt="password-logo"
                    />
                    <span>Password*</span>
                  </label>
                  <input
                    type={togglePassword ? "text" : "password"}
                    className="input"
                    placeholder="Enter your Password"
                    name="password"
                    value={user.password}
                    id="password"
                    onChange={handleChange}
                  />
                </div>

                {/* Display Error Message  */}
                {formErrors.password && (
                  <div className="alert alert-danger" role="alert">
                    {formErrors.password}
                  </div>
                )}

                {/* <!-- show password --> */}
                <div className="OptionsContainer">
                  <div className="checkboxContainer">
                    <input
                      type="checkbox"
                      id="show_password"
                      className="checkbox"
                      onClick={showPassword}
                    />
                    <label htmlFor="show_password">Show Password</label>
                  </div>
                </div>

                {/* <!-- confirm password  --> */}
                <div className="inputContainer">
                  <label className="label" htmlFor="confirmPassword">
                    <img
                      src={require("./images/login_pass.png")}
                      className="labelIcon"
                      alt="password-logo"
                    />
                    <span>Confirm Password*</span>
                  </label>
                  <input
                    type={toggleConfirmPassword ? "text" : "password"}
                    className="input"
                    placeholder="Confirm your Password"
                    name="confirmPassword"
                    value={user.confirmPassword}
                    id="confirmPassword"
                    onChange={handleChange}
                  />
                </div>

                {/* Display Error Message  */}
                {formErrors.confirmPassword && (
                  <div className="alert alert-danger" role="alert">
                    {formErrors.confirmPassword}
                  </div>
                )}

                <div className="OptionsContainer">
                  <div className="checkboxContainer">
                    <input
                      type="checkbox"
                      id="show_confirm_password"
                      className="checkbox"
                      onClick={showConfirmPassword}
                    />
                    <label htmlFor="show_confirm_password">Show Password</label>
                  </div>
                </div>

                <button className="LoginButton" type="submit">
                  Sign Up
                </button>

                <header className="subHeader">
                  <p>
                    Already a member?
                    <a
                      className="btn btn-outline-dark mx-1 my-2"
                      href="/"
                      role="button"
                      id="direct_login"
                    >
                      Login
                    </a>
                  </p>
                </header>
              </form>
              {/* Form Ends */}
            </div>
          </div>
        </div>
      </div>
      {/* Container Ends  */}
    </>
  );
}
