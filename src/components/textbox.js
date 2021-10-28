import React from 'react';
import './textbox.css';

const TextBox = (placeholder) => {
  return (
    <div className="text">
      <input type="text" placeholder={placeholder.name} />
    </div>
  );
};

export default TextBox;
