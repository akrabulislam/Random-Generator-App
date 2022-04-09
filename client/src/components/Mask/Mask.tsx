import React from 'react';
import './Mask.style.css';

interface Props {
  children: React.ReactChild;
}

const Mask: React.FC<Props> = ({ children }) => {
  return <div className="mask-wrapper">{children}</div>;
};

export default Mask;
