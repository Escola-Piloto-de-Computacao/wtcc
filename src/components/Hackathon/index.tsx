import React from "react";
import { Image } from "antd";

import hackathonPics from "../../assets/hackathon/hackathon.png";

interface hackathonEvent {
    title: string;
    description: string;
    date: string;
}

const eventCard = (event: hackathonEvent) => {
    return (
        <div>
            <h2 className="mt-7 text-2xl font-bold text-left font-poppings">{event.title}</h2>
            <p className="mt-2 text-justify">{event.description}</p>
            <h2 className="mt-2 text-2xl font-bold text-center font-poppings">{event.date}</h2>
        </div>
    )
}

const Hackathon = () => {
    const hackathonEvents : hackathonEvent[] = [
        {
        title: "Lançamento do tema",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porta massa purus, ac cursus ante cursus ut.",
        date: "data"
        },
        {
        title: "Construção das ideias",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porta massa purus, ac cursus ante cursus ut.",
        date: "data"
        },
        {
        title: "Apresentação final",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porta massa purus, ac cursus ante cursus ut.",
        date: "data"
        }
    ]

    return (
        <div className="w-full grid grid-cols-12 gap-10 mt-10 ">
            <div className=" col-start-2 col-span-5 rounded-xl flex flex-col justify-center">
                <Image
                    width="100%"
                    src={hackathonPics}
                    alt="Palestra do VIII WTCC"
                    style={{ borderRadius: "15px" }}
                />
            </div>
            <div className="col-start-8 col-span-3 mt-4 ml-6 flex flex-col flex-wrap">
                <h1 className="ml-6 text-4xl font-bold text-center font-poppings">Cronograma</h1>
                <div className="mt-1 ml-6">
                    {hackathonEvents.map((event) => eventCard(event))}
                </div>
            </div>
        </div>
    );
}

export default Hackathon;