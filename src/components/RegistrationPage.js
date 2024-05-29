import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './styles/RegistrationPage.css';

const RegistrationPage = ({ setUser }) => {
    const [user, setUserState] = useState({
        name: '',
        country: '',
        email: '',
        contactNumber: '',
        password: '',
        sportsInterests: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserState({...user, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/users', user)
            .then(response => {
                alert('Registration successful');
                setUser(response.data); // Assuming the response contains user data
                navigate('/login'); // Navigate to ProfilePage
            })
            .catch(error => {
                console.error('There was an error registering!', error);
                alert('Registration failed');
            });
    };

    return (
        <div className="registration-page">
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={user.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="country"
                    placeholder="Country"
                    value={user.country}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={user.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="contactNumber"
                    placeholder="Contact Number"
                    value={user.contactNumber}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={user.password}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="sportsInterests"
                    placeholder="Sports Interests"
                    value={user.sportsInterests}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default RegistrationPage;
