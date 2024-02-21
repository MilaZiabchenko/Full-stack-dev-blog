import { NavLink } from 'react-router-dom';
import { desktopLinksData } from '../../data/links-data';
import SignInButton from './SignInButton';

const DesktopNavList = () => (
  <ul className='desktop-nav-list'>
    {desktopLinksData.map(link => (
      <li key={link.title}>
        <NavLink to={link.path}>{link.title}</NavLink>
      </li>
    ))}
    <li>
      <SignInButton />
    </li>
  </ul>
);

export default DesktopNavList;
