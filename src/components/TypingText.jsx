import { useState, useEffect } from 'react';

const TypingText = ({ text, speed }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let timeout;

    const type = () => {
      if (displayText.length < text.length) {
        setDisplayText((prevText) => prevText + text[displayText.length]);
        timeout = setTimeout(type, speed);
      }
    };

    timeout = setTimeout(type, speed);

    return () => {
      clearTimeout(timeout);
    };
  }, [displayText,speed,text]);

  return (
    <div >
      <span className="text-slate-700  font-bold">{displayText}</span>
    </div>
  );
};

export default TypingText;
