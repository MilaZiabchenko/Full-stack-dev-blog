import { Link } from 'react-router-dom';

const Hero = () => (
  <>
    <img src='/images/avatar.webp' alt='Mi' className='avatar' />
    <h1>
      Hi, I'm Mila,
      <br />
      <span className='roles'>web developer | interpreter | cat person</span>
    </h1>
    <p>
      I love machine and human languages, cats, nature, latte in the morning and
      sunset in the evening 😊 Learn more <Link to='about'>about me →</Link>
    </p>
    <p>
      In <Link to='articles'>my articles</Link>, I write about interesting and
      sometimes tricky web dev topics, illustrating words with{' '}
      <a href='https://github.com/MilaZiabchenko' target='_blank'>
        my code
      </a>{' '}
      examples 🐱‍💻
    </p>
  </>
);

export default Hero;
