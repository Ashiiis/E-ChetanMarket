import React from 'react';
import "./page1.css";
import {useNavigate} from "react-router-dom";

function Page1() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/list');
    };
    return (
        <div className="page1">
            {/* Navbar Section */}
            <div className="navbar">
                Managing and Statistics
            </div>

            {/* Main Content Section */}
            <div className="content">
                {/* Left Section */}
                <div className="left">
                    <button className="left-btn">Active Users</button>
                    <button className="left-btn">Growth Stats</button>
                    <button className="left-btn">Management</button>
                </div>

                {/* Right Section */}
                <div className="right">
                <div className="right-item" onClick={handleClick}>
                    <h1>Manage Shop Owners</h1>
                </div>
                    <div className="right-item">
                        <h1>Manage Users</h1>
                    </div>
                    <div className="right-item">
                        <h1>Analytics Dashboard</h1>
                    </div>
                    <div className="right-item">
                        <h1>Revenue Tracking</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page1;
