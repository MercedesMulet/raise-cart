import { CartWidget } from '../NavBar/CartWidget/CartWidget';

export const NavLinks = (props) => {
  return (
    <ul className="nav-ul">
      <li
        className="nav-li"
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <a href="/#" className="a">
          Inicio
        </a>
      </li>
      <li
        className="nav-li"
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <a href="/#" className="a">
          Tienda
        </a>
      </li>
      <li
        className="nav-li"
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <a href="/#" className="a">
          Cómo comprar
        </a>
      </li>
      <li
        className="nav-li"
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <a href="/#" className="a">
          Contacto
        </a>
      </li>
      <CartWidget />
    </ul>
  );
};
