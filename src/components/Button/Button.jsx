import React from 'react';

export const Button = ({ children, buttonStyle, handleClick }) => {
  const STYLES = [
    'btn-primary-solid',
    'btn-primary-outline',
    'btn-secondary-solid',
    'btn-secondary-outline',
    'btn-delete-outline',
  ];

  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  return (
    <button onClick={handleClick} className={`btn-primary ${checkButtonStyle}`}>
      {children}
    </button>
  );
};
