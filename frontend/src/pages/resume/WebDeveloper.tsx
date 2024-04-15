import { Link } from 'react-router-dom';
import Contact from './Contact';
import Languages from './Languages';
import Skills from './Skills';
import Projects from './Projects';
import Experience from './Experience';
import Education from './Education';

const WebDeveloper = () => (
  <>
    <section className='presentation'>
      <h2>
        Hi, I'm <strong>Mila Ziabchenko</strong>🎇
      </h2>
      <p>
        I'm a passionate <span>Web Developer</span> with a particular focus on{' '}
        <span>Front End</span> (HTML, CSS, JavaScript, TypeScript, React, Next)
        and a keen interest in <span>Back End</span> (Node, Express, MongoDB,
        Rust) 💖
      </p>
      <p>
        I value high quality and build{' '}
        <a href='https://github.com/MilaZiabchenko' target='_blank'>
          my projects
        </a>{' '}
        with attention to detail and the big picture in mind, following best
        practices and finding creative solutions to challenging problems 🐱‍💻
      </p>
      <p>
        I also write about web development in{' '}
        <Link to='/articles'>my blog →</Link>
      </p>
    </section>
    <div className='grid'>
      <Contact />
      <Languages />
    </div>
    <Skills />
    <Projects />
    <Experience>
      <article>
        <h4>🔆 Web Developer (Front End, Full Stack)</h4>
        <h5>2022 - present</h5>
        <p>
          Design & build high-quality front-end and full-stack web sites and
          applications from scratch, using modern technologies — TypeScript,
          React and its ecosystem, Axios, Vite, Node, Express, MongoDB,
          Firebase, and other cool tools.
        </p>
        <p>
          In the client-side development, implement latest HTML, CSS, JavaScript
          and TypeScript features, composition and reusability with functional
          programming, modern React patterns, like Hooks and Render Props,
          various performance optimization techniques (memoization, code
          splitting), routing with React Router v6 latest features, and also
          practice different approaches for adding animations and styles:
          CSS-in-CSS, CSS-in-JS, and Utility-First-CSS.
        </p>
        <p>
          In the server-side development, apply modular approach in the code
          structure, clean code principles, RESTful and GraphQL API integration
          with Express and Apollo, error handling, authentication and
          authorization middleware, database connection, implement schema, env
          variables and user input validations, various configurations, and
          more... 😅
        </p>
        <p>
          <a href='https://github.com/MilaZiabchenko' target='_blank'>
            view my projects on GitHub →
          </a>{' '}
        </p>
      </article>
      <article>
        <h4>🔆 Software Engineer Intern at EPAM Systems R&D</h4>
        <h5>2021 - 2022</h5>
        <p>
          Built several projects for EPAM Systems R&D using HTML, CSS, SASS,
          Bootstrap, JavaScript, native browser APIs, React and Firebase.
        </p>
        <p>
          Implemented semantic mark-up, responsive design with CSS Grid, Flexbox
          and positioning, custom animations, OOP and functional programming
          principles, React best practices, performance optimizations and SEO in
          my apps 👩‍💻
        </p>
      </article>
    </Experience>
    <Education>
      <article>
        <h4>👩‍🎓 EPAM University</h4>
        <h5>2021</h5>
        <p>Successfully completed the Front-End Course</p>
      </article>
    </Education>
  </>
);

export default WebDeveloper;
