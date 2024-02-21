import { NavLink, Outlet } from 'react-router-dom';
import useText from '../hooks/useText';

const ResumeLayout = () => {
  const roles = useText(
    'web developer | technical writer | interpreter',
    'web developer & interpreter',
    700
  );

  return (
    <section className='container'>
      <img src='/images/avatar.webp' alt='Mi' className='avatar' />
      <h1>
        Mila Ziabchenko
        <br />
        <span className='roles'>{roles}</span>
      </h1>
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
    </section>
  );
};

export default ResumeLayout;
