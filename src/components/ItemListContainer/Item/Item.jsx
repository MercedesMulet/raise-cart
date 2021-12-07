import { Link } from 'react-router-dom';
import { Button } from '../../Button/Button';

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
      <Link to={`/item/${product.id}`}>
        <Button buttonStyle="btn-primary-outline">Ver detalles</Button>
      </Link>
    </div>
  );
};
