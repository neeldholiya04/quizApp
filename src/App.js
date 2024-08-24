import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useQuizStore from './store/quizStore';
import QuizSelection from './components/QuizSelection/QuizSelection';
import Question from './components/Question/Question';
import ProgressBar from './components/ProgressBar/ProgressBar';
import ThemeToggle from './components/ThemeToggle/ThemeToggle';
import QuizSummary from './components/QuizSummary/QuizSummary';

function App() {
  const { 
    selectedQuiz, 
    isFinished, 
    getProgress, 
    score, 
    selectQuiz, 
    restartQuiz,
    goToHome,
    isDarkMode 
  } = useQuizStore();

  const renderContent = () => {
    if (!selectedQuiz) {
      return (
        <motion.div
          key="selection"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.3 }}
        >
          <QuizSelection onSelectQuiz={selectQuiz} />
        </motion.div>
      );
    }

    if (isFinished) {
      return (
        <motion.div
          key="summary"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.3 }}
        >
          <QuizSummary
            score={score}
            totalQuestions={selectedQuiz.questions.length}
            onRestart={restartQuiz}
            onHome={goToHome}
          />
        </motion.div>
      );
    }

    return (
      <motion.div
        key="question"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.3 }}
      >
        <ProgressBar progress={getProgress()} />
        <Question />
      </motion.div>
    );
  };

  return (
    <div className={`min-h-screen p-4 pb-20 lg:pb-4 ${isDarkMode ? 'dark bg-darkBg text-darkText' : 'bg-lightBg text-lightText'}`}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto bg-lightCard dark:bg-darkCard p-6 rounded-lg shadow-lg"
      >
        <AnimatePresence mode="wait">
          {renderContent()}
        </AnimatePresence>
      </motion.div>
      <ThemeToggle />
    </div>
  );
}

export default App;