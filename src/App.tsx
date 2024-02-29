import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Faq from './components/FAQSection/FaqSection';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <div className="App">
            <Header />
            <Faq />
            <Footer />
        </div>
    );
}

export default App;
