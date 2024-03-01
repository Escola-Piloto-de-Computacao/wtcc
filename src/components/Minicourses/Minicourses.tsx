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

const Button = () => {
    return (
        <div className="flex flex-col col-span-1 justify-center text-4xl">
            <p className="mb-7">Inscreva seu minicurso!</p>
            <div> {/* fix download */}
                <a href="../../assets/documents/submissaodeartigos.doc" download className="font-bold text-white bg-green-700 rounded-2xl px-3 py-1">Clique aqui!</a>
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
            <Button />
        </div>
    );
}

export default Minicourses;
