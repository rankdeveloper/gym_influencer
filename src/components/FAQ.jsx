import React, { useState } from "react";
import { Plus, X } from "lucide-react";
import { faqs } from "../rawData";
export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full px-[5%] md:px-[20%] md:py-20 py-10 faq sec-faq">
      <h2 className="text-white md:text-4xl text-2xl font-semibold leading-10 mb-8 uppercase text-center">
        frequently <br></br> asked questions
      </h2>
      {faqs.map((faq, index) => (
        <FaqItem
          key={index}
          {...faq}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
}

export function FaqItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="mb-4 rounded-md !border !border-solid !border-white second">
      <button
        onClick={onToggle}
        className="w-full text-left flex items-center justify-items-start gap-2 bg-transparent px-6 py-4 "
      >
        {isOpen ? (
          <X className="w-5 h-5 text-white" />
        ) : (
          <Plus className="w-5 h-5 text-white" />
        )}
        <span className="text-white text-[12px] font-normal">{question}</span>{" "}
      </button>

      {isOpen && (
        <div className="px-6 py-4 text-white bg-transparent text-[12px] ">
          {answer}
        </div>
      )}
    </div>
  );
}
