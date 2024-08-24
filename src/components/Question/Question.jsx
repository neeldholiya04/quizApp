import React, { useState, useEffect, useRef } from 'react';
import useQuizStore from '../../store/quizStore';
import AnswerChoice from '../AnswerChoice/AnswerChoice';

const Question = () => {
  const { 
    getCurrentQuestion, 
    setAnswer, 
    moveToNextQuestion, 
    moveToPreviousQuestion, 
    submitQuiz, 
    isDarkMode, 
    selectedQuiz, 
    currentQuestionIndex,
    userAnswers,
    calculateScore
  } = useQuizStore();

  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [displayTime, setDisplayTime] = useState(30);
  const timerRef = useRef(null);
  const timeLeftRef = useRef(30);

  const question = getCurrentQuestion();
  const isLastQuestion = currentQuestionIndex === selectedQuiz.questions.length - 1;

  useEffect(() => {
    setSelectedAnswers(userAnswers[currentQuestionIndex] || []);
    
    timeLeftRef.current = 30;
    setDisplayTime(30);
    
    if (timerRef.current) clearInterval(timerRef.current);
    
    timerRef.current = setInterval(() => {
      timeLeftRef.current -= 1;
      setDisplayTime(timeLeftRef.current);
      
      if (timeLeftRef.current <= 0) {
        clearInterval(timerRef.current);
        handleNext(); 
      }
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentQuestionIndex]); 

  const handleAnswerSelect = (answer) => {
    let newSelectedAnswers;
    if (question.type === 'multiple') {
      newSelectedAnswers = selectedAnswers.includes(answer)
        ? selectedAnswers.filter(a => a !== answer)
        : [...selectedAnswers, answer];
    } else {
      newSelectedAnswers = [answer];
    }
    setSelectedAnswers(newSelectedAnswers);
    setAnswer(newSelectedAnswers);
  };

  const handleNext = () => {
    moveToNextQuestion();
  };

  const handlePrevious = () => {
    moveToPreviousQuestion();
  };

  const handleSubmit = () => {
    submitQuiz();
  };

  if (!question) return null;


  return (
    <div className="question space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold text-primary-600 dark:text-primary-400">{question.text}</h3>
        <div className={`text-lg font-bold ${displayTime <= 10 ? 'text-red-500' : 'text-secondary-500 dark:text-secondary-400'}`}>{displayTime}s</div>
      </div>
      <div className="space-y-2">
        {question.answers.map((answer, index) => (
          <AnswerChoice
            key={index}
            answer={answer}
            selected={selectedAnswers.includes(answer)}
            onSelect={() => handleAnswerSelect(answer)}
            disabled={false}
            correct={false}
            incorrect={false}
          />
        ))}
      </div>
      <div className="flex justify-between items-center mt-4">
        <button 
          onClick={handlePrevious}
          disabled={currentQuestionIndex === 0}
          className={`py-2 px-4 rounded transition duration-200 ${
            isDarkMode 
              ? 'bg-gray-600 hover:bg-gray-700 text-white' 
              : 'bg-gray-300 hover:bg-gray-400 text-gray-800'
          } disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          Previous
        </button>
        {isLastQuestion ? (
          <button 
            onClick={handleSubmit}
            className={`py-2 px-4 rounded transition duration-200 ${
              isDarkMode 
                ? 'bg-green-600 hover:bg-green-700 text-white' 
                : 'bg-green-500 hover:bg-green-600 text-white'
            }`}
          >
            Submit Quiz
          </button>
        ) : (
          <button 
            onClick={handleNext}
            className={`py-2 px-4 rounded transition duration-200 ${
              isDarkMode 
                ? 'bg-primary-600 hover:bg-primary-700 text-white' 
                : 'bg-primary-500 hover:bg-primary-600 text-white'
            }`}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Question;
