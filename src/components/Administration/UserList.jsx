import React from 'react';
import { users } from './data3';
import { useNavigate } from 'react-router-dom';
import './UserList.css';

function UserList() {
    const navigate = useNavigate();

    return (
        <div className="user-list-page">
            <div className="header">
                <h2>User Management</h2>
                <button className="add-user-btn" onClick={() => navigate('/add-user')}>Add New User</button>
            </div>
            <table className="user-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Orders</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td onClick={() => navigate(`/user/${user.id}`)} className="user-name">
                                {user.name}
                            </td>
                            <td>{user.status}</td>
                            <td>{user.orders}</td>
                            <td>
                                <button className="edit-btn" onClick={() => navigate(`/user/${user.id}`)}>Edit</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default UserList;
