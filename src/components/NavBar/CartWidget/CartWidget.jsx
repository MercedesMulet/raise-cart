import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useCart } from '../../../contexts/cart/CartContext';
import { Link } from 'react-router-dom';

export const CartWidget = () => {
  const { cart } = useCart();

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="cart-nav-icon">
      <Link to="/cart" style={{ textDecoration: 'none', color: 'inherit' }}>
        <FontAwesomeIcon icon={faShoppingCart} />
        {totalItems !== 0 && (
          <span className="count-cart-widget">{totalItems}</span>
        )}
      </Link>
    </div>
  );
};
