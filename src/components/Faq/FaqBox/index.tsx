import React from "react";
import { Collapse } from 'antd';

//TODO add style to text inside the questions

interface FaqBoxProps {
    key: number;
    question: string;
    answer: string;
}

const FaqBox: React.FC<FaqBoxProps> = ({ key, question, answer }) => {
    return (
        <Collapse
            key={key}
            collapsible="header"
            defaultActiveKey={['0']}
            items={[
                {
                    key: '1',
                    label: question,
                    children: <p>{answer}</p>,
                },
            ]}
        />
    );
};

export default FaqBox;