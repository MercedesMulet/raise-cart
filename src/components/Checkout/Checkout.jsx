import { useCart } from '../../contexts/cart/CartContext';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';
import { Popup } from '../Popup/Popup';
import { useState } from 'react';
import { getFirestore } from '../../firebase'
import { collection, addDoc } from 'firebase/firestore';

export const Checkout = () => {
  const [orderFinished, setOrderFinished] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const [buyer, setBuyer] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const { cart, emptyCart, totalCart } = useCart();

  const date = new Date();
  const orderDate = date.toLocaleDateString();
  
  const db = getFirestore();
  const ordersCollection = collection(db, 'orders');

  const createOrder = async (e) => {
    try {
      e.preventDefault();
      const order = {
        buyer,
        items : cart,
        total : totalCart,
        date : orderDate
      };
      addDoc(ordersCollection, order).then( ({id}) => setOrderId(id));
      /* const results = await ordersCollection.add(order); */
      setBuyer({
        name: '',
        email: '',
        phone: ''
      });
    } catch (err) {
      console.log(err);
    }
  }

  const finishOrder = () => {
    emptyCart();
    setOrderFinished(true);
    createOrder();
  };

  return (
    <div className="checkout">
      <div className="checkout-content">
        <div className="header">
          <h5>¡Estás a un paso de terminar!</h5>
        </div>
        <div className="formSection" onSubmit={createOrder}>
        <div className="form">
          <p>Por favor, completa tus datos para generar la orden:</p>
          <div className="field">
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" name="nombre" id="nombre" required />
          </div>
          <div className="field">
            <label htmlFor="nombre">Email:</label>
            <input type="email" name="email" id="email" required />
          </div>
          <div className="field">
            <label htmlFor="nombre">Teléfono celular:</label>
            <input type="phone" name="celular" id="celular" required />
          </div>
        </div>
        <div className="botones">
          <Button type="submit" value="submit" handleClick={() => finishOrder()}>Finalizar pedido</Button>
          <Link to="/cart">
            <Button buttonStyle="btn-primary-outline">Volver</Button>
          </Link>
        </div>
        </div>
        <Popup trigger={orderFinished} setTrigger={setOrderFinished}>
          <div className="popup-children">
            <h2>¡Gracias por tu compra!</h2>
            <h3>Tu número de orden es: <strong>{orderId}</strong></h3>
            <p>Enseguida nos pondremos en contacto contigo.</p>
          </div>
        </Popup>
      </div>
    </div>
  );
};
