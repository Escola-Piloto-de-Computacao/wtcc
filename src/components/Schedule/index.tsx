import React from "react";
import ScheduleCard from "./ScheduleCard";

const activities = [
    {
        day: 1,
        time: "8:00 - 10:00",
        title: "Abertura Oficial do Evento",
        description: "",
        location: "Auditório da PROEC"
    },
    {
        day: 1,
        time: "10:00 - 10:30",
        title: "Coffee Break ",
        description: "",
        location: "Auditório da PROEC"
    },
    {
        index: 2,
        day: 1,
        time: "10:30 - 12:00",
        title: "Mostra Científica",
        description: "",
        location: "Auditório da PROEC"
    },
    {
        index: 3,
        day: 1,
        time: "14:00 - 18:00",
        title: "Minicursos",
        description: "",
        location: "LCC"
    },
    {
        index: 5,
        day: 2,
        time: "8:30 - 9:30",
        title: "Palestra 1", // change the name of the activity
        description: "",
        location: "Auditório da PROEC"

    },

    {
        day: 2,
        time: "9:30 - 10:00",
        title: "Coffee Break ",
        description: "",
        location: "Auditório da PROEC"
    },
    {
        day: 2,
        time: "10:00 - 11:30",
        title: "Mesa Redonda",
        description: "",
        location: "Auditório da PROEC"
    },
    {
        index: 3,
        day: 2,
        time: "14:00 - 18:00",
        title: "Minicursos",
        description: "",
        location: "LCC"
    },
    {
        day: 3,
        time: "8:00 - 11:00",
        title: "Hackaton e Maratona de Programação",
        description: "",
        location: "LCC"
    },
    {
        day: 3,
        time: "11:00 - 12:00",
        title: "Finalização",
        description: "",
        location: "LCC"
    }
];

interface ScheduleProps {
    dayInput: number;
    handleDayChange: (day: number) => void;
    highLightedEvent: number;
    handleHighlightedEvent: (index: number) => void;
}

const handleDayInput = (day: number) => {
    var weekDay;
    var date;

    if (day === 1) {
        weekDay = "Quarta-Feira";
        date = "29/05/2024"
    } else if (day === 2) {
        weekDay = "Quinta-Feira";
        date = "30/05/2024"
    } else if (day === 3) {
        weekDay = "Sexta-Feira";
        date = "31/05/2024"
    } else {
        return "";
    }

    return (
        <div className="mt-4 mb-8">
            <h2 className="text-lg">{weekDay}</h2>
            <h3 className="text-base">{date}</h3>
        </div>
    );
}

const Schedule: React.FC<ScheduleProps> = ({ dayInput, handleDayChange, highLightedEvent, handleHighlightedEvent }) => {
    return (
        <section className=" max-w-full flex items-center flex-col gap-3 sm:gap-0 pt-36 pb-12" id="Cronograma">
            <h1 className="text-4xl bg-yellow-300 uppercase rounded-lg px-1 mb-2">Cronograma</h1>
            <ul className="text-xl flex items-center flex-row gap-9">
                <li className={`rounded-lg px-1 ${dayInput === 1 ? 'bg-green-200' : ''} transition duration-300  ease-in-out`}><button onClick={() => { handleDayChange(1); handleHighlightedEvent(0) }}>Dia 1</button></li>
                <li className={`rounded-lg px-1 ${dayInput === 2 ? 'bg-green-200' : ''} transition duration-300 ease-in-out`}><button onClick={() => { handleDayChange(2); handleHighlightedEvent(0) }}>Dia 2</button></li>
                <li className={`rounded-lg px-1 ${dayInput === 3 ? 'bg-green-200' : ''} transition duration-300 ease-in-out`}><button onClick={() => { handleDayChange(3); handleHighlightedEvent(0) }}>Dia 3</button></li>
            </ul>
            {handleDayInput(dayInput)}

            {activities.map((activity, index) => {
                let trueDescription = activity.description;
                if (activity.description === "") {
                    trueDescription = "Descrição não disponível";
                }
                if (activity.day === dayInput) {
                    if (activity.index === highLightedEvent) {

                        return (
                            <ScheduleCard key={index}
                                time={activity.time}
                                title={activity.title}
                                description={trueDescription}
                                location={activity.location}
                                Highlighted={true} />
                        )

                    }
                    return (
                        <ScheduleCard key={index}
                            time={activity.time}
                            title={activity.title}
                            description={trueDescription}
                            location={activity.location}
                            Highlighted={false} />
                    );
                }
            })}
        </section>
    );
};

export default Schedule