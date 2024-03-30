import React, { useState, useEffect } from 'react';
import './App.css';
import MobileScreen from './components/MobileScreen';
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
    const [isMobile, setIsMobile] = useState(window.innerWidth < 0);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 0);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const [dayNedded, setDayNedded] = React.useState(1);
    

    const handleDayChange = (day: number) => {
        if (day > 3 || day < 1) return;
        setDayNedded(day);
        console.log(dayNedded);
    }

    const [index,setIndex] = React.useState(0);

    const handleHighlightedEvent = (index:number) => {
        setIndex(index);
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
        isMobile ? <MobileScreen /> :
            <div className={`App ${spinning ? 'no-pointer-events' : ''}`}>
                <Spin spinning={spinning} fullscreen />
                <Header />
                <Home />
                <Events dayNedded={dayNedded} handleDayChange={handleDayChange}  highLightedEvent={index} handleHighlightedEvent={handleHighlightedEvent} />
                <Pictures />
                <Schedule dayInput={dayNedded} handleDayChange={handleDayChange} highLightedEvent={index} handleHighlightedEvent={handleHighlightedEvent}  />
                <Faq />
                <Sponsorship />
                <Footer />
            </div>
    );
}

export default App;