import { NavLink, Outlet } from 'react-router-dom';

const ResumeLayout = () => {
  return (
    <section className='container'>
      <img src='/images/avatar.webp' alt='Mi' className='avatar' />
      <h1>
        Mila Ziabchenko
        <br />
        <span className='roles'>
          web developer | tech writer | interpreter{' '}
        </span>
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
