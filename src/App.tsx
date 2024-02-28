import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Schedule from './components/Schedule/Schedule';

function App() {
    return (
        <div className="App">
            <Schedule/>
            <Footer />
        </div>
    );
}

export default App;
