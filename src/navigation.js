import React from 'react';
import { Link } from 'react-router-dom';


const navigation = () => (
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/aboutMe">About</Link>
            </li>
            <li>
                <Link to="/contact">Articles</Link>
            </li>
        </ul>
    </nav>
);

export default navigation;