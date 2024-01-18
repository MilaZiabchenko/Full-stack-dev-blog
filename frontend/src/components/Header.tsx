import { useNavigate, Link, NavLink } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import useUser from '../hooks/useUser';

const Header = () => {
  const { user } = useUser();
  const navigate = useNavigate();

  return (
    <header>
      <nav className='main-navigation'>
        <h1 className='logo'>
          <Link to='/'>
            <img src='/images/cuddly-ferris.svg' alt='Logo' height='22px' />
            mila_dev
          </Link>
        </h1>
        <ul className='main-nav-list'>
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
      </nav>
    </header>
  );
};

export default Header;
