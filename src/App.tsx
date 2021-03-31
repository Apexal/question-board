import React from 'react';
import './App.css';
import QuestionBoard from './components/QuestionBoard';
// import { Category } from './services/game';

import set1 from './questions/set1'

// const categories: Category[] = [
//   {
//     title: 'Parts of Atoms',
//     questions: [
//       {
//         questionText: 'Where are protons located in an atom?',
//         answerText: 'In the nucleus or in the center',
//         isRevealed: false
//       },
//       {
//         questionText: 'What is the charge of an electron?',
//         answerText: 'Negative',
//         isRevealed: false
//       },
//       {
//         questionText: 'Where are protons located in an atom?',
//         answerText: 'In the nucleus or in the center',
//         isRevealed: false
//       },
//       {
//         questionText: 'Where are protons located in an atom?',
//         answerText: 'In the nucleus or in the center',
//         isRevealed: false
//       }
//     ]
//   },
//   {
//     title: 'Other Thing',
//     questions: [
//       {
//         questionText: 'Where are protons located in an atom?',
//         answerText: 'In the nucleus or in the center',
//         isRevealed: false
//       },
//       {
//         questionText: 'What is the charge of an electron?',
//         answerText: 'Negative',
//         isRevealed: false
//       },
//       {
//         questionText: 'Where are protons located in an atom?',
//         answerText: 'In the nucleus or in the center',
//         isRevealed: false
//       },
//       {
//         questionText: 'Where are protons located in an atom?',
//         answerText: 'In the nucleus or in the center',
//         isRevealed: false
//       }
//     ]
//   },
//   {
//     title: 'Other Thing',
//     questions: [
//       {
//         questionText: 'Where are protons located in an atom?',
//         answerText: 'In the nucleus or in the center',
//         isRevealed: false
//       },
//       {
//         questionText: 'What is the charge of an electron?',
//         answerText: 'Negative',
//         isRevealed: false
//       },
//       {
//         questionText: 'Where are protons located in an atom?',
//         answerText: 'In the nucleus or in the center',
//         isRevealed: false
//       },
//       {
//         questionText: 'Where are protons located in an atom?',
//         answerText: 'In the nucleus or in the center',
//         isRevealed: false
//       }
//     ]
//   },
//   {
//     title: 'Other Thing',
//     questions: [
//       {
//         questionText: 'Where are protons located in an atom?',
//         answerText: 'In the nucleus or in the center',
//         isRevealed: false
//       },
//       {
//         questionText: 'What is the charge of an electron?',
//         answerText: 'Negative',
//         isRevealed: false
//       },
//       {
//         questionText: 'Where are protons located in an atom?',
//         answerText: 'In the nucleus or in the center',
//         isRevealed: false
//       },
//       {
//         questionText: 'Where are protons located in an atom?',
//         answerText: 'In the nucleus or in the center',
//         isRevealed: false
//       }
//     ]
//   },
// ]

function App() {
  return (
    <div className="App">
      <main>
        <QuestionBoard title="Middle School Science" categories={set1} />
      </main>
    </div>
  );
}

export default App;
