import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import RegistrationPage from './components/RegistrationPage';
import LoginPage from './components/LoginPage';
import ProfilePage from './components/ProfilePage';
import SportsSelectionPage from './components/SportsSelectionPage';
import AdminDashboard from './components/AdminDashboard';
import CatalogPage from './components/CatalogPage';
import './components/styles/Navbar.css'; // Import the new Navbar CSS

function App() {
    const [user, setUser] = useState(null);



    return (
        <Router>
            <div className="App">
                {/*<header className="navbar">*/}
                {/*    <nav>*/}
                {/*        <Link to="/" className="nav-link">Home</Link>*/}
                {/*        {user ? (*/}
                {/*            <>*/}
                {/*                <Link to="/profile" className="nav-link">Profile</Link>*/}
                {/*                <Link to="/sports" className="nav-link">Sports Selection</Link>*/}
                {/*                <Link to="/catalog" className="nav-link">Catalog</Link>*/}
                {/*                <Link to="/admin" className="nav-link">Admin Dashboard</Link>*/}
                {/*                <button onClick={() => setUser(null)} className="nav-link logout">Logout</button>*/}
                {/*            </>*/}
                {/*        ) : (*/}
                {/*            <>*/}
                {/*                <Link to="/register" className="nav-link">Register</Link>*/}
                {/*                <Link to="/login" className="nav-link">Login</Link>*/}
                {/*            </>*/}
                {/*        )}*/}
                {/*    </nav>*/}
                {/*</header>*/}
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/register" element={<RegistrationPage setUser={setUser} />} />
                    <Route path="/login" element={<LoginPage setUser={setUser} />} />
                    <Route path="/profile" element={<ProfilePage user={user} />} />
                    <Route path="/sports" element={<SportsSelectionPage user={user} />} />
                    <Route path="/catalog" element={<CatalogPage />} />
                    <Route path="/admin" element={<AdminDashboard />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
