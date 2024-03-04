import React from 'react';

interface Teacher {
    name: string,
    photo: string,
    shortDescription: string
}

interface Minicourse {
    name: string,
    subTitle: string,
    description: string,
    teachers: Teacher[]
}

const minicourses: Minicourse[] = [
    /*{
        name: "Iniciando desenvolvimento Front-End",
        subTitle: "HTML e CSS para iniciantes",
        description: "big text",
        teachers: [
            {
                name: "joao x",
                photo: "pathToPhoto",
                shortDescription: "short"
            },
            {
                name: "jao y",
                photo: "pathToPhoto",
                shortDescription: "short"
            }
        ]
    },
    {

    }*/
]

const Buttons = () => {
    return (
        <div className="flex flex-col col-span-1 justify-center">
            <p className="mb-7 text-3xl">Inscreva seu minicurso!</p>
            <div className="mx-40 flex-col flex-wrap space-y-6">
                <div className="col-span-1 flex flex-row justify-center items-center gap-6 text-xl font-bold text-white">
                    <a href="/EditalMinicursos.pdf"
                        download
                        target="_blank"
                        rel="noreferrer"
                        className="bg-green-700 rounded-2xl px-3 py-1">
                        Clique aqui para o Edital!
                    </a>
                    <a href="/FichaDeMinicurso.doc"
                        target="_blank"
                        className="bg-green-700 rounded-2xl px-3 py-1">
                        Clique aqui para a Ficha de Preenchimento!
                    </a>
                </div>
                <div className="col-span-1 text-xl font-bold text-white">
                    <a
                        href="mailto:escolapilotodecomputacao@gmail.com?subject=Envio%20de%20Ficha%20de%20Minicurso%20para%20o%20IX%20WTCC"
                        className="bg-blue-500 rounded-2xl px-3 py-1">
                        Enviar arquivos por email!
                    </a>
                </div>
            </div>
        </div>
    );
}

const Minicourses = () => {
    return (
        <div>
            <div className="flex justify-evenly flex-wrap m-20 gap-4">
                {
                    minicourses.length === 0 ? (
                        <p className=" text-2xl">Sem minicursos ainda!</p>
                    ) : (
                        minicourses.map((mini, index) => {
                            return (
                                <div className="" key={index}>
                                    <h2>{mini.name}</h2>
                                </div>
                            )
                        })
                    )
                }
            </div>
            <Buttons />
        </div>
    );
}

export default Minicourses;
