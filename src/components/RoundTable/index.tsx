import React from "react";
import { Image } from "antd";

const RoundTable = () => {
    const roundTable = {
        name: "Ainda não há mesa redonda cadastrada",
        description: "Ainda não há mesa redonda cadastrada",
        img: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
    };

    return (
        <div className="w-full grid grid-cols-12 gap-10 mt-10">
            <div className="col-start-2 col-span-5 rounded-xl">
                <Image
                    width="100%"
                    src={roundTable.img}
                    alt="Mesa redonda do VIII WTCC"
                    style={{ borderRadius: "15px" }}
                />
            </div>
            <div className="col-start-7 col-span-5 mt-4 ml-6 flex flex-row row-span-1 flex-wrap">
                <div className="">
                    <h2 className="text-3xl font-bold text-left font-poppings">{roundTable.name}</h2>
                    <p className="mt-5 ml-6 text-justify">{roundTable.description}</p>
                </div>
            </div>
        </div>
    );
}

export default RoundTable;