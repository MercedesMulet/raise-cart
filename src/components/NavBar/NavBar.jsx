import { CartWidget } from '../CartWidget/CartWidget';

export const NavBar = () => {
  return (
    <>
      <nav className="nav">
        <div className="container-logo">
          <img src="images/LogoRaiseVerde.png" alt="Logo Raise" />
        </div>
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
      </nav>
    </>
  );
};
