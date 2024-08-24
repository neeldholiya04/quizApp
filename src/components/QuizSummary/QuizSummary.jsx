import React, { useState } from 'react';
import { motion } from 'framer-motion';
import useQuizStore from '../../store/quizStore';
import AnswerChoice from '../AnswerChoice/AnswerChoice';

const QuizSummary = ({ score, totalQuestions, onRestart, onHome }) => {
  const [showReview, setShowReview] = useState(false);
  const { selectedQuiz, userAnswers, isDarkMode } = useQuizStore();

  const toggleReview = () => {
    setShowReview(!showReview);
  };

  if (!selectedQuiz) {
    return null;
  }

  const buttonBaseClass = "py-2 px-4 rounded transition duration-200 text-white";
  const restartButtonClass = `${buttonBaseClass} ${isDarkMode ? 'bg-primary-600 hover:bg-primary-700' : 'bg-primary-500 hover:bg-primary-600'}`;
  const reviewButtonClass = `${buttonBaseClass} ${isDarkMode ? 'bg-secondary-600 hover:bg-secondary-700' : 'bg-secondary-500 hover:bg-secondary-600'}`;
  const homeButtonClass = `${buttonBaseClass} ${isDarkMode ? 'bg-purple-600 hover:bg-purple-700' : 'bg-purple-500 hover:bg-purple-600'}`;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="quiz-summary space-y-4"
    >
      <h2 className="text-2xl font-bold text-center text-primary-600 dark:text-primary-400">Quiz Completed!</h2>
      <p className="text-xl text-center">Your score: <span className="font-bold text-secondary-600 dark:text-secondary-400">{score}</span> out of {totalQuestions}</p>
      <div className="flex justify-center space-x-4">
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onRestart}
          className={restartButtonClass}
        >
          Restart Quiz
        </motion.button>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleReview}
          className={reviewButtonClass}
        >
          {showReview ? 'Hide Review' : 'Show Review'}
        </motion.button>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onHome}
          className={homeButtonClass}
        >
          Go to Home
        </motion.button>
      </div>
      {showReview && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.5 }}
          className="mt-8 space-y-8"
        >
          {selectedQuiz.questions.map((question, qIndex) => (
            <motion.div 
              key={qIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: qIndex * 0.1 }}
              className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}
            >
              <h3 className="text-lg font-semibold mb-2 text-primary-600 dark:text-primary-400">{question.text}</h3>
              <div className="space-y-2">
                {question.answers.map((answer, aIndex) => {
                  const isCorrect = question.type === 'multiple' 
                    ? question.correctAnswers.includes(answer)
                    : answer === question.correctAnswer;
                  
                  return (
                    <AnswerChoice
                      key={aIndex}
                      answer={answer}
                      selected={false}
                      onSelect={() => {}}
                      disabled={true}
                      correct={isCorrect}
                      incorrect={false}
                      userAnswer={false}
                    />
                  );
                })}
                <AnswerChoice
                  answer={`Your answer: ${Array.isArray(userAnswers[qIndex]) ? userAnswers[qIndex].join(', ') : userAnswers[qIndex]}`}
                  selected={true}
                  onSelect={() => {}}
                  disabled={true}
                  correct={false}
                  incorrect={false}
                  userAnswer={true}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
};

export default QuizSummary;