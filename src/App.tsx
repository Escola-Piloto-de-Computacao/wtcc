import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Schedule from './components/Schedule/Schedule';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <div className="App">
            <Schedule />
            <Footer />
        </div>
    );
}

export default App;
