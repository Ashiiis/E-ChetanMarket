import React, { useContext, useState } from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import "./Navbar.css"; // Import the CSS for styling
import menu from "/src/assets/menu.svg";
import profile from "/src/assets/profile.svg";
import bell from "/src/assets/bell.svg";
import order from "/src/assets/order.svg";
import search from "/src/assets/search.svg";
import { TaskContext } from "../GoodToHave/CheckList/TaskContext";
import Checklist from "../GoodToHave/CheckList/Checklist"
const Alert = ({ message, type }) => {
  return (
    <div className={`alert ${type}`}>
      {message}
    </div>
  );
};

const Navbar = ({toggleList}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSignupPopup, setShowSignupPopup] = useState(false);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [showOtpPopup, setShowOtpPopup] = useState(false);
  const {count} = useContext(TaskContext);
  const [otp, setOtp] = useState("");
  const [alert, setAlert] = useState({ message: "", type: "", show: false }); // Alert state
  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleLogout = () => {
    setIsLoggedIn(false); // Set logged-in status to false
    showAlert("You are logged out. Please log in to continue.", "error");
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://authentic-website.onrender.com/api/register",
        userDetails
      );
      alert("Signup successful! Please verify your OTP.");
      setShowSignupPopup(false);
      setShowOtpPopup(true);
    } catch (error) {
      console.error("Signup failed:", error);
      alert("Signup failed. Please try again.");
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const isValid = true; // Replace with your login validation logic
    if (isValid) {
      setIsLoggedIn(true); // Set logged-in status to true
      setShowLoginPopup(false); // Close the popup
      showAlert("You are now logged in!", "success");
    } else {
      showAlert("Login failed. Please try again.", "error");
    }
  };

  const showAlert = (message, type) => {
    setAlert({ message, type, show: true });
    setTimeout(() => {
      setAlert({ message: "", type: "", show: false });
    }, 2000);
  };

  const handleOtpSend = async () => {
    try {
      await axios.post(
        "https://authentic-website.onrender.com/api/login/otp-login/send-otp",
        { email: userDetails.email }
      );
      alert("OTP sent to your email.");
    } catch (error) {
      console.error("Failed to send OTP:", error);
      alert("Failed to send OTP. Please try again.");
    }
  };

  const handleOtpVerify = async () => {
    try {
      const response = await axios.post(
        "https://authentic-website.onrender.com/api/login/otp-login/verify-otp",
        { email: userDetails.email, otp }
      );
      alert("OTP verified successfully!");
      setIsLoggedIn(true);
      setShowOtpPopup(false);
    } catch (error) {
      console.error("OTP verification failed:", error);
      alert("OTP verification failed. Please try again.");
    }
  };
  

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar1">
        {/* Left Section */}
        <div className="navbar-left">
          <button className="menu-icon">
            <img src={menu} alt="Menu Icon" />
          </button>
          <span className="navbar-title">Chetan Market</span>
        </div>

        {/* Center Section (Search Bar) */}
        <div className="navbar-center">
          <div className="search-bar">
            <i className="search-icon">
              <img src={search} alt="Search Icon" />
            </i>
            <input type="text" placeholder="Search..." />
          </div>
        </div>

        {/* Right Section */}
        <div className="navbar-right">
          <div className="icon-container">
            <i className="icon"><Link to="/Chat">
            <img src={bell} alt="Bell Icon" /></Link>
             
            </i>
            <span className="badge">17</span>
          </div>
          <div className="icon-container">
            <i className="icon">
            {/* <Link to="/Checklist"></Link> */}
            <button onClick={toggleList}>
            <img src={order} alt="Order Icon" /><Checklist/>
            </button>
              
            </i>
            <span className="badge">{count}</span>
          </div>

          <div
            className="profile-container"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <i className="profile-icon">
              <img src={profile} alt="Profile Icon" />
            </i>
            {dropdownOpen && (
              <div className="dropdown-menu">
                {isLoggedIn ? (
                  <button
                    className="logout-btn"
                    onClick={(handleLogout)}
                  >
                    Logout
                  </button>
                  
                ) : (
                  <>
                    <button
                      className="login-btn"
                      onClick={() => setShowLoginPopup(true)}
                    >
                      Login
                    </button>
                    <button
                      className="signup-btn"
                      onClick={() => setShowSignupPopup(true)}
                    >
                      Signup
                    </button>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Signup Popup */}
      {showSignupPopup && (
        <div className="login-popup">
          <div className="popup-content">
            <h2>Signup</h2>
            <form onSubmit={handleSignup}>
              <label>
                <p>Username:</p>
                <input
                  type="text"
                  name="username"
                  value={userDetails.username}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <label>
                <p>Email:</p>
                <input
                  type="email"
                  name="email"
                  value={userDetails.email}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <label>
                <p>Password:</p>
                <input
                  type="password"
                  name="password"
                  value={userDetails.password}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <button type="submit" className="popup-login-btn">
                Signup
              </button>
              <button
                type="button"
                className="popup-close-btn"
                onClick={() => setShowSignupPopup(false)}
              >
                Close
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Login Popup */}
      {showLoginPopup && (
        <div className="login-popup">
          <div className="popup-content">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
              <label>
                <p>Username:</p>
                <input
                  type="text"
                  name="username"
                  value={userDetails.username}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <label>
                <p>Password:</p>
                <input
                  type="password"
                  name="password"
                  value={userDetails.password}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <button type="submit" className="popup-login-btn">
                Login
              </button>
              <button
                type="button"
                className="popup-close-btn"
                onClick={() => setShowLoginPopup(false)}
              >
                Close
              </button>
            </form>
          </div>
        </div>
      )}

      {/* OTP Popup */}
      {showOtpPopup && (
        <div className="login-popup">
          <div className="popup-content">
            <h2>OTP Verification</h2>
            <p>An OTP has been sent to your email. Please enter it below:</p>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
            <button onClick={handleOtpVerify} className="popup-login-btn">
              Verify OTP
            </button>
            <button
              onClick={handleOtpSend}
              className="popup-login-btn"
            >
              Resend OTP
            </button>
            <button
              type="button"
              className="popup-close-btn"
              onClick={() => setShowOtpPopup(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
