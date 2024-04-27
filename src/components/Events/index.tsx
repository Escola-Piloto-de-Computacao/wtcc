import React, { useState } from "react";
import { Popover } from 'antd';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import CurrentEvent from "./CurrentEvent";

// TODO make the arrows be in a fixed position

interface EventsProps {
    handleDayChange: (day: number) => void;
    dayNedded: number;
    highLightedEvent:number;
    handleHighlightedEvent: (index:number) => void;
}

interface SelectorProps {
    index: number;
    name: string;
    localizacao: string;
    horaEDia: string;
    dia: number
    changeEvent: (direction: "left" | "right") => void;
    dayNedded: number;
    handleDayChange: (day: number) => void;
    highLightedEvent:number;
    handleHighlightedEvent: (index:number) => void;
}

const events = [
    /*{
        index: 1,
        name: "MARATONA DE PROGRAMAÇÃO",
        localizacao: "LCC",
        horaEDia: "8:00 - 11:00 ---- Sexta-Feira",
        dia: 3
    },*/
    {
        index: 2,
        name: "MOSTRA CIENTÍFICA",
        localizacao: "LCC",
        horaEDia: "10:30 - 12:00 ----- Quarta-Feira",
        dia: 1
    },
    {
        index: 3,
        name: "MINICURSOS",
        localizacao: "LCC",
        horaEDia: "14:00 - 18:00 ----- Quarta-Feira e Quinta-Feira",
        dia: 1
    },/*
    {
        index: 4,
        name: "HACKATHON",
        localizacao: "Auditório da PROEC",
        horaEDia: "8:00 - 11:00 ----- Sexta-Feira",
        dia: 3
    },*/
    {
        index: 5,
        name: "PALESTRA",
        localizacao: "Auditório da PROEC",
        horaEDia: "8:30 - 9:30 ----- Quinta-Feira",
        dia: 2
    },
    {
        index: 6,
        name: "MESA REDONDA",
        localizacao: "Auditório da PROEC",
        horaEDia: "10:00 - 11:30 ----- Quinta-Feira",
        dia: 2
    }
];

const ClickCronograma = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none" viewBox="0 0 25 25">
            <mask id="a" width="25" height="25" x="0" y="0" maskUnits="userSpaceOnUse">
                <path fill="#D9D9D9" d="M.258.511h24v24h-24z" />
            </mask>
            <g mask="url(#a)">
                <path fill="#1C1B1F" d="M2.258 12.511v-2h3v2h-3Zm3.4 5.55-1.4-1.45 2.1-2.1 1.45 1.4-2.15 2.15Zm.7-9.55-2.1-2.1 1.4-1.45 2.15 2.15-1.45 1.4Zm11.9 12-4.75-4.75-1.25 3.75-3-10 10 3-3.7 1.3 4.7 4.7-2 2Zm-8-14v-3h2v3h-2Zm5.9 2-1.45-1.4 2.15-2.15 1.4 1.4-2.1 2.15Z" />
            </g>
        </svg>
    );
}

const Arrow = ({ direction, changeEvent }: { direction: "left" | "right"; changeEvent: () => void }) => {
    return (
        <button onClick={changeEvent} className="mt-1 border border-black rounded">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={
                        direction === "left"
                            ? "M15 19l-7-7 7-7"
                            : "M9 5l7 7-7 7"
                    }
                />
            </svg>
        </button >
    );
}

const Loc = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <mask id="a" width="24" height="24" x="0" y="0" maskUnits="userSpaceOnUse">
                <path fill="#D9D9D9" d="M0 0h24v24H0z" />
            </mask>
            <g mask="url(#a)">
                <path fill="#1C1B1F" d="M12 12c.55 0 1.02-.196 1.412-.588.392-.391.588-.862.588-1.412 0-.55-.196-1.02-.588-1.412A1.926 1.926 0 0 0 12 8c-.55 0-1.02.196-1.412.588A1.926 1.926 0 0 0 10 10c0 .55.196 1.02.588 1.412.391.392.862.588 1.412.588Zm0 7.35c2.033-1.867 3.542-3.563 4.525-5.088C17.508 12.738 18 11.383 18 10.2c0-1.817-.58-3.304-1.738-4.462C15.104 4.579 13.683 4 12 4c-1.683 0-3.104.58-4.263 1.737C6.58 6.896 6 8.383 6 10.2c0 1.183.492 2.538 1.475 4.063.983 1.524 2.492 3.22 4.525 5.087ZM12 22c-2.683-2.283-4.688-4.404-6.013-6.363C4.662 13.68 4 11.867 4 10.2c0-2.5.804-4.492 2.412-5.975C8.021 2.742 9.883 2 12 2s3.98.742 5.587 2.225C19.197 5.708 20 7.7 20 10.2c0 1.667-.663 3.48-1.988 5.438C16.688 17.595 14.683 19.716 12 22Z" />
            </g>
        </svg>
    );
}

const locPop = () => {
    return (
        <div>
            <h1 className="text-md">Clique para ver no mapa!</h1>
        </div>
    );

}

const TimePop = () => {
    return (
        <div>
            <h1 className="text-md">Clique para ver o cronograma!</h1>
        </div>
    );
}

const Selector: React.FC<SelectorProps> = ({ index, name, localizacao, horaEDia, dia, changeEvent, handleDayChange, dayNedded, handleHighlightedEvent }) => {
    const [placement, setPlacement] = useState<'left' | 'right'>('left');

    const updatePlacement = () => {
        setPlacement(Math.random() < 0.5 ? 'left' : 'right');
    };

    const scrollToSchedule = () => {
        const schedule = document.getElementById('Cronograma');
        if (schedule) {
            schedule.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="flex flex-col items-center text-4xl justify-center">
            <Popover content={TimePop} placement="top" className="mt-2 flex align-middle gap-1 cursor-pointer">
                <button onClick={() => { handleDayChange(dia); scrollToSchedule(); handleHighlightedEvent(index)  }}>
                    <div className="mt-2 flex flex-wrap gap-1">
                        <ClickCronograma />
                        <p className="text-base font-mono">{horaEDia}</p>
                    </div>
                </button>
            </Popover>
            <div className="flex justify-center gap-16">
                <Arrow direction="left" changeEvent={() => changeEvent("left")} />
                <h1 className="bg-teal-200 px-2 py-1 rounded">{name}</h1>
                <Arrow direction="right" changeEvent={() => changeEvent("right")} />
            </div>
            <button onMouseEnter={updatePlacement}>
                <Popover content={locPop} placement={placement} className="mt-2 flex align-middle gap-1 cursor-pointer">
                    <div> {/* TODO add link to map */}
                        <Loc />
                        <p className="text-base font-mono">{localizacao}</p>
                    </div>
                </Popover>
            </button>
        </div>
    );
}

const Events: React.FC<EventsProps> = ({ dayNedded, handleDayChange, highLightedEvent, handleHighlightedEvent }) => {

    const [selectedEvent, setSelectedEvent] = useState(1);

    const changeEvent = (direction: "left" | "right") => {
        if (direction === "left") {
            setSelectedEvent((prevEvent) => prevEvent > 0 ? prevEvent - 1 : events.length - 1);
        } else {
            setSelectedEvent((prevEvent) => prevEvent < events.length - 1 ? prevEvent + 1 : 0);
        }
    };

    // for moving the selected event with the arrow keys
    React.useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'ArrowLeft') {
                changeEvent('left');
            } else if (event.key === 'ArrowRight') {
                changeEvent('right');
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <div className="mb-12" id="Eventos">
            <div className="pt-36 pb-3">
                <Selector {...events[selectedEvent]} changeEvent={changeEvent} dayNedded={dayNedded} handleDayChange={handleDayChange} highLightedEvent={highLightedEvent} handleHighlightedEvent={handleHighlightedEvent} />
                <SwitchTransition>
                    <CSSTransition
                        key={selectedEvent}
                        timeout={500}
                        classNames="fade"
                    >
                        <div>
                            <CurrentEvent index={events[selectedEvent].index} />
                        </div>
                    </CSSTransition>
                </SwitchTransition>
            </div>
        </div>
    );
}

export default Events;
