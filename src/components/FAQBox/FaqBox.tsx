import React, { useState } from "react";
import { FaArrowAltCircleUp, FaArrowAltCircleDown } from "react-icons/fa";

interface FaqBoxProps {
  question: string;
  answer: string;
}

const FaqBox: React.FC<FaqBoxProps> = ({ question, answer }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`flex bg-gray-200 rounded-lg px-4 py-2 items-start justify-between ${expanded ? "": "h-18"}`}>
      <div className="flex flex-col justify-start">
        <h2 className="flex text-xl text-[#2A3342] font-semibold">{question}</h2>
        {expanded && <p className="text-[#556987] text-justify">{answer}</p>}
      </div>
      <button className="" onClick={toggleExpansion}>
        {expanded ? <FaArrowAltCircleUp /> : <FaArrowAltCircleDown />}
        
      </button>
    </div>
  );
};

export default FaqBox;