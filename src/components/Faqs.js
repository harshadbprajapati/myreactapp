import React, { useState } from 'react';
import MyFaq from './MyFaq';

const Faqs = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const faqs = [
    {
      question: "What is React?",
      answer: `React is a JavaScript library for building user interfaces that 
      allows developers to create reusable UI components and efficiently 
      manage the state of an application.`,
    },
    {
      question: "What is JSX in React?",
      answer: ` JSX (JavaScript XML) is a syntax extension for JavaScript 
      used in React, allowing developers to write HTML-like code in 
      their JavaScript files, making it easier to describe UI components.`,
    },
    {
      question: "How does state differ from props in React?",
      answer: `In React, props are used to pass data from parent to child components, 
        while state is used to manage internal component data that can change over time, 
        triggering re-rendering of the component.`,
    },
    // Add more child components as needed
  ];

  const handleQuestionClick = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div>
      <h1>FAQs on React</h1>
      {faqs.map((child, index) => (
        <MyFaq
          key={index}
          question={child.question}
          answer={child.answer}
          expanded={index === expandedIndex}
          onClick={() => handleQuestionClick(index)}
        />
      ))}
    </div>
  );
};

export default Faqs;


