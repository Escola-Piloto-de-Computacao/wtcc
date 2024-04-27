import React from "react";
import { Image } from "antd";
import Mesa1 from "../../assets/RoundTable/Mesa1.png";
import Mesa2 from "../../assets/RoundTable/Mesa2.png";

interface Palestrante {
    name: string;
    description: string;
}

const PalestranteCard = ({ name, description }: Palestrante) => {
    return (
        <div>
            <h2 className="mt-5 text-2xl font-bold text-justify">{name}</h2>
            <p className="mt-1 text-justify">{description}</p>
        </div>
    );
}

const RoundTable = () => {

    const palestrantes: Palestrante[] = [
        {
            name: "Alice",
            description: "Lorem ipsum dolor sit amet consectetur. Bibendum odio nullam mattis varius sed netus. Nunc purus nulla nulla ipsum."
        },
        {
            name: "Bob",
            description: "Lorem ipsum dolor sit amet consectetur. Bibendum odio nullam mattis varius sed netus. Nunc purus nulla nulla ipsum."
        }
    ];

    const descricao = {
        title: "Descrição da mesa redonda",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac lacus nec arcu aliquet varius. Nullam vel libero nec tortor tincidunt fermentum. Nullam nec libero id erat fermentum tincidunt. Nulla facilisi. Nullam nec libero id erat fermentum tincidunt. Nulla facilisi.",
        img: Mesa1
    }

    const explicacao = {
        title: "Explicação do tema",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac lacus nec arcu aliquet varius. Nullam vel libero nec tortor tincidunt fermentum. Nullam nec libero id erat fermentum tincidunt. Nulla facilisi. Nullam nec libero id erat fermentum tincidunt. Nulla facilisi.",
        img: Mesa2
    }

    return (
        <div className="w-full grid grid-cols-12 gap-10 mt-10">
            <div className="col-start-1 col-span-12">
                <h1 className="text-4xl font-bold text-center font-poppings">Título da Mesa Redonda</h1>
            </div>
            <div className="col-start-3 col-span-4">
                <h2 className="text-3xl font-bold text-left font-poppings">{descricao.title}</h2>
                <p className="mt-1 mb-5 text-justify">{descricao.content}</p>
                <Image
                    width= {400}
                    height={300}
                    src={descricao.img}
                    alt="Mesa redonda"
                    style={{ borderRadius: "15px" }}
                />
                <PalestranteCard name={palestrantes[0].name} description={palestrantes[0].description} />
            </div>
            <div className="col-start-7 col-span-4 ">
                <Image
                    width= {400}
                    height={300}
                    src={explicacao.img}
                    alt="Mesa redonda"
                    style={{ borderRadius: "15px" }}
                />
                <h2 className="mt-5 ml-6 text-3xl font-bold text-left font-poppings">{explicacao.title}</h2>
                <p className="mt-1 ml-6 text-justify">{explicacao.content}</p>
                <PalestranteCard name={palestrantes[1].name} description={palestrantes[1].description} />
            </div>
        </div>
    );
}

export default RoundTable;