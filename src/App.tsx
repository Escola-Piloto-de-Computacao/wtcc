import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Lectures from './components/Lectures/Lectures';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <div className="App">
            <Header />
            <Footer />
            <Footer />
            <Lectures />
            <Footer />
            <Footer />
        </div>
    );
}

export default App;
