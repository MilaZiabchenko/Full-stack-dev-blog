import { Link } from 'react-router-dom';
import useText from '../../hooks/useText';

const Hero = () => {
  const roles = useText(
    'web developer | interpreter | cat person',
    'web developer & cat person',
    475
  );

  return (
    <section>
      <header>
        <img src='/images/avatar_1.webp' alt='Mi' className='avatar' />
        <h1>
          Hi, I'm Mila,
          <br />
          <span className='roles'>{roles}</span>
        </h1>
      </header>
      <p>
        I love machine and human languages, cats, nature, latte in the morning
        and sunset in the evening 😊 Learn more{' '}
        <Link to='about'>about me →</Link>
      </p>
      <p>
        In <Link to='articles'>my articles</Link>, I write about interesting and
        sometimes tricky web dev topics, illustrating words with{' '}
        <a href='https://github.com/MilaZiabchenko' target='_blank'>
          my code
        </a>{' '}
        examples 🐱‍💻
      </p>
    </section>
  );
};

export default Hero;
