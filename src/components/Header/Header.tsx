import React, { useState } from 'react';
import LogoWTCC from '../../assets/LogoeventLogo.png'

const Header = () => {
    const [activeSelection, setActiveSelection] = useState('Home');

    const handleSelection = (e: React.MouseEvent<HTMLAnchorElement>, selection: string) => {
        e.preventDefault();
        setActiveSelection(selection);
    }

    return (
        <header className="lg:flex lg:justify-center pt-8">
            <div className="lg:flex items-center justify-between fixed bg-gray-50 max-w-screen-xl mx-auto z-20 h-24 border-gray-200 px-8 lg:px-16 rounded-lg" >
                <div className="flex items-center ml-6 mr-14 py-3 w-24">
                    <a href=""> {/* voltará para a home do site */}
                        <img src={LogoWTCC} alt="Logo IX WTCC" className="w-3/4 hidden lg:block" />
                    </a>
                </div>
                <div className="flex gap-20 font-semibold text-xl lg:mr-20 lg:justify-start lg:items-start justify-center items-center">
                    <a href="" className={`hover:text-gray-500 hidden lg:block underline-transition ${activeSelection === 'Home' ? 'active' : ''}`} onClick={(e) => handleSelection(e, 'Home')}>Home</a>
                    <a href="" className={`hover:text-gray-500 hidden lg:block underline-transition ${activeSelection === 'Eventos' ? 'active' : ''}`} onClick={(e) => handleSelection(e, 'Eventos')}>Eventos</a>
                    <a href="" className={`hover:text-gray-500 hidden lg:block underline-transition ${activeSelection === 'Galeria' ? 'active' : ''}`} onClick={(e) => handleSelection(e, 'Galeria')}>Galeria</a>
                    <a href="" className={`hover:text-gray-500 hidden lg:block underline-transition ${activeSelection === 'Cronograma' ? 'active' : ''}`} onClick={(e) => handleSelection(e, 'Cronograma')}>Cronograma</a>
                    <a href="" className={`hover:text-gray-500 hidden lg:block underline-transition ${activeSelection === 'FAQ' ? 'active' : ''}`} onClick={(e) => handleSelection(e, 'FAQ')}>FAQ</a>
                </div>
            </div>
        </header >
    );
}

export default Header;
