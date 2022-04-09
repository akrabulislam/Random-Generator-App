import React from 'react';
import './Link.css';

interface Props {
  url: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Link: React.FC<Props> = ({ onClick, url }) => {
  return (
    <div className="link-wrapper">
      <span>Link: </span>
      {url.length ? <button onClick={onClick}>{url}</button> : ''}
    </div>
  );
};

export default Link;
