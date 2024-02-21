import { NavLink } from 'react-router-dom';
import type { MobileLink } from '../../data/links-data';

const MobileNavLink = ({ link }: { link: MobileLink }) => (
  <li
    className={
      link.nested
        ? `slide-in-with-${link.animationDelay}-ms-delay nested-nav-link`
        : `slide-in-with-${link.animationDelay}-ms-delay`
    }
  >
    <NavLink to={link.path}>{link.title}</NavLink>
  </li>
);

export default MobileNavLink;
