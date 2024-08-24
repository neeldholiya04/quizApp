# Quiz App

## Table of Contents
1. [Introduction](#introduction)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Prerequisites](#prerequisites)
5. [Installation](#installation)
6. [Usage](#usage)
7. [Project Structure](#project-structure)
8. [Components](#components)
9. [State Management](#state-management)
10. [Styling](#styling)

## Introduction

The Quiz App is an interactive, web-based application designed to provide users with an engaging quiz-taking experience. Built with React and leveraging modern web technologies, this app offers a seamless and responsive interface for users to test their knowledge across various topics.

## Features

- Multiple quiz selection
- Support for different question types:
  - Single choice
  - Multiple choice
  - True/False
- Timer for each question
- Navigation between questions
- Dark mode toggle
- Responsive design for various screen sizes
- Final score summary and review
- Option to restart the quiz or return to home

## Technologies Used

- React.js
- Zustand (for state management)
- Tailwind CSS (for styling)
- Framer Motion (for animations)

## Prerequisites

Before you begin, ensure you have met the following requirements:
- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

## Installation

To install the Quiz App, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/neeldholiya04/quizApp.git
   ```

2. Navigate to the project directory:
   ```
   cd quizApp
   ```

3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To run the Quiz App locally:

1. Start the development server:
   ```
   npm start
   ```

2. Open your browser and visit `http://localhost:3000`

3. Select a quiz from the home page to begin.

4. Answer the questions within the time limit.

5. Navigate between questions using the 'Previous' and 'Next' buttons.

6. Submit your answers on the last question to see your final score.

7. Review your answers and choose to restart the quiz or return to the home page.

## Project Structure

```
quizApp/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── AnswerChoice/
│   │   ├── Question/
│   │   ├── QuizSelection/
│   │   ├── QuizSummary/
│   │   └── ThemeToggle/
│   ├── store/
│   │   └── quizStore.js
│   ├── data/
│   │   └── quizzes.js
│   ├── App.jsx
│   └── index.jsx
├── package.json
└── tailwind.config.js
```

## Components

### App.jsx
The main component that orchestrates the quiz flow and renders other components based on the current state.

### QuizSelection
Displays available quizzes for the user to choose from.

### Question
Renders individual quiz questions, handles user input, and manages the timer.

### AnswerChoice
Represents a single answer choice within a question.

### QuizSummary
Displays the final score and allows users to review their answers.

### ThemeToggle
Provides functionality to switch between light and dark modes.

## State Management

The app uses Zustand for state management. The main store (`quizStore.js`) handles:
- Quiz selection
- Question navigation
- Answer tracking
- Score calculation
- Theme toggling

## Styling

Tailwind CSS is used for styling, providing a responsive and customizable design. The `tailwind.config.js` file contains custom theme configurations.

