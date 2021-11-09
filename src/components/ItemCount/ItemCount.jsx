import { useState } from 'react';
import { Button } from '../Button/Button'

export const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const increaseCount = (e) => {
    e.preventDefault();
    if (count < stock) {
      setCount(count + 1)
    } else {
      alert('Alcanzaste el máximo stock disponible.')
    }
  };

  const decreaseCount = (e) => {
    e.preventDefault();
    if (count > 0) {
      setCount(count - 1);
    }
  };
 
  return (
    <>
      <div className="counter">
        <button onClick={decreaseCount} id='decrease'>
          <p className="minus-icon">-</p>
        </button>
        <span>{count}</span>
        <button onClick={increaseCount} id='increase'>
          <p>+</p>
        </button>
      </div>
    </>
  );
};
