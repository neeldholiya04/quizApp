const quizzes = [
    {
      id: 1,
      title: "General Knowledge",
      description: "Test your knowledge on a variety of topics!",
      questions: [
        {
          text: "What is the capital of France?",
          type: "single",
          answers: ["London", "Berlin", "Paris", "Madrid"],
          correctAnswer: "Paris"
        },
        {
          text: "Which of these are planets in our solar system?",
          type: "multiple",
          answers: ["Earth", "Mars", "Jupiter", "Sun"],
          correctAnswers: ["Earth", "Mars", "Jupiter"]
        },
        {
          text: "Is the Earth flat?",
          type: "boolean",
          answers: ["True", "False"],
          correctAnswer: "False"
        }
      ]
    },
    {
      id: 2,
      title: "Science Quiz",
      description: "Explore the wonders of science with this quiz!",
      questions: [
        {
          text: "What is the chemical symbol for water?",
          type: "single",
          answers: ["Wa", "H2O", "O2", "CO2"],
          correctAnswer: "H2O"
        },
        {
          text: "Which of these are noble gases?",
          type: "multiple",
          answers: ["Helium", "Neon", "Oxygen", "Argon"],
          correctAnswers: ["Helium", "Neon", "Argon"]
        },
        {
          text: "Is light both a particle and a wave?",
          type: "boolean",
          answers: ["True", "False"],
          correctAnswer: "True"
        }
      ]
    },
    {
      id: 3,
      title: "History Trivia",
      description: "Journey through time with this history quiz!",
      questions: [
        {
          text: "In which year did World War II end?",
          type: "single",
          answers: ["1943", "1945", "1947", "1950"],
          correctAnswer: "1945"
        },
        {
          text: "Which of these ancient civilizations existed in Mesopotamia?",
          type: "multiple",
          answers: ["Sumerians", "Babylonians", "Assyrians", "Greeks"],
          correctAnswers: ["Sumerians", "Babylonians", "Assyrians"]
        },
        {
          text: "Was the Declaration of Independence signed in 1776?",
          type: "boolean",
          answers: ["True", "False"],
          correctAnswer: "True"
        }
      ]
    },
    {
      id: 4,
      title: "Pop Culture Quiz",
      description: "How well do you know modern pop culture?",
      questions: [
        {
          text: "Who played Iron Man in the Marvel Cinematic Universe?",
          type: "single",
          answers: ["Chris Evans", "Robert Downey Jr.", "Chris Hemsworth", "Mark Ruffalo"],
          correctAnswer: "Robert Downey Jr."
        },
        {
          text: "Which of these are Netflix original series?",
          type: "multiple",
          answers: ["Stranger Things", "The Crown", "Game of Thrones", "Black Mirror"],
          correctAnswers: ["Stranger Things", "The Crown", "Black Mirror"]
        },
        {
          text: "Is Billie Eilish older than 25?",
          type: "boolean",
          answers: ["True", "False"],
          correctAnswer: "False"
        }
      ]
    }
  ];
  
  export default quizzes;