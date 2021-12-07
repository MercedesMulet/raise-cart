import { useCart } from '../../../contexts/cart/CartContext';
import { Button } from '../../Button/Button';
import { Link } from 'react-router-dom';
import { Popup } from '../../Popup/Popup';
import { useState } from 'react';

export const Checkout = () => {
  const [orderFinished, setOrderFinished] = useState(false);

  const { cart, emptyCart } = useCart();

  const finishOrder = () => {
    emptyCart();
    setOrderFinished(true);
  };

  return (
    <div className="checkout">
      <div className="checkout-content">
        <div className="header">
          <h5>¡Estás a un paso de terminar!</h5>
          <p>Tu número de orden es: {cart.length}</p>
        </div>
        <div className="form">
          <p>Por favor, completa tus datos para enviarte la orden:</p>
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
          <Button handleClick={() => finishOrder()}>Finalizar pedido</Button>
          <Link to="/cart">
            <Button buttonStyle="btn-primary-outline">Volver</Button>
          </Link>
        </div>
        <Popup trigger={orderFinished} setTrigger={setOrderFinished}>
          <div className="popup-children">
            <h2>¡Gracias por tu compra!</h2>
            <p>Enseguida nos pondremos en contacto contigo.</p>
          </div>
        </Popup>
      </div>
    </div>
  );
};
