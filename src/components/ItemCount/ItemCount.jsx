import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../Button/Button';
import { CartContext } from '../../contexts/cart/Cart.Context';

export const ItemCount = ({ item, stock, initial }) => {
  const [count, setCount] = useState(initial);
  const [showCount, setShowCount] = useState(false);

  const hideCount = () => {
    setShowCount(true);
  };

  const increaseCount = (e) => {
    e.preventDefault();
    if (count < stock) {
      setCount(count + 1);
      hideCount();
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
      
      {showCount === false ? <div className="counter">
        <button onClick={decreaseCount} id='decrease'>
          <p className="minus-icon">-</p>
        </button>
        <span>{count}</span>
        <button onClick={increaseCount} id='increase'>
          <p>+</p>
        </button>
      </div> :  <Link to='/cart'> Ir al carrito </Link> }
    </>
  );
};

