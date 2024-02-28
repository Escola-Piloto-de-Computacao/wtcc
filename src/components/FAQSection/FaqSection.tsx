import React from 'react'
import FaqBox from '../FAQBox/FaqBox'
import FaqLogo from '../../assets/LogoFaq.png'

const Faq: React.FC = () => {

    return (

        <div className='flex items-center flex-col'>
            <img src={FaqLogo} alt='Logo FAQ' className='mx-auto mt-40 mb-8 max-w-xs h-auto' />
            <div className="grid grid-cols-2 gap-10 w-2/3 justify-start">
                <FaqBox
                question="Os mini-cursos oferecidos cobram algum valor de inscrição?"
                answer="Não! Todos os mini-cursos são oferecidos gratuitamente, basta apenas se inscrever para participar!"
                />
                <FaqBox
                question="Apenas os alunos de Computação podem se inscrever nos mini-cursos?"
                answer="Os mini-cursos são abertos para inscrições de alunos de qualquer curso."
                />
                <FaqBox
                question="É necessário algum tipo de conhecimento prévio para participar?"
                answer="Todos os mini-cursos começarão do básico. Então não é preciso um conhecimento prévio, pois você aprenderá na hora."
                />
                <FaqBox
                question="No período do evento haverá aulas para os alunos de Computação?"
                answer="Não, as aulas que ocorrerem nos horários do evento serão suspensas para que todos possam participar dos mini-cursos."
                />
                <FaqBox
                question='Onde fica o LCC - Laboratório de Ciência da Computação?'
                answer='O LCC está localizado no leste da UFERSA, próximo ao Expocenter.'
                />
                <FaqBox
                question='Em qual local será sediado a abertura do evento?'
                answer='A abertura será localizada no auditório de CCEN.'
                />
            </div>
        </div>
        
    );

};

export default Faq;