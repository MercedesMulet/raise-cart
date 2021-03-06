import { Loader } from '../../Loader/Loader';
import { Item } from '../Item/Item';

export const ItemList = ({ products }) => {

  return (
    <div className="item-list">
      {products.length ? (
        products.map((product) => (
          <Item product={product} key={product.codigoRaise}/>
        ))
      ) : (
        <Loader />
      )}
    </div>
  );
};