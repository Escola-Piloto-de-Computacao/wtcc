import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Events from './components/Events/Events';
import Pictures from './components/Pictures/Pictures';
import Schedule from './components/Schedule/Schedule';
import Faq from './components/Faq/Faq';
import Sponsorship from './components/Sponsorship/Sponsorship';
import Footer from './components/Footer/Footer';
import { Spin } from 'antd';

function App() {
    const [dayNedded, setDayNedded] = React.useState(1);

    const handleDayChange = (day: number) => {
        if (day > 3 || day < 1) return;
        setDayNedded(day);
        console.log(dayNedded);
    }

    const [spinning, setSpinning] = useState(true); // start with spinning true

    const loadData = async () => {
        try {
            // replace this with your actual data loading logic
            await new Promise(resolve => setTimeout(resolve, 3000));
            setSpinning(false); // stop spinning after data has loaded
        } catch (error) {
            console.error(error);
            // handle error
        }
    };

    useEffect(() => {
        // lock scrolling while spinner is active
        if (spinning) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        loadData();

        return () => {
            // unlock scrolling when component unmounts
            document.body.style.overflow = 'auto';
        };
    }, [spinning]); // this effect runs whenever spinning changes

    return (
        <div className={`App ${spinning ? 'no-pointer-events' : ''}`}>
            <Spin spinning={spinning} fullscreen />
            <Header />
            <Home />
            <Events dayNedded={dayNedded} handleDayChange={handleDayChange} />
            <Pictures />
            <Schedule dayInput={dayNedded} handleDayChange={handleDayChange} />
            <Faq />
            <Sponsorship />
            <Footer />
        </div>
    );
}

export default App;