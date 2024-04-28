import React from "react";
import { Image } from "antd";
import { AntDesignOutlined } from "@ant-design/icons";
import { Avatar } from "antd";

const Hackathon = () => {
    const selectedSpeaker = {
        name: "Ainda não há palestrante cadastrado",
        description: "Ainda não há palestrante cadastrado",
        img: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
    };

    const lecture = {
        name: "Ainda não há palestra cadastrada",
        description: "Ainda não há palestra cadastrada",
        speaker: selectedSpeaker,
        img: "https://i.imgur.com/2d8Kc1c.png"
    };

    return (
        <div className="w-full grid grid-cols-12 gap-10 mt-10">
            <div className="col-start-2 col-span-5 rounded-xl">
                <Image
                    width="100%"
                    src={lecture.img}
                    alt="Palestra do VIII WTCC"
                    style={{ borderRadius: "15px" }}
                />
            </div>
            <div className="col-start-7 col-span-5 mt-4 ml-6 flex flex-row row-span-1 flex-wrap">
                <div className="">
                    <h2 className="text-3xl font-bold text-left font-poppings">{lecture.name}</h2>
                    <p className="mt-5 ml-6 text-justify">{lecture.description}</p>
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-left font-poppings">{lecture.speaker.name}</h3>
                    <div className="h-10 mt-5 ml-6 grid grid-cols-6 gap-2">
                        <div className="mt-1 mr-2">
                            <Avatar
                                size={64}
                                icon={<AntDesignOutlined />}
                            >
                                <img src={lecture.speaker.img} alt={"Foto de " + lecture.speaker.name} />
                            </Avatar>
                        </div>
                        <p className="text-justify col-span-5">{lecture.speaker.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hackathon;