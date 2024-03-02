import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Pictures from './components/Pictures/Pictures';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <div className="App">
            <Header />
            <Footer />
            <Footer />
            <Pictures />
            <Footer />
            <Footer />
        </div>
    );
}

export default App;
