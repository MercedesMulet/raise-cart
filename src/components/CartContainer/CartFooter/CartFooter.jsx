import { useCart } from '../../../contexts/cart/CartContext';
import { Link } from 'react-router-dom';
import { Button } from '../../Button/Button';

export const CartFooter = () => {
  const { cart } = useCart();

  const totalCart = cart.reduce((total, item) => {
    return total + item.precio * item.quantity;
  }, 0);

  return (
    <div className="cart-footer">
      <p className="total">Total = $ {totalCart}</p>
      <Link to="/">
        <Button buttonStyle="btn-primary-outline">Continuar comprando</Button>
      </Link>
      <Link to="/checkout">
        <Button>Confirmar pedido</Button>
      </Link>
    </div>
  );
};
