import React from 'react';
import { motion } from 'framer-motion';
import useQuizStore from '../../store/quizStore';

const AnswerChoice = ({ answer, selected, onSelect, disabled, correct, incorrect }) => {
  const { isDarkMode } = useQuizStore();

  let bgColor = isDarkMode 
    ? 'bg-gray-700 text-white' 
    : 'bg-gray-200 text-gray-800';
  
  if (correct) {
    bgColor = 'bg-green-500 text-white';
  } else if (incorrect) {
    bgColor = 'bg-red-500 text-white';
  } else if (selected) {
    bgColor = 'bg-blue-500 text-white';
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`w-full py-2 px-4 text-left rounded transition duration-200 ${bgColor} ${disabled ? 'cursor-not-allowed opacity-75' : ''}`}
      onClick={() => onSelect(answer)}
      disabled={disabled}
    >
      {answer}
    </motion.button>
  );
};

export default AnswerChoice;