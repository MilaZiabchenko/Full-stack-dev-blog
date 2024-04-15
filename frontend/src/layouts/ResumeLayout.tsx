import { NavLink, Outlet } from 'react-router-dom';
import useText from '../hooks/useText';

const ResumeLayout = () => {
  const roles = useText(
    'web developer | interpreter | translator | teacher',
    'web developer & interpreter',
    750
  );

  return (
    <div className='container'>
      <header>
        <img src='/images/avatar_2.webp' alt='Mi' className='avatar' />
        <h1>
          Mila Ziabchenko
          <br />
          <span className='roles'>{roles}</span>
        </h1>
      </header>
      <nav className='resume-navigation'>
        <ul className='resume-nav-list'>
          <li>
            <NavLink to='web-developer'>Web Developer</NavLink>
          </li>
          <li>
            <NavLink to='interpreter'>Interpreter</NavLink>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
};

export default ResumeLayout;
