import { Link } from 'react-router-dom';

const Logo = () => (
  <h1 className='logo'>
    <Link to='/'>
      <img src='/icons/cuddly-ferris.svg' alt='Logo' height='22px' />
      mila_dev
    </Link>
  </h1>
);

export default Logo;
