import React, { useState } from 'react';
import axios from 'axios';
import './styles/SportsSelectionPage.css';

const SportsSelectionPage = ({ user }) => {
    const [selectedSports, setSelectedSports] = useState([]);

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setSelectedSports([...selectedSports, value]);
        } else {
            setSelectedSports(selectedSports.filter(sport => sport !== value));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/sports', { userId: user.id, sports: selectedSports })
            .then(response => {
                alert('Sports selection updated successfully');
            })
            .catch(error => {
                console.error('There was an error updating sports selection!', error);
            });
    };

    const sportsOptions = ['Football', 'Basketball', 'Tennis', 'Swimming', '100m Sprint', ];

    return (
        <div className="sports-selection-page">
            <h1>Select Your Favorite Sports</h1>
            <form onSubmit={handleSubmit}>
                {sportsOptions.map(sport => (
                    <div key={sport}>
                        <input type="checkbox" value={sport} onChange={handleCheckboxChange} />
                        <label>{sport}</label>
                    </div>
                ))}
                <button type="submit">Save Selection</button>
            </form>
        </div>
    );
};

export default SportsSelectionPage;
