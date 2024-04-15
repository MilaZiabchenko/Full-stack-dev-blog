import { Link } from 'react-router-dom';
import Contact from './Contact';
import Languages from './Languages';
import Experience from './Experience';
import Education from './Education';

const Interpreter = () => (
  <>
    <section className='presentation'>
      <h2>
        Hi, I'm <strong>Mila Ziabchenko</strong>🎇
      </h2>
      <p>
        I'm a professional Interpreter of English, Italian, Spanish, Russian and
        Ukrainian languages 🌍
      </p>
      <p>
        I also have several years of experience in teaching Italian,
        translating, and writing original articles about web development in{' '}
        <Link to='/articles'>my blog →</Link>
      </p>
      <p>Mastering languages is my lifetime passion 💖</p>
    </section>
    <div className='grid'>
      <Contact />
      <Languages />
    </div>
    <Experience />
    <Education>
      <article>
        <h4>👩‍🎓 First Kyiv State Foreign Languages Courses</h4>
        <h5>1999 - 2001</h5>
        <p>Italian Language Translator Diploma</p>
        <h5>1999 - 2001</h5>
        <p>Spanish Language Translator Diploma</p>
      </article>
    </Education>
  </>
);

export default Interpreter;
