import React from 'react';
import Card from './Card';
import htmlcssjavascript from "../../assets/minicourses/htmlcssjavascript.jpg";

//TODO: add actual courses

interface Teacher {
    name: string,
    image: string,
    shortDescription: string
}

interface Minicourse {
    title: string,
    subTitle: string,
    image: string,
    shortDescription: string,
    description: string,
    teachers: Teacher[]
}

const minicourses: Minicourse[] = [
    {
        title: "Iniciando desenvolvimento Front-End",
        subTitle: "HTML e CSS para iniciantes",
        image: htmlcssjavascript,
        shortDescription: "Aprenda os fundamentos do desenvolvimento Front-End com HTML e CSS.",
        description: "Este curso é projetado para iniciantes que desejam aprender os fundamentos do desenvolvimento web Front-End. Durante este curso, você será guiado através dos conceitos básicos de HTML e CSS, desde a estruturação de páginas HTML até a estilização com CSS. Você aprenderá a criar layouts responsivos e aprimorar a aparência de suas páginas da web.",
        teachers: [
            {
                name: "João X",
                image: "pathToPhoto",
                shortDescription: "Desenvolvedor Front- End experiente."
            },
            {
                name: "João Y",
                image: "pathToPhoto",
                shortDescription: "Designer especializado em UI/ UX."
            }
        ]
    },
    {
        title: "Iniciando desenvolvimento Back-End",
        subTitle: "NodeJS para iniciantes",
        image: htmlcssjavascript,
        shortDescription: "Dê os primeiros passos no desenvolvimento Back-End com NodeJS.",
        description: "Este curso é uma introdução ao desenvolvimento Back-End usando NodeJS, uma plataforma popular para construir aplicativos escaláveis e de alta performance. Você aprenderá a configurar um ambiente de desenvolvimento NodeJS, criar APIs RESTful, conectar-se a bancos de dados e implementar autenticação básica. Ao final deste curso, você terá as habilidades necessárias para iniciar sua jornada no desenvolvimento Back-End.",
        teachers: [
            {
                name: "João X",
                image: "pathToPhoto",
                shortDescription: "Desenvolvedor Full- Stack com expertise em NodeJS."
            },
            {
                name: "João Y",
                image: "pathToPhoto",
                shortDescription: "Especialista em segurança de aplicativos web."
            }
        ]
    },
    {
        title: "Iniciando desenvolvimento Mobile",
        subTitle: "React Native para iniciantes",
        image: htmlcssjavascript,
        shortDescription: "Entre no mundo do desenvolvimento Mobile com React Native.",
        description: "Este curso é uma introdução ao desenvolvimento de aplicativos móveis usando React Native, uma biblioteca JavaScript amplamente utilizada para construir aplicativos nativos para Android e iOS. Durante este curso, você aprenderá a configurar seu ambiente de desenvolvimento, criar componentes de interface de usuário reutilizáveis, gerenciar estado de aplicativo e implementar navegação entre telas. Ao final deste curso, você estará pronto para criar seus próprios aplicativos móveis usando React Native.",
        teachers: [
            {
                name: "João X",
                image: "pathToPhoto",
                shortDescription: "Desenvolvedor Mobile com experiência em React Native."
            },
            {
                name: "João Y",
                image: "pathToPhoto",
                shortDescription: "Designer especializado em interfaces móveis."
            }
        ]
    },
    {
        title: "Iniciando desenvolvimento Web",
        subTitle: "ReactJS para iniciantes",
        image: htmlcssjavascript,
        shortDescription: "Dê os primeiros passos no desenvolvimento web com ReactJS.",
        description: "Este curso é uma introdução ao desenvolvimento web com ReactJS, uma das bibliotecas JavaScript mais populares para construir interfaces de usuário interativas. Durante este curso, você aprenderá a configurar um ambiente de desenvolvimento React, criar componentes reutilizáveis, gerenciar estado de aplicativo usando React Hooks e implementar rotas para navegação entre páginas. Ao final deste curso, você estará pronto para começar a construir suas próprias aplicações web dinâmicas usando ReactJS.",
        teachers: [
            {
                name: "João X",
                image: "pathToPhoto",
                shortDescription: "Desenvolvedor Web com experiência em ReactJS."
            },
            {
                name: "João Y",
                image: "pathToPhoto",
                shortDescription: "Especialista em arquitetura de front- end."
            }
        ]
    }
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


    if (minicourses.length === 0) {
        return (
            <div>
                <div className="flex justify-evenly flex-wrap m-20 gap-4">
                    <p className=" text-2xl">Sem minicursos ainda!</p>
                </div>
                <Buttons />
            </div>
        )
    } else {
        return (
            <div className="mt-10 grid grid-cols-3 mx-56 gap-12">
                {minicourses.map((mini, index) => (
                    <div className="col-span-1" key={index}>
                        <Card minicourse={mini} />
                    </div>
                ))}
            </div>
        );
    }
}

export default Minicourses;
