import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Events from './components/Events/Events';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <div className="App">
            <Header />
            {/* <Home /> */}
            <Events />
            <Footer />
        </div>
    );
}

export default App;
