import React from 'react';

export const Button = ({ children, buttonStyle }) => {
  const STYLES = [
    'btn-primary-solid',
    'btn-primary-outline',
    'btn-secondary-solid',
    'btn-secondary-outline',
  ];

  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  return (
    <div>
      <button className={`btn-primary ${checkButtonStyle}`}>{children}</button>
    </div>
  );
};
