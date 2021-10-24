import { NavLinks } from '../NavBar/NavLinks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export const MobileNavigation = () => {
  const [open, setOpen] = useState(false);

  const barsIcon = (
    <FontAwesomeIcon
      icon={faBars}
      className="bars-icon"
      onClick={() => setOpen(!open)}
    />
  );

  const closeIcon = (
    <FontAwesomeIcon
      icon={faTimes}
      className="close-icon"
      onClick={() => setOpen(!open)}
    />
  );

  return (
    <nav className="mobile-navigation">
      {open ? closeIcon : barsIcon}
      {open && <NavLinks />}
    </nav>
  );
};
