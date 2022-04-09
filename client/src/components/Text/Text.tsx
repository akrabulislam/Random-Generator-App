import React from 'react';
import './Text.css';

interface Props {
  text: string;
  result: number;
}

const Text: React.FC<Props> = ({ text, result }) => {
  return (
    <div className="text-wrapper">
      <p>
        <span className="text-type">{text}: </span>
        <span className="text-result">{result}</span>
      </p>
    </div>
  );
};

export default Text;
