import { ItemCount } from '../ItemCount/ItemCount';

export const ItemList = ({ product }) => {
  return (
    <div className="item-list">
      <img src={product.img} alt="" />
      <div className="item-list-description">
        <div className="item-list-content">
          <h3>
            {product.categoria} {product.referencia}
          </h3>
          <p>Para {product.tipoLlaves}</p>
        </div>
        <span className="item-list-price">${product.precio}</span>
      </div>
      <button className="item-list-btn">Agregar al carrito</button>
      <ItemCount initial={1} stock={5} />
    </div>
  );
};
