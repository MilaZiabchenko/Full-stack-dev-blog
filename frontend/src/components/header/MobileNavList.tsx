import { mobileLinksData, animationDelays } from '../../data/links-data';
import MobileNavLink from './MobileNavLink';
import SignInButton from './SignInButton';

const MobileNavList = () => (
  <ul className='mobile-nav-list'>
    {mobileLinksData.map(link => (
      <MobileNavLink key={link.title} link={link} />
    ))}
    <li className={`slide-in-with-${animationDelays.at(-1)}-ms-delay`}>
      <SignInButton />
    </li>
  </ul>
);

export default MobileNavList;
