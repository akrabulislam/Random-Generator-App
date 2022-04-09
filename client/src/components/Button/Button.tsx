import React from 'react';
import './Button.css';

interface Props {
  text: string;
  btnType: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<Props> = ({ text, btnType , onClick }) => {
  return (
    <div className="btn-wrapper">
      <button onClick={onClick} className={`btn ${btnType}`}>{text}</button>
    </div>
  );
};

export default Button;
