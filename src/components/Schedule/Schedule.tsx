import { useState } from "react";
import ScheduleCard from "./ScheduleCard/ScheduleCard";

const activities = [
    {
        day: 1,
        time: "8:00 - 10:00",
        title: "Abertura Oficial do Evento",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse congue urna faucibus libero tincidunt imperdiet nec quis lacus. Cras venenatis ornare pellentesque. Curabitur vulputate vestibulum tortor ut scelerisque. Quisque hendrerit turpis sed orci convallis consectetur. Morbi convallis rho",
        location: "Auditório da PROEC"
    },

    {
        day: 1,
        time: "10:00 - 10:30",
        title: "Coffee Break ",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse congue urna faucibus libero tincidunt imperdiet nec quis lacus. Cras venenatis ornare pellentesque. Curabitur vulputate vestibulum tortor ut scelerisque. Quisque hendrerit turpis sed orci convallis consectetur. Morbi convallis rho",
        location: "Auditório da PROEC"
    },
    {
        day: 1,
        time: "10:30 - 12:00",
        title: "Mostra Científica",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse congue urna faucibus libero tincidunt imperdiet nec quis lacus. Cras venenatis ornare pellentesque. Curabitur vulputate vestibulum tortor ut scelerisque. Quisque hendrerit turpis sed orci convallis consectetur. Morbi convallis rho",
        location: "Auditório da PROEC"
    },
    {
        day: 1,
        time: "14:00 - 18:00",
        title: "Minicursos",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse congue urna faucibus libero tincidunt imperdiet nec quis lacus. Cras venenatis ornare pellentesque. Curabitur vulputate vestibulum tortor ut scelerisque. Quisque hendrerit turpis sed orci convallis consectetur. Morbi convallis rho",
        location: "LCC"
    },
    {
        day: 2,
        time: "8:30 - 9:30",
        title: "Palestra 1", // change the name of the activity
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse congue urna faucibus libero tincidunt imperdiet nec quis lacus. Cras venenatis ornare pellentesque. Curabitur vulputate vestibulum tortor ut scelerisque. Quisque hendrerit turpis sed orci convallis consectetur. Morbi convallis rho",
        location: "Auditório da PROEC"

    },

    {
        day: 2,
        time: "9:30 - 10:00",
        title: "Coffee Break ",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse congue urna faucibus libero tincidunt imperdiet nec quis lacus. Cras venenatis ornare pellentesque. Curabitur vulputate vestibulum tortor ut scelerisque. Quisque hendrerit turpis sed orci convallis consectetur. Morbi convallis rho",
        location: "Auditório da PROEC"
    },
    {
        day: 2,
        time: "10:00 - 11:30",
        title: "Mesa Redonda",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse congue urna faucibus libero tincidunt imperdiet nec quis lacus. Cras venenatis ornare pellentesque. Curabitur vulputate vestibulum tortor ut scelerisque. Quisque hendrerit turpis sed orci convallis consectetur. Morbi convallis rho",
        location: "Auditório da PROEC"
    },
    {
        day: 2,
        time: "14:00 - 18:00",
        title: "Minicursos",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse congue urna faucibus libero tincidunt imperdiet nec quis lacus. Cras venenatis ornare pellentesque. Curabitur vulputate vestibulum tortor ut scelerisque. Quisque hendrerit turpis sed orci convallis consectetur. Morbi convallis rho",
        location: "LCC"
    },
    {
        day: 3,
        time: "8:00 - 11:00",
        title: "Hackaton e Maratona de Programação",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse congue urna faucibus libero tincidunt imperdiet nec quis lacus. Cras venenatis ornare pellentesque. Curabitur vulputate vestibulum tortor ut scelerisque. Quisque hendrerit turpis sed orci convallis consectetur. Morbi convallis rho",
        location: "LCC"
    },
    {
        day: 3,
        time: "11:00 - 12:00",
        title: "Finalização",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse congue urna faucibus libero tincidunt imperdiet nec quis lacus. Cras venenatis ornare pellentesque. Curabitur vulputate vestibulum tortor ut scelerisque. Quisque hendrerit turpis sed orci convallis consectetur. Morbi convallis rho",
        location: "LCC"
    }
]

const Schedule = () => {
    const [day, setDay] = useState(1);

    return (
        <section className="flex items-center flex-col mt-10 gap-3">
            <h1 className="text-4xl bg-yellow-300 uppercase rounded-lg px-1 mb-2">Cronograma</h1>
            <ul className="text-xl flex items-center flex-row gap-9">
                <li className={`rounded-lg px-1 ${day === 1 ? 'bg-yellow-300' : ''} transition duration-300  ease-in-out`}><button onClick={() => setDay(1)}>Dia 1</button></li>
                <li className={`rounded-lg px-1 ${day === 2 ? 'bg-yellow-300' : ''} transition duration-300 ease-in-out`}><button onClick={() => setDay(2)}>Dia 2</button></li>
                <li className={`rounded-lg px-1 ${day === 3 ? 'bg-yellow-300' : ''} transition duration-300 ease-in-out`}><button onClick={() => setDay(3)}>Dia 3</button></li>
            </ul>
            <h2 className="text-lg mb-4 mt-2">{day === 1 ? "Quarta-Feira" : day === 2 ? "Quinta-Feira" : day === 3 ? "Sexta-Feira" : ""}</h2>
            {activities.map((activity, index) => {
                if (activity.day == day) {
                    return (
                        <ScheduleCard key={index}
                            time={activity.time}
                            title={activity.title}
                            description={activity.description}
                            location={activity.location} />
                    );
                }
            })}
        </section>
    );
}

export default Schedule;