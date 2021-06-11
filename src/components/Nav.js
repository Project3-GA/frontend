import React from 'react';
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div className="nav">
            <h1>working title</h1>
            <ul>
                <li><Link to="/signup">home</Link></li>
                <li><Link to="/signin">login</Link></li>
                <li><Link to="/gallery">add +</Link></li>
            </ul>
        </div>
    );
};

export default Nav;