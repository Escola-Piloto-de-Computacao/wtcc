import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Events from './components/Events/Events';
import Schedule from './components/Schedule/Schedule';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <div className="App">
            <Header />
            <Home />
            <div className="pb-20" id="Eventos">
                <Events />
            </div>
            <Schedule />
            <Footer />
        </div>
    );
}

export default App;
