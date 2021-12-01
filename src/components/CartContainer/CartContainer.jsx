import { useCart } from '../../contexts/cart/CartContext';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';

export const CartContainer = ({ item }) => {
  const { cart, removeItem, emptyCart } = useCart();
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="cart-box">
      {totalItems !== 0 && (
        <div className="header">
          <h3 className="heading">Productos en el carrito: {totalItems}</h3>
          <button onClick={() => emptyCart()} className="empty-cart">
            <h5 className="action">Vaciar carrito</h5>
          </button>
        </div>
      )}
      {cart.length === 0 ? (
        <div className="cart-vacio">
          <img
            className="img-vacio"
            src="https://i.imgur.com/JGfzuhWl.png"
            alt="Carrito Vacío"
          />
          <h2 className="h2-vacio">¡Tu carrito está vacío!</h2>
          <Link to="/">
            <Button>Volver a productos</Button>
          </Link>
        </div>
      ) : (
        cart.map((item) => {
          return (
            <div key={item.referencia} className="cart-container">
              <div className="items-list-container">
                <div className="item-list-box">
                  <img src={item.img} alt={item.categoria} />
                  <div>
                    <h2 className="title-detail">
                      {item.categoria} {item.referencia}
                    </h2>
                    <p className="description">
                      {item.tipoLlaves}
                      <br /> Para: {item.modeloMaquina}
                      <br />
                      {item.material}
                    </p>
                  </div>
                  <div className="price">
                    Precio x unidad: <strong>$ {item.precio}</strong>
                  </div>
                  <div className="quantity">
                    Cantidad: <strong>{item.quantity}</strong>
                  </div>
                  <div className="price-total">
                    Total:{' '}
                    <span className="total-numb">$ {item.priceTotal}</span>
                  </div>
                  <Button
                    buttonStyle="btn-delete-outline"
                    handleClick={() => removeItem(item.referencia)}
                  >
                    Eliminar
                  </Button>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};
