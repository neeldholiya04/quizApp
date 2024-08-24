import React from 'react';
import useQuizStore from '../../store/quizStore';

const ProgressBar = ({ progress }) => {
  const { isDarkMode } = useQuizStore();

  return (
    <div className={`w-full h-2 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full mb-4`}>
      <div 
        className="h-full bg-primary-500 rounded-full transition-all duration-300 ease-out" 
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;