import React, { useState } from "react";
import { Plus, X } from "lucide-react";
import { faqs } from "../rawData";
import { delay, motion, AnimatePresence } from "framer-motion";
export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.3,
        type: "spring",
        stiffness: 120,
      },
    },
  };

  const childVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
      },
    },
  };

  return (
    <div className="w-full px-[5%] md:px-[20%] md:py-20 py-10 faq sec-faq">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-white md:text-4xl text-2xl font-semibold leading-10 mb-8 uppercase text-center"
      >
        frequently <br></br> asked questions
      </motion.h2>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
      >
        {faqs.map((faq, index) => (
          <FaqItem
            key={index}
            {...faq}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
            childVariants={childVariants}
          />
        ))}
      </motion.div>
    </div>
  );
}

export function FaqItem({ question, answer, isOpen, onToggle, childVariants }) {
  return (
    <motion.div
      variants={childVariants}
      className="mb-4 rounded-md !border !border-solid !border-white second"
    >
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

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
            className="px-6 py-4 text-white bg-transparent text-[12px] "
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
