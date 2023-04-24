import { useNavigate, Link } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import useUser from '../hooks/useUser';

const NavBar = () => {
  const { user } = useUser();
  const navigate = useNavigate();

  return (
    <nav>
      <h1 className='logo'>
        <Link to='/'>
          <img src='/images/cuddly-ferris.svg' alt='Logo' height='22px' />
          mila_dev
        </Link>
      </h1>
      <ul className='nav-list'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='articles'>Articles</Link>
        </li>
        <li>
          <Link to='about'>About</Link>
        </li>
      </ul>
      {user ? (
        <button onClick={() => signOut(getAuth())}>Log Out</button>
      ) : (
        <button onClick={() => navigate('/login')}>Sign In</button>
      )}
    </nav>
  );
};

export default NavBar;
