import React from 'react';

export const Form = ({ setBuyer, buyer, name, type }) => {
  const handleBuyerChange = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <input type={type} name={name} onChange={handleBuyerChange} />
    </div>
  );
};
