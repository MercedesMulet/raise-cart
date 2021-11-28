import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useCart } from '../../../contexts/cart/CartContext';
import { Link } from 'react-router-dom';

export const CartWidget = () => {
  const { cart } = useCart();

  return (
    <div className="cart-nav-icon">
      <Link to="/cart" style={{ textDecoration: 'none', color: 'inherit' }}>
        <FontAwesomeIcon icon={faShoppingCart} />
        <span className="count-cart-widget">{cart.length}</span>
      </Link>
    </div>
  );
};
