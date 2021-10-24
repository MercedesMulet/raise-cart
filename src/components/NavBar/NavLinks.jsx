import { CartWidget } from '../NavBar/CartWidget/CartWidget';

export const NavLinks = () => {
  return (
    <ul className="nav-ul">
      <li className="nav-li">
        <a href="/#" className="a">
          Inicio
        </a>
      </li>
      <li className="nav-li">
        <a href="/#" className="a">
          Tienda
        </a>
      </li>
      <li className="nav-li">
        <a href="/#" className="a">
          Cómo comprar
        </a>
      </li>
      <li className="nav-li">
        <a href="/#" className="a">
          Contacto
        </a>
      </li>
      <CartWidget />
    </ul>
  );
};
