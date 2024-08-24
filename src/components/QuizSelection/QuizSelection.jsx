import React from 'react';
import { motion } from 'framer-motion';
import useQuizStore from '../../store/quizStore';

const QuizCard = ({ quiz, onSelect, isDarkMode }) => {
  const cardClass = `p-4 rounded-lg shadow-md transition duration-200 cursor-pointer ${
    isDarkMode ? 'bg-darkCard hover:bg-gray-700' : 'bg-white hover:bg-gray-50'
  }`;

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cardClass}
      onClick={() => onSelect(quiz)}
    >
      <h3 className="text-xl font-semibold mb-2">{quiz.title}</h3>
      <p className="text-sm mb-2 text-gray-600 dark:text-gray-300">{quiz.description}</p>
      <p className="text-sm text-primary-600 dark:text-primary-400">Questions: {quiz.questions.length}</p>
    </motion.div>
  );
};

const QuizSelection = () => {
  const { quizzes, selectQuiz, isDarkMode } = useQuizStore();

  return (
    <div className="quiz-selection">
      <h2 className="text-2xl font-bold mb-6 text-center text-primary-600 dark:text-primary-400">Choose a Quiz</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {quizzes.map((quiz) => (
          <QuizCard
            key={quiz.id}
            quiz={quiz}
            onSelect={selectQuiz}
            isDarkMode={isDarkMode}
          />
        ))}
      </div>
    </div>
  );
};

export default QuizSelection;