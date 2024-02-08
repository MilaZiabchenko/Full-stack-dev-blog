import { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link, NavLink } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import useUser from '../hooks/useUser';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const { user } = useUser();
  const navigate = useNavigate();

  return (
    <header>
      <nav className={`${isOpen ? 'main-navigation open' : 'main-navigation'}`}>
        <h1 className='logo'>
          <Link to='/'>
            <img src='/icons/cuddly-ferris.svg' alt='Logo' height='22px' />
            mila_dev
          </Link>
        </h1>
        <ul
          className={`${
            isOpen ? 'main-nav-list mobile-nav-list' : 'main-nav-list'
          }`}
        >
          <li>
            <NavLink to='articles'>Articles</NavLink>
          </li>
          <li>
            <NavLink to='about'>About</NavLink>
          </li>
          <li>
            <NavLink to='resume'>Resume</NavLink>
          </li>
        </ul>
        {user ? (
          <button onClick={() => signOut(getAuth())}>Log Out</button>
        ) : (
          <button onClick={() => navigate('/login')}>Sign In</button>
        )}
        <div className='mobile-menu' onClick={() => setIsOpen(!isOpen)}>
          <img
            src={`/icons/${isOpen ? 'close' : 'menu'}.svg`}
            alt='Menu'
            height='26px'
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
