import React, { useState, useEffect } from 'react';
import './App.css';
import MobileScreen from './components/MobileScreen';
import Header from './components/Header';
import Home from './components/Home';
import Events from './components/Events';
import Pictures from './components/Pictures';
import Schedule from './components/Schedule';
import Faq from './components/Faq';
import Sponsorship from './components/Sponsorship';
import Footer from './components/Footer';
import { Spin } from 'antd';

function App() {

    const getPicturesSize = () =>{
        if(window.innerWidth  < 768){
            return [150,100];
        }
        else if(window.innerWidth < 1100){
            return [175,116];
        }
        else{
            return [275,183];
        }
    }
  
    const [isMobile, setIsMobile] = useState(window.innerWidth < 0);
    const [picturesSize, setPicturesSize] = useState(getPicturesSize()); 
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 0);
            setPicturesSize(getPicturesSize()); 
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const [dayNedded, setDayNedded] = useState(1);
    const handleDayChange = (day: number) => {
        if (day > 3 || day < 1) return;
        setDayNedded(day);
    }


    const [index, setIndex] = useState(0);
    const handleHighlightedEvent = (index: number) => {
        setIndex(index);
    }

    const [spinning, setSpinning] = useState(true);
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
                <Events dayNedded={dayNedded} handleDayChange={handleDayChange} highLightedEvent={index} handleHighlightedEvent={handleHighlightedEvent} />
                <Pictures picturesSize={picturesSize} />
                <Schedule dayInput={dayNedded} handleDayChange={handleDayChange} highLightedEvent={index} handleHighlightedEvent={handleHighlightedEvent} />
                <Faq />
                <Sponsorship />
                <Footer />
            </div>
    );
}

export default App;