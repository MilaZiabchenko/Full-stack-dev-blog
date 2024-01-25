import { Link } from 'react-router-dom';

const Projects = () => (
  <section className='projects'>
    <h3>Personal projects</h3>
    <article className='project'>
      <h4>
        ✨ <Link to='/'>MILA_DEV</Link>
      </h4>
      <ul>
        <li>
          my personal blog/site with original articles on various web dev
          topics;
        </li>
        <li>
          created using TypeScript, React, React Router v6, Axios, Vite, Node,
          Express, MongoDB, Firebase Auth & Admin SDK;
        </li>
        <li>
          built a RESTful API that enables authenticated and authorized by
          Firebase Admin users to upvote and comment articles;
        </li>
        <li>
          established a connection to the MongoDB Atlas for storing and updating
          info about articles' upvotes and comments;
        </li>
        <li>
          designed the UI and developed client-side logic with React for
          displaying articles and enabling logged in users to upvote and
          comment;
        </li>
        <li>
          implemented routing with React Router using dynamic segments and
          nested routes;
        </li>
        <li>
          used latest TypeScript features for strictly typing and structuring
          both back-end and front-end part of the codebase;
        </li>
        <li>
          wrote about my blog's server-side logic implementation and code
          structure in the article{' '}
          <Link to='/articles/node-express-folder-structure'>
            My Way to Structure Node/Express/TypeScript App
          </Link>
          ;
        </li>
        <li>
          <a
            href='https://github.com/MilaZiabchenko/Full-stack-dev-blog'
            target='_blank'
          >
            source code →
          </a>
        </li>
      </ul>
    </article>
    <article className='project'>
      <h4>
        ✨{' '}
        <a
          href='https://netwonderland-streaming-service.netlify.app/'
          target='_blank'
        >
          NeTWondeRLanD
        </a>
      </h4>
      <ul>
        <li>
          streaming service app, designed and developed for EPAM Systems R&D,
          that fetches and displays shows from the public API;
        </li>
        <li>
          built with React using built-in/custom Hooks, React Router v6
          features, Axios HTTP Client, Context API, Firebase Auth, and Vite;
        </li>
        <li>
          implemented protected routes to enable logged in users to see all
          shows, view details about each show, search for a show, like and add
          shows to favorites;
        </li>
        <li>
          added performance optimization, using memoization, deferred updates,
          transitions, and other built into React techniques;
        </li>
        <li>
          wrote in great detail about custom Hooks pattern implementation in the
          NeTWondeRLanD app in my article{' '}
          <Link to='/articles/react-custom-hooks'>
            Making Friends with React Custom Hooks
          </Link>
          ;
        </li>
        <li>
          <a
            href='https://github.com/MilaZiabchenko/NeTWondeRLanD-streaming-service'
            target='_blank '
          >
            source code →
          </a>
        </li>
      </ul>
    </article>
  </section>
);

export default Projects;
