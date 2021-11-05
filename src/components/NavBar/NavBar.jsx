import { Navigation } from './Navigation';
import { MobileNavigation } from './MobileNavigation';
import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <>
      <nav className="nav">
        <div className="container-logo">
          <Link to='/'>
          <img src="images/LogoRaiseVerde.png" alt="Logo Raise" />
          </Link>
        </div>
        <Navigation />
        <MobileNavigation />
      </nav>
    </>
  );
};
