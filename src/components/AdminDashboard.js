import React, { useState, useEffect } from 'react';
import './styles/AdminDashboard.css';

const AdminDashboard = () => {
    const [users, setUsers] = useState([
        {
            id: 1,
            name: "John Doe",
            country: "USA",
            email: "john.doe@example.com",
            contactNumber: "1234567890",
            sportsInterests: "Football, Basketball"
        },
        {
            id: 2,
            name: "Jane Smith",
            country: "Canada",
            email: "jane.smith@example.com",
            contactNumber: "0987654321",
            sportsInterests: "Hockey, Tennis"
        },
        {
            id: 3,
            name: "Dory Samuels",
            country: "Norway",
            email: "d.s@gmail.com",
            contactNumber: "2475929013",
            sportsInterests: "Athletics, Swimming"
        },
        {
            id: 4,
            name: "George Newton",
            country: "England",
            email: "George.N@gmail.com",
            contactNumber: "2374891394",
            sportsInterests: "100m Sprint, Basketball"
        },
        {
            id: 5,
            name: "Clive Extort",
            country: "Russia",
            email: "Clide.E@gmail.com",
            contactNumber: "4535434385",
            sportsInterests: "Tennis, Swimming"
        },
    ]);

    const deleteUser = (userId) => {
        setUsers(users.filter(user => user.id !== userId));
    };

    const resetPassword = (userId) => {
        const newPassword = prompt('Enter new password:');
        if (newPassword) {
            setUsers(users.map(user => user.id === userId ? { ...user, password: newPassword } : user));
        }
    };

    return (
        <div className="admin-dashboard">
            <h1>Admin Dashboard</h1>
            <table className="user-table">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Country</th>
                    <th>Email</th>
                    <th>Contact Number</th>
                    <th>Sports Interests</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {users.map(user => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.country}</td>
                        <td>{user.email}</td>
                        <td>{user.contactNumber}</td>
                        <td>{user.sportsInterests}</td>
                        <td>
                            <button onClick={() => resetPassword(user.id)}>Reset Password</button>
                            <button onClick={() => deleteUser(user.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminDashboard;