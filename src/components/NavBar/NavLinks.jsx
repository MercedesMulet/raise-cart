import { Link } from 'react-router-dom';
import { CartWidget } from '../NavBar/CartWidget/CartWidget';

export const NavLinks = (props) => {
  return (
    <ul className="nav-ul">
      <li
        className="nav-li"
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <Link to='/categoria/Disco' className="a">
          Discos
        </Link>
      </li>
      <li
        className="nav-li"
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <Link to='/categoria/Cortador' className="a">
          Cortadores
        </Link>
      </li>
      <li
        className="nav-li"
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <Link to='/categoria/Guía' className="a">
          Guías
        </Link>
      </li>
      <CartWidget />
    </ul>
  );
};
