import React, { useState, useEffect } from 'react';
import '../assets/styles/welcome.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMousePointer, faLanguage } from '@fortawesome/free-solid-svg-icons';

const RandomLine = () => {
    const [line, setLine] = useState('');
    const [translation, setTranslation] = useState('');
    const [displayText, setDisplayText] = useState('');
    const [fade, setFade] = useState(false);
    const [hovered, setHovered] = useState(false);
    const [iconFade, setIconFade] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/data/greetings.txt')
            .then(response => response.text())
            .then(text => {
                const lines = text.split('\n');
                const randomLine = lines[Math.floor(Math.random() * lines.length)];
                const [original, translated] = randomLine.split('|');
                setLine(original.trim());
                setTranslation(translated.trim());
                setDisplayText(original.trim());
                setLoading(false);
            })
            .catch(error => console.error('Error fetching greetings:', error));
    }, []);

    const handleMouseEnter = () => {
        setFade(true);
        setHovered(true);
        setIconFade(true);
        setTimeout(() => {
            setDisplayText(translation);
            setFade(false);
        }, 300);
    };

    const handleMouseLeave = () => {
        setFade(true);
        setTimeout(() => {
            setDisplayText(line);
            setFade(false);
            setIconFade(false);
        }, 300);
    };

    return (
        <div className="welcome-container">
            {!loading && (
                <>
                    <FontAwesomeIcon 
                        icon={faLanguage} 
                        className={`translation-icon ${iconFade ? 'icon-fade-out' : ''}`}
                    />
                    <h1
                        className={`welcome-text ${fade ? 'fade-out' : ''}`}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        {displayText}
                    </h1>
                </>
            )}
        </div>
    );
};

export default RandomLine;
