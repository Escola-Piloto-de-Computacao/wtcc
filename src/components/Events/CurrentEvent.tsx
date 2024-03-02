import React from 'react';
import ScientificShow from "../ScientificShow/ScientificShow";
import Minicourses from "../Minicourses/Minicourses";
import Lectures from '../Lectures/Lectures';

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
                <ScientificShow />
            );
        case 3:
            return (
                <Minicourses />
            );
        case 5:
            return (
                <Lectures />
            );
        default:
            return (
                <div>
                </div>
            );
    }
}

export default CurrentEvent;