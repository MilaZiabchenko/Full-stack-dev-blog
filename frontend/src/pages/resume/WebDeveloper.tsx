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
        Hi! My name is <strong>Mila Ziabchenko</strong>🎇
      </h2>
      <p>
        I'm a passionate and creative <span>Full-Stack Developer</span> with a
        particular focus on <span>Front End</span> (HTML, CSS, JavaScript,
        TypeScript, React) and a keen interest in <span>Back End</span> (Node,
        Rust) 🐱‍💻
      </p>
      <p>
        I value high quality and build{' '}
        <a href='https://github.com/MilaZiabchenko' target='_blank'>
          my projects
        </a>{' '}
        with attention to every detail, keeping the big picture in mind 💖
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
        <h4>🔆 Full-Stack Web Developer</h4>
        <h5>2022 - present</h5>
        <p>
          Build full-stack and front-end web sites and applications from
          scratch, using modern technologies — TypeScript, React and its
          ecosystem, Axios, Vite, Node, Express, MongoDB, and other cool tools.
        </p>
        <p>
          Implement in my projects latest HTML, CSS, JavaScript and TypeScript
          features, composition and reusability with functional programming,
          modern React patterns, like Hooks and Render Props, performance
          optimization techniques, routing with React Router v6 latest features,
          modular approach in the code structure, clean code principles, REST
          and GraphQL API integration, authentication and authorization
          middleware, database connection, configurations and deployment 😅
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
          Implemented semantic mark-up, responsive design with CSS Grid and
          Flexbox, OOP and functional programming principles, React best
          practices, SEO and performance optimizations in my apps 👩‍💻
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
