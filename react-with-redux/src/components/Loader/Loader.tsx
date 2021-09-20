import React from 'react';
import './Loader.scss';

export function Loader(): JSX.Element {
  return (
    <div className="loading-overlay">
      <div className="loading-container">
        <div className="loading-dot"></div>
        <div className="loading-dot"></div>
        <div className="loading-dot"></div>
      </div>
    </div>
  );
}
