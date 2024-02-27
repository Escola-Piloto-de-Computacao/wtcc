import React from "react";
import teste1 from "../../assets/Scientific_show/teste1.svg";

interface MostraItem {
    img: string;
    descricao: string;
    legenda: string;
    // add other properties here
}

const mostra: MostraItem[] = [/*
    {
        img: teste1,
        legenda: "legenda",
        descricao: "O VIII Workshop Técnico-Científico de Computação do RN visa despertar e estimular o interesse dos estudantes de graduação e de Pós-Graduação em Computação na pesquisa científica sobre temas tanto para estudantes quanto para profissionais de computação."
    },
    {
        img: teste1,
        legenda: "legenda2",
        descricao: "uma foto muito grande e meio legal"
    },
    {
        img: teste1,
        legenda: "legenda3",
        descricao: "uma foto muito grande e meio legal"
    },
    {
        img: teste1,
        legenda: "legenda4",
        descricao: "uma foto muito grande e meio legal"
    },
    {
        img: teste1,
        legenda: "legenda5",
        descricao: "uma foto muito grande e meio legal"
    }
*/
];

const Botao = () => {
    return (
        <div className="flex flex-col col-span-1 justify-center text-4xl">
            <p className="mb-7">Submeta seu artigo!</p>
            {/* Adicionar link */}
            <div>
                <a className="font-bold text-white bg-green-700 rounded-md px-3 py-1" href="https://www.google.com.br/?hl=pt-BR">Clique aqui!</a>
            </div>
        </div>
    )
}

const Scientific_show = () => {
    return (
        <div>
            <div className="flex justify-evenly flex-wrap m-20 gap-4">
                {
                    mostra.length === 0 ? (
                        <p>Sem mostras ainda!</p>
                    ) : (
                        mostra.map((m, index) => {
                            return (
                                <div className="w-1/4 mb-12" key={index}>
                                    <div className="mb-4">
                                        <img src={m.img} alt={m.descricao} />
                                        <p className="text-left text-sm text-slate-500 ml-6"> {m.legenda} </p>
                                    </div>
                                    <p className="text-justify indent-4 text-balance hyphens-auto break-words"> {m.descricao} </p>
                                </div>
                            )
                        })
                    )
                }
            </div>
            <Botao />
        </div>
    );
}

export default Scientific_show;