import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Events from './components/Events/Events';
import Footer from './components/Footer/Footer';
import Scientificshow from './components/Scientificshow/Scientificshow';

function App() {
    return (
        <div className="App">
            <Header />
            <Home />
            <Events />
            <Footer />
        </div>
    );
}

export default App;
