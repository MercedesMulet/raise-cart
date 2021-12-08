import { useCart } from '../../contexts/cart/CartContext';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';
import { Popup } from '../Popup/Popup';
import { useState } from 'react';
import { getFirestore } from '../../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { Form } from './Form/Form';

export const Checkout = () => {
  const { cart, emptyCart, totalCart } = useCart();

  const [orderFinished, setOrderFinished] = useState(false);
  const [orderId, setOrderId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [buyer, setBuyer] = useState({
    name: '',
    phone: 0,
    email: '',
  });

  const setData = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value,
    });
  };

  const createOrder = () => {
    const date = new Date();
    const orderDate = date.toLocaleDateString();

    const db = getFirestore();
    const ordersCollection = collection(db, 'orders');
    const order = {
      cliente: buyer,
      items: cart,
      total: totalCart,
      date: orderDate,
    };

    addDoc(ordersCollection, order).then(({ id }) => {
      setOrderId(id);
    });
  };

  const finishOrder = () => {
    if (
      buyer.email.length < 6 ||
      buyer.name.length < 2 ||
      buyer.phone.length < 10
    ) {
      alert('Por favor, completa todos los campos.');
      return;
    } else if (cart.length === 0) {
      alert('Vuelve a la sección de productos para continuar comprando.');
      return;
    }
    createOrder();
    emptyCart();
    document.getElementById('form').reset();
    setOrderFinished(true);
  };

  return (
    <div className="checkout">
      <div className="checkout-content">
        <form
          id="form"
          action=""
          method="post"
          onSubmit={handleSubmit}
          className="form"
        >
          <div className="fields">
            <h5>¡Estás a un paso de terminar!</h5>
            <p>Por favor, completa tus datos para generar la orden:</p>
            <div className="field">
              <label htmlFor="nombre">Nombre:</label>
              <Form
                setBuyer={setBuyer}
                type="text"
                name="name"
                buyer={buyer}
                onChange={setData}
              />
            </div>
            <div className="field">
              <label htmlFor="email">Correo electrónico:</label>
              <Form
                setBuyer={setBuyer}
                type="email"
                name="email"
                buyer={buyer}
                onChange={setData}
              />
            </div>
            <div className="field">
              <label htmlFor="phone">Teléfono celular:</label>
              <Form
                setBuyer={setBuyer}
                type="phone"
                name="phone"
                buyer={buyer}
                onChange={setData}
              />
            </div>
          </div>
          <div className="botones">
            <button
              type="submit"
              onClick={() => finishOrder()}
              className="btn-submit"
            >
              Finalizar pedido
            </button>
            <Link to="/cart">
              <Button buttonStyle="btn-primary-outline">Volver</Button>
            </Link>
          </div>
        </form>
        <Popup trigger={orderFinished} setTrigger={setOrderFinished}>
          <div className="popup-children">
            <h2>¡Gracias por tu compra!</h2>
            <h3>
              Tu número de orden es: <strong>{orderId}</strong>
            </h3>
            <p>Enseguida nos pondremos en contacto contigo.</p>
          </div>
        </Popup>
      </div>
    </div>
  );
};
