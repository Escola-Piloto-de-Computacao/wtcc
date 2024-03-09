import React, { useEffect, useState } from 'react';
import './ProgressBar.css';

const ProgressBar = () => {
    const [scroll, setScroll] = useState(0);

    const handleScroll = () => {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPosition = window.scrollY;
        const scrollPercent = (scrollPosition / totalHeight) * 100;
        setScroll(scrollPercent);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="progress-bar" style={{ width: `${scroll}%` }} />
    );
};

export default ProgressBar;
