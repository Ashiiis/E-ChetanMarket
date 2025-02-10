import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // useParams to get the userId from URL
import { users } from './data3'; // Assuming users data is imported from data3
import './UserDetails.css';

function UserDetails() {
    const { id } = useParams(); // Get the userId from URL
    const [user, setUser] = useState(null); // Initialize user state
    const [editMode, setEditMode] = useState(false); // Track edit mode
    const [formData, setFormData] = useState({}); // Form data state

    // Fetch user data based on the userId
    useEffect(() => {
        const foundUser = users.find((user) => user.id === parseInt(id));
        if (foundUser) {
            setUser(foundUser);
            setFormData(foundUser); // Initialize form data when user is found
        }
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleEdit = () => setEditMode(!editMode);

    // If user not found, return an error message
    if (!user) {
        return <div>User not found! Please try again.</div>;
    }

    return (
        <div className="user-details">
            {/* Header Section */}
            <div className="user-header">
                <img src={formData.profilePic} alt="Profile" className="user-image" />
                <div className="user-info">
                    <h2>{formData.name}</h2>
                    <p>{formData.shopType}</p>
                    <p>
                        <span>{formData.email}</span> | <span>{formData.mobile}</span>
                    </p>
                    <p>{formData.address}</p>
                </div>
            </div>

            {/* Tabs */}
            <div className="user-tabs">
                <button className="tab active">Main Information</button>
                <button className="tab">Sub Information</button>
                <button className="tab">Other Information</button>
            </div>

            {/* Content */}
            <div className="user-content">
                <div className="info-section">
                    <h3>Basic Info</h3>
                    <p>
                        Full Name:{" "}
                        {editMode ? (
                            <input
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                            />
                        ) : (
                            formData.name
                        )}
                    </p>
                    <p>
                        Shop Type:{" "}
                        {editMode ? (
                            <select
                                name="shopType"
                                value={formData.shopType}
                                onChange={handleInputChange}
                            >
                                <option value="Electronics">Electronics</option>
                                <option value="Clothing">Clothing</option>
                                <option value="Groceries">Groceries</option>
                                <option value="Furniture">Furniture</option>
                                <option value="Bakery">Bakery</option>
                                <option value="Other">Other</option>
                            </select>
                        ) : (
                            formData.shopType
                        )}
                    </p>
                </div>

                <div className="info-section">
                    <h3>Contact</h3>
                    <p>Email: {formData.email}</p>
                    <p>Mobile: {formData.mobile}</p>
                    <p>Description: {formData.description}</p>
                </div>

                <div className="info-section">
                    <h3>Other</h3>
                    <p>Orders: {formData.orders}</p>
                    <p>Status: {formData.status}</p>
                </div>
            </div>

            {/* Buttons */}
            <div className="user-actions">
                <button onClick={handleEdit}>{editMode ? "Save" : "Edit Data"}</button>
                <button className="delete-btn">Delete User</button>
                <button className="disable-btn">Disable User</button>
            </div>
        </div>
    );
}

export default UserDetails;
