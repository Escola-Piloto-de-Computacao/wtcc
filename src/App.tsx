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
            <Events />
            <Schedule />
            <Footer />
        </div>
    );
}

export default App;
