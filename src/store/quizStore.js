import create from 'zustand';
import quizzes from '../data/quizzes';

const useQuizStore = create((set, get) => ({
  quizzes: quizzes,
  selectedQuiz: null,
  currentQuestionIndex: 0,
  score: 0,
  isFinished: false,
  isDarkMode: false,
  userAnswers: [],

  selectQuiz: (quiz) => set({ 
    selectedQuiz: quiz, 
    currentQuestionIndex: 0, 
    score: 0, 
    isFinished: false,
    userAnswers: Array(quiz.questions.length).fill(null)
  }),
  
  getCurrentQuestion: () => {
    const { selectedQuiz, currentQuestionIndex } = get();
    return selectedQuiz ? selectedQuiz.questions[currentQuestionIndex] : null;
  },
  
  getProgress: () => {
    const { selectedQuiz, currentQuestionIndex } = get();
    return selectedQuiz ? ((currentQuestionIndex + 1) / selectedQuiz.questions.length) * 100 : 0;
  },
  
  setAnswer: (answer) => set((state) => {
    const newUserAnswers = [...state.userAnswers];
    newUserAnswers[state.currentQuestionIndex] = answer;
    return { userAnswers: newUserAnswers };
  }),

  moveToNextQuestion: () => set((state) => {
    const newIndex = state.currentQuestionIndex + 1;
    return {
      currentQuestionIndex: newIndex,
    };
  }),

  moveToPreviousQuestion: () => set((state) => ({
    currentQuestionIndex: Math.max(0, state.currentQuestionIndex - 1),
  })),

  calculateScore: () => {
    const { selectedQuiz, userAnswers } = get();
    let score = 0;
    selectedQuiz.questions.forEach((question, index) => {
      const userAnswer = userAnswers[index];
      if (question.type === 'multiple') {
        if (userAnswer && 
            userAnswer.length === question.correctAnswers.length && 
            question.correctAnswers.every(a => userAnswer.includes(a))) {
          score++;
        }
      } else {
        if (userAnswer && userAnswer[0] === question.correctAnswer) {
          score++;
        }
      }
    });
    return score;
  },

  submitQuiz: () => set((state) => {
    const score = get().calculateScore();
    return {
      score,
      isFinished: true
    };
  }),
  
  restartQuiz: () => set((state) => ({ 
    currentQuestionIndex: 0, 
    score: 0, 
    isFinished: false, 
    userAnswers: Array(state.selectedQuiz.questions.length).fill(null) 
  })),
  
  goToHome: () => set({ 
    selectedQuiz: null, 
    currentQuestionIndex: 0, 
    score: 0, 
    isFinished: false, 
    userAnswers: [] 
  }),
  
  setTheme: (isDarkMode) => set({ isDarkMode }),
}));

export default useQuizStore;