import React from "react";
import { Image } from "antd";
import Mesa1 from "../../assets/RoundTable/Mesa1.png";
import Mesa2 from "../../assets/RoundTable/Mesa2.png";

type Palestrante = {
    name: string;
    description: string;
}

interface PalestranteCardProps {
    palestrante: Palestrante;
}

const PalestranteCard: React.FC<PalestranteCardProps> = ({ palestrante }) => {
    return (
        <div>
            <h2 className="mt-5 text-2xl font-bold text-justify">{palestrante.name}</h2>
            <p className="mt-1 text-justify">{palestrante.description}</p>
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
        <div className="flex flex-col gap-4 mt-10 mx-48 font-poppings">
            <h1 className="mb-8 text-4xl font-bold text-center">Título da Mesa Redonda</h1>
            <div className="flex justify-between items-center">
                <div className="w-3/4 mr-16">
                    <h2 className="text-3xl font-bold text-left">{descricao.title}</h2>
                    <p className="mt-1 mb-5 text-justify">{descricao.content}</p>
                </div>
                <Image
                    width={400}
                    height={300}
                    src={explicacao.img}
                    alt="Mesa redonda"
                    style={{ borderRadius: "15px" }}
                />
            </div>
            <div className="flex justify-between items-center">
                <Image
                    width={425}
                    height={300}
                    src={descricao.img}
                    alt="Mesa redonda"
                    style={{ borderRadius: "15px" }}
                />
                <div className="w-3/4 ml-16">
                    <h2 className="mt-5 ml-6 text-3xl font-bold text-left">{explicacao.title}</h2>
                    <p className="mt-1 ml-6 text-justify">{explicacao.content}</p>
                </div>
            </div>
            <div className="flex flex-row gap-16">
                <PalestranteCard palestrante={palestrantes[0]} />
                <PalestranteCard palestrante={palestrantes[1]} />
            </div>
        </div>
    );
}

export default RoundTable;