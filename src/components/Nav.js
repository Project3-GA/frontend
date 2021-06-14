import React from 'react';
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div className="nav">
            <h1>working title</h1>
            <ul>
                <li><Link to="/gallery">home</Link></li>
                <li><Link to="/signup">signup</Link></li>
                <li><Link to="/gallery/create">add +</Link></li>
            </ul>
        </div>
    );
};

export default Nav;