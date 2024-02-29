import React from 'react';
//import events

const CurrentEvent = ({ index }: { index: number; }) => {
    switch (index) {
        case 1:
            return (
                <div className="flex flex-col items-center">
                    <h1 className="text-2xl font-bold">Evento 1</h1>
                    <p>Descrição do evento 1</p>
                </div>
            );
        case 2:
            return (
                <div className="flex flex-col items-center">
                    <h1 className="text-2xl font-bold">Evento 2</h1>
                    <p>Descrição do evento 2</p>
                </div>
            );
        default:
            return (
                <div>
                </div>
            );
    }
}

export default CurrentEvent;