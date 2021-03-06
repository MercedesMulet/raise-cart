import { ItemCount } from '../../ItemCount/ItemCount';
import { Button } from '../../Button/Button';
import { Link } from 'react-router-dom';
import { useCart } from '../../../contexts/cart/CartContext';

export const ItemDetail = ({ item }) => {
  const { cart, addedItem } = useCart();

  const onAdd = (quantityToCart) => {
    if (quantityToCart >= 1) {
      item.quantity = quantityToCart;
      addedItem(item);
      item.stock = item.stock - quantityToCart;
      item.priceTotal = item.precio * item.quantity;
    }
  };

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      {item && (
        <div className="item-detail" key={item.codigoRaise}>
          <div className="img-detail">
            <img src={item.img} alt="" />
          </div>
          <div className="line"></div>
          <div className="content-detail">
            <div className="info-detail">
              <h2 className="title-detail">
                {item.categoria} {item.referencia}
              </h2>
              <p className="description">
                {item.tipoLlaves}
                <br /> Para máquinas: {item.modeloMaquina}
                <br />
                Material {item.material}
              </p>
              <span className="precio-detail">
                ${item.priceTotal ? item.priceTotal : item.precio}
              </span>
            </div>
            <div className="cta-detail">
              <h5>Stock: {item.stock} disponibles.</h5>
              <div className="quant">
                <ItemCount initial={0} stock={item.stock} onAdd={onAdd} />
              </div>
            </div>
            {totalItems !== 0 && (
              <Link to="/cart">
                <Button buttonStyle="btn-primary-outline">Ir al carrito</Button>
              </Link>
            )}
          </div>
        </div>
      )}
    </>
  );
};
