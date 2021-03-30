import React from 'react';
import './App.css';
import QuestionBoard from './components/QuestionBoard';
import { Category } from './services/game';

const categories: Category[] = [
  {
    title: 'Parts of Atoms',
    questions: [
      {
        questionText: 'Where are protons located in an atom?',
        answerText: 'In the nucleus or in the center',
        isRevealed: false
      },
      {
        questionText: 'What is the charge of an electron?',
        answerText: 'Negative',
        isRevealed: false
      },
      {
        questionText: 'Where are protons located in an atom?',
        answerText: 'In the nucleus or in the center',
        isRevealed: false
      },
      {
        questionText: 'Where are protons located in an atom?',
        answerText: 'In the nucleus or in the center',
        isRevealed: false
      }
    ]
  },
  {
    title: 'Other Thing',
    questions: [
      {
        questionText: 'Where are protons located in an atom?',
        answerText: 'In the nucleus or in the center',
        isRevealed: false
      },
      {
        questionText: 'What is the charge of an electron?',
        answerText: 'Negative',
        isRevealed: false
      },
      {
        questionText: 'Where are protons located in an atom?',
        answerText: 'In the nucleus or in the center',
        isRevealed: false
      },
      {
        questionText: 'Where are protons located in an atom?',
        answerText: 'In the nucleus or in the center',
        isRevealed: false
      }
    ]
  },
  {
    title: 'Other Thing',
    questions: [
      {
        questionText: 'Where are protons located in an atom?',
        answerText: 'In the nucleus or in the center',
        isRevealed: false
      },
      {
        questionText: 'What is the charge of an electron?',
        answerText: 'Negative',
        isRevealed: false
      },
      {
        questionText: 'Where are protons located in an atom?',
        answerText: 'In the nucleus or in the center',
        isRevealed: false
      },
      {
        questionText: 'Where are protons located in an atom?',
        answerText: 'In the nucleus or in the center',
        isRevealed: false
      }
    ]
  },
  {
    title: 'Other Thing',
    questions: [
      {
        questionText: 'Where are protons located in an atom?',
        answerText: 'In the nucleus or in the center',
        isRevealed: false
      },
      {
        questionText: 'What is the charge of an electron?',
        answerText: 'Negative',
        isRevealed: false
      },
      {
        questionText: 'Where are protons located in an atom?',
        answerText: 'In the nucleus or in the center',
        isRevealed: false
      },
      {
        questionText: 'Where are protons located in an atom?',
        answerText: 'In the nucleus or in the center',
        isRevealed: false
      }
    ]
  },
]

function App() {
  return (
    <div className="App">
      <main>
        <QuestionBoard title="Middle School Science" categories={categories} />
      </main>
    </div>
  );
}

export default App;
