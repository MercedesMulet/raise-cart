import { useState } from 'react';

export const ItemCount = ({ stock, initial }) => {
  const [count, setcount] = useState(initial);
  const [lastClickDate, setLastClickDate] = useState(new Date());

  const increaseCount = () => {
    if (count === stock) {
      alert('Disculpa, alcanzaste el máximo de productos.');
    } else {
      setcount((prevCount) => prevCount + 1);
      setLastClickDate(new Date());
    }
  };

  const decreaseCount = () => {
    if (count >= 2) {
      setcount((prevCount) => prevCount - 1);
      setLastClickDate(new Date());
    } else {
      alert('No puedes seleccionar menos de 1 producto.');
    }
  };

  return (
    <>
      <div className="counter">
        <button onClick={decreaseCount}>
          <p className="minus-icon">-</p>
        </button>
        <span>{count}</span>
        <button onClick={increaseCount}>
          <p>+</p>
        </button>
      </div>
      <h4>Fecha de último click: {lastClickDate.toString()}</h4>
    </>
  );
};
