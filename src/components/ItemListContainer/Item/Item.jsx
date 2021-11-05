import { Link } from 'react-router-dom';
import { Button } from '../../Button/Button';
import { ItemCount } from './ItemCount/ItemCount';

export const Item = ({ product }) => {
  return (
    <div className="item">
      <img src={product.img} alt="" />
      <div className="item-list-description">
        <div className="item-list-content">
          <h3>
            {product.categoria} {product.referencia}
          </h3>
          <p>{product.tipoLlaves}</p>
        </div>
        <span className="item-list-price">${product.precio}</span>
      </div>
      <ItemCount initial={1} stock={5} />
      <Button buttonStyle="btn-primary-solid">Agregar al carrito</Button>
      <Link to={`/item/${product.referencia}`}>
        <Button buttonStyle="btn-primary-outline">Ver detalles</Button>
      </Link>
    </div>
  );
};
