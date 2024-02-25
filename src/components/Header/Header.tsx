import React from 'react';
import LogoWTCC from '../../assets/LogoeventLogo.png'

// TODO linha que segue o usuário em baixo de cada opção do menu

const Header = () => {
    return (
        <header className="lg:flex lg:justify-center pt-8">
            <div className="lg:flex items-center justify-between fixed bg-gray-50 max-w-screen-xl mx-auto z-20 h-24 border-gray-200 px-8 lg:px-16 rounded-lg" >
                <div className="flex items-center ml-6 mr-14 py-3 w-24">
                    <img src={LogoWTCC} alt="Logo IX WTCC" className="w-3/4 hidden lg:block" />
                </div>
                <div className="flex gap-20 font-semibold text-xl lg:mr-20 lg:justify-start lg:items-start justify-center items-center">
                    <a href="" className="hover:text-gray-500 hidden lg:block">Home</a>
                    <a href="" className="hover:text-gray-500 hidden lg:block">Eventos</a>
                    <a href="" className="hover:text-gray-500 hidden lg:block">Galeria</a>
                    <a href="" className="hover:text-gray-500 hidden lg:block">Cronograma</a>
                    <a href="" className="hover:text-gray-500 hidden lg:block">FAQ</a>
                </div>
            </div>
        </header>
    );
}

export default Header;
