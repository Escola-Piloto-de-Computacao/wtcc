import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Scientificshow from './components/Scientificshow/Scientificshow';

function App() {
    return (
        <div className="App">
            <Header />
            <Scientificshow />
            <Footer />
        </div>
    );
}

export default App;
