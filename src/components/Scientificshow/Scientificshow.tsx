import React from "react";
import teste1 from "../../assets/Scientific_show/teste1.svg";

const mostra = [
    {
        img: teste1,
        legenda: "legenda",
        descricao: "uma foto muito grande e legalsdjfglk asbdfloasublfubspfu dhlsiudfoiwuhf iuheouhhebf dus ufepfu hgpsiuef hpushefp u silufhoasiue fhpisohfasu"
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

];

const Botao = () => {
    return (
    <div className="flex justify-center text-4xl">
        <p>
            Submeta seu artigo! <br />
            <br />
            {/* Adicionar link */}
            <a className="font-bold text-white bg-green-700 rounded-md" href="https://www.google.com.br/?hl=pt-BR">
                Inscreva-se
            </a>
        </p>
    </div>
    )
}

const Scientific_show = () => {
    return (
        <div>
            <div className="flex justify-evenly flex-wrap m-20 gap-4">
            {
                mostra.map((m, index) => {
                    return (
                        <div className="w-1/4" key={index}>
                            <div>
                                <img src={m.img} alt={m.descricao} />
                                <p className="text-left text-sm text-slate-500 ml-6"> {m.legenda} </p>
                            </div>

                            <p> {m.descricao} </p>
                        </div>
                    )
                })
            }
            </div>
            <Botao />
        </div>
    );
}

export default Scientific_show;