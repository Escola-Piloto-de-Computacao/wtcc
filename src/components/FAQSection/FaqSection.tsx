import React from 'react'
import FaqBox from './FAQBox/FaqBox'

const questions = [
    {
        question: "Os mini-cursos oferecidos cobram algum valor de inscrição?",
        answer: "Não! Todos os mini-cursos são oferecidos gratuitamente, basta apenas se inscrever para participar!"
    },
    {
        question: "Apenas os alunos de Computação podem se inscrever nos mini-cursos?",
        answer: "Os mini-cursos são abertos para inscrições de alunos de qualquer curso."
    },
    {
        question: "É necessário algum tipo de conhecimento prévio para participar?",
        answer: "Todos os mini-cursos começarão do básico. Então não é preciso um conhecimento prévio, pois você aprenderá na hora."
    },
    {
        question: "No período do evento haverá aulas para os alunos de Computação?",
        answer: "Não, as aulas que ocorrerem nos horários do evento serão suspensas para que todos possam participar dos mini-cursos."
    },
    {
        question: 'Onde fica o LCC - Laboratório de Ciência da Computação?',
        answer: 'O LCC está localizado no leste da UFERSA, próximo ao Expocenter.'
    },
    {
        question: 'Em qual local será sediado a abertura do evento?',
        answer: 'A abertura será localizada no Auditório de CCEN.'
    }
]

const QuestionMark = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="14" fill="none" viewBox="0 0 10 14">
            <path fill="#000" d="M3.637 12.379c.046-.177.165-.328.359-.453a.723.723 0 0 1 .593-.11c.24.062.455.192.646.389.194.184.254.422.18.712-.069.265-.198.426-.388.485a1.217 1.217 0 0 1-.601-.014 1.482 1.482 0 0 1-.637-.345c-.17-.178-.22-.4-.152-.664Zm-.103-4.847c.163-.321.364-.606.603-.854.242-.26.491-.498.749-.714.273-.226.55-.443.833-.653a7.86 7.86 0 0 0 .992-.874c.108-.107.218-.22.329-.339.115-.132.221-.259.32-.381a3.69 3.69 0 0 0 .23-.264c.098-.122.146-.204.143-.245a1.01 1.01 0 0 1 .045-.251 3.225 3.225 0 0 0-1.46-.053 9.782 9.782 0 0 0-1.409.383 3.445 3.445 0 0 0-.618.285.82.82 0 0 1-.644.076c-.19-.049-.373-.17-.552-.364-.175-.206-.234-.423-.176-.65.02-.076.038-.118.053-.128.032-.018.092-.043.181-.074.44-.196.868-.368 1.283-.517a7.604 7.604 0 0 1 1.243-.365 5.9 5.9 0 0 1 1.285-.134c.445-.006.908.053 1.387.176.403.104.726.288.967.552.254.267.324.62.21 1.062-.074.29-.2.574-.38.85-.179.277-.38.54-.607.792a7.235 7.235 0 0 1-.725.7l-.682.612c-.14.125-.316.261-.528.408a7.98 7.98 0 0 0-.629.483c-.203.163-.39.337-.558.522-.165.173-.27.341-.311.505a.253.253 0 0 0 .074.261c.075.073.1.16.074.261-.059.227-.17.373-.335.438a.963.963 0 0 1-.545.001 1.169 1.169 0 0 1-.745-.555 1.25 1.25 0 0 1-.107-.915l.01-.037Z" />
        </svg>
    );
}

const QuestionMarks = () => {
    const generateRotation = () => {
        return Math.floor(Math.random() * 91) - 45; // generates a random number between -45 and 45
    };

    return (
        <div>
            <div className="absolute" style={{ transform: `translateX(-25px) translateY(5px) rotate(${generateRotation()}deg)` }}>
                <QuestionMark />
            </div>
            <div className="absolute" style={{ transform: `translateX(80px) rotate(${generateRotation()}deg)` }}>
                <QuestionMark />
            </div>
            <div className="absolute" style={{ transform: `translateX(65px) translateY(50px) rotate(${generateRotation()}deg)` }}>
                <QuestionMark />
            </div>
        </div>
    );
}

const Heading = () => {
    return (
        <div className="mb-12 mt-12">
            <QuestionMarks />
            <h1 className="text-4xl font-semibold border-b-[4px] border-red-500">FAQ</h1>
        </div>
    );
}

const Faq: React.FC = () => {

    return (
        <div className='flex items-center flex-col'>
            <Heading />
            <div className="flex justify-between w-[78%]">
                <div className="grid gap-12 w-[46%]">
                    {questions.slice(0, questions.length / 2).map((question, index) => (
                        <FaqBox key={index} question={question.question} answer={question.answer} />
                    ))}
                </div>
                <div className="grid gap-12 w-[46%]">
                    {questions.slice(questions.length / 2).map((q, index) => (
                        <FaqBox key={index} question={q.question} answer={q.answer} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Faq;