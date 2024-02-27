import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sponsorship from './components/Sponsorship/Sponsorship';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <div className="App">
            <Header />
            <Sponsorship />
            <Footer />
        </div>
    );
}

export default App;
