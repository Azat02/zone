import React, { useState } from 'react';
import css from "../../pages/LandingPage/Landing.module.css";

export default function Questions({theme}) {

  const questionData = [
    {
      question: 'Sed augue ipsum, egestas nec, vestibulum et',
      answer: 'Curabitur nisi. Phasellus blandit leo ut odio. Donec posuere vulputate arcu. Donec mi odio, faucibus at, scelerisque quis, convallis in,'
    },
    {
      question: 'Malesuada adipiscing, dui vestibulum suscipit nulla quis orci.',
      answer: 'Curabitur nisi. Phasellus blandit leo ut odio. Donec posuere vulputate arcu. Donec mi odio, faucibus at, scelerisque quis, convallis in,'
    },
    {
      question: 'Ut varius tincidunt libero.',
      answer: 'Curabitur nisi. Phasellus blandit leo ut odio. Donec posuere vulputate arcu. Donec mi odio, faucibus at, scelerisque quis, convallis in,'
    },
    {
      question: 'In ut quam vitae odio lacinia tincidunt.',
      answer: 'Curabitur nisi. Phasellus blandit leo ut odio. Donec posuere vulputate arcu. Donec mi odio, faucibus at, scelerisque quis, convallis in,'
    },
    {
      question: 'Fusce vel dui Morbi nec metus.',
      answer: 'Curabitur nisi. Phasellus blandit leo ut odio. Donec posuere vulputate arcu. Donec mi odio, faucibus at, scelerisque quis, convallis in,'
    }
  ];

  const [answers, setAnswers] = useState(questionData.map(() => false));

  const toggleAnswer = (index) => {
    setAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      newAnswers[index] = !newAnswers[index];
      return newAnswers;
    });
  };

  return (
    <div>
      {questionData.map((item, index) => (
        <div className={css.questions} key={index} style={answers[index] ? {background: '#212B36', paddingTop: '15px', width: '564px' } : null}>
          <div className={css.question} style={theme ? null : {color: '#fff'}}>
            {item.question}
            {answers[index] && (
              <div className={css.answer} style={theme ? null : {color: '#fff'}}>{item.answer}</div>
            )}
          </div>
          <button
            onClick={() => toggleAnswer(index)}
            className={css.question_btn} style={theme ? null : {color: '#fff'}}
          >
            {answers[index] ? '-' : '+'}
          </button>
        </div>
      ))}
    </div>
  );
}

