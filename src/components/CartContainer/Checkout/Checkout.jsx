import { useCart } from '../../../contexts/cart/CartContext';
import { Button } from '../../Button/Button';
import { Link } from 'react-router-dom';

export const Checkout = (props) => {
  const { cart } = useCart();

  return (
    <div className="checkout">
      <div className="checkout-content">
        <div className="header">
          <h5>¡Gracias por su compra!</h5>
          <p>Su número de orden es: {cart.length}</p>
        </div>
        <div className="form">
          <p>Por favor, complete sus datos para enviarle la orden:</p>
          <div className="field">
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" name="nombre" id="nombre" />
          </div>
          <div className="field">
            <label htmlFor="nombre">Email:</label>
            <input type="email" name="email" id="email" />
          </div>
          <div className="field">
            <label htmlFor="nombre">Teléfono celular:</label>
            <input type="phone" name="celular" id="celular" />
          </div>
        </div>
        <div className="botones">
          <Button>Finalizar pedido</Button>
          <Link to="/cart">
            <Button buttonStyle="btn-primary-outline">Volver</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
