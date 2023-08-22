import React, { useState, useEffect } from 'react';

const texts = [
  "Hello, World!",
  "Good Food",
  "Snacks",
  "Liqour",
];

function TypingAnimation() {
  const [textIndex, setTextIndex] = useState(0);
  const [typingText, setTypingText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (isTyping) {
      if (typingText === texts[textIndex]) {
        setIsTyping(false);
        setTimeout(() => {
          setIsTyping(true);
        }, 1000);
      } else {
        setTimeout(() => {
          setTypingText(texts[textIndex].slice(0, typingText.length + 1));
        }, 100);
      }
    } else {
      if (typingText === '') {
        setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      } else {
        setTimeout(() => {
          setTypingText(typingText.slice(0, -1));
        }, 50);
      }
    }
  }, [typingText, textIndex, isTyping]);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <div className="text-2xl font-semibold mb-4">Typing Animation</div>
        <div className="bg-gray-100 px-4 py-2 inline-block">
          <div className="bg-white px-2 py-1 inline-block">
            {typingText}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TypingAnimation;
