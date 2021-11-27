import { NavLink } from 'react-router-dom';
import { Button } from '../Button/Button';

export const ViewCart = ({ quantity }) => {
  return (
    <div>
      <Button>
        <NavLink to="/cart" style={{ color: 'inherit' }}>
          Ver carrito: {quantity} item/s
        </NavLink>
      </Button>
    </div>
  );
};
