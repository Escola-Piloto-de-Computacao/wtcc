import React from 'react';
import ScientificShow from "../../ScientificShow";
import Minicourses from "../../Minicourses";
import Lectures from "../../Lectures";
import RoundTable from '../../RoundTable';
import Hackathon from '../../Hackathon';


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
        case 4:
            return (
                <Hackathon />
            );
        case 5:
            return (
                <Lectures />
            );
        case 6:
            return (
                <RoundTable />
            );
        default:
            return (
                <div>
                </div>
            );
    }
}

export default CurrentEvent;