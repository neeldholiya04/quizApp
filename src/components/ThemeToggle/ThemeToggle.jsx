import React from 'react';
import { motion } from 'framer-motion';
import useQuizStore from '../../store/quizStore';

const ThemeToggle = () => {
  const { isDarkMode, setTheme } = useQuizStore();

  const toggleTheme = () => {
    setTheme(!isDarkMode);
  };

  return (
    <motion.button 
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme} 
      className="fixed bottom-4 right-4 lg:bottom-auto lg:top-4 text-2xl focus:outline-none bg-gray-200 dark:bg-gray-700 p-2 rounded-full shadow-lg z-50"
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDarkMode ? '☀️' : '🌙'}
    </motion.button>
  );
};

export default ThemeToggle;