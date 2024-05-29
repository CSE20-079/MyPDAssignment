import React from 'react';
import { Link } from 'react-router-dom';
import './styles/HomePage.css';

const HomePage = () => {
    return (
        <div className="home-page">
            <h1>FunOlympics StreamCenter</h1>
            <p>Official Home of the FunOlympics</p>
            <nav>
                <Link to="/register">Register</Link>
                <Link to="/login">Login</Link>
            </nav>
        </div>
    );
};

export default HomePage;
