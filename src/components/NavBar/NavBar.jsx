import { Navigation } from './Navigation';
import { MobileNavigation } from './MobileNavigation';

export const NavBar = () => {
  return (
    <>
      <nav className="nav">
        <div className="container-logo">
          <img src="images/LogoRaiseVerde.png" alt="Logo Raise" />
        </div>
        <Navigation />
        <MobileNavigation />
      </nav>
    </>
  );
};
