import React, { useState } from 'react';
import '../assets/styles/navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPalette, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [selected, setSelected] = useState(null);

    const handleClick = (index) => {
        setSelected(index);
    };

    return (
        <nav className="navbar">
            <ul className="navbar-list">
                {['About', 'Works', 'Contact'].map((item, index) => {
                    const icons = [faUser, faPalette, faEnvelope];
                    return (
                        <li
                            key={index}
                            className={`navbar-item ${selected === index ? 'selected' : ''}`}
                            onClick={() => handleClick(index)}
                        >
                            <a href={`#${item.toLowerCase()}`} className="navbar-link">
                                <FontAwesomeIcon icon={icons[index]} className="navbar-icon" />
                                {item}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Navbar;