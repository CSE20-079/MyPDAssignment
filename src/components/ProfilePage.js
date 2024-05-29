import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/ProfilePage.css';

const ProfilePage = ({ user }) => {
    const [profile, setProfile] = useState(user || null);

    useEffect(() => {
        if (!profile) {
            axios.get('http://localhost:8080/profile')
                .then(response => {
                    setProfile(response.data);
                })
                .catch(error => {
                    console.error('There was an error fetching the user data!', error);
                });
        }
    }, [profile]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile({
            ...profile,
            [name]: value
        });
    };

    const handleUpdate = () => {
        axios.put('http://localhost:8080/profile', profile)
            .then(response => {
                alert('Profile updated successfully');
            })
            .catch(error => {
                console.error('There was an error updating the profile!', error);
            });
    };

    if (!profile) return <div>Loading...</div>;

    return (
        <div className="profile-page">
            <h1>Profile</h1>
            <input type="text" name="name" placeholder="Name" value={profile.name} onChange={handleChange} required />
            <input type="text" name="country" placeholder="Country" value={profile.country} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" value={profile.email} onChange={handleChange} required />
            <input type="text" name="contactNumber" placeholder="Contact Number" value={profile.contactNumber} onChange={handleChange} required />
            <input type="text" name="sportsInterests" placeholder="Sports Interests" value={profile.sportsInterests} onChange={handleChange} required />
            <button onClick={handleUpdate}>Update Profile</button>
        </div>
    );
};

export default ProfilePage;
