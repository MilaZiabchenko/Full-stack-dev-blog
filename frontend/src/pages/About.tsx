import { Link } from 'react-router-dom';

const About = () => (
  <section className='container'>
    <h1>About Me</h1>
    <p>
      My name is <strong>Mila Ziabchenko</strong> 😊 I'm a passionate{' '}
      <Link to='/resume/web-developer'>web developer</Link> who creates
      applications with HTML, CSS, JavaScript, TypeScript, React, Node, Express,
      GraphQL, MongoDB, Firebase, and other modern technologies and tools.
    </p>
    <p>
      I'm constantly improving my programming and problem solving skills,
      expanding my knowledge and learning new things...
    </p>
    <p>
      In the summer of 2023, I started exploring the world of Rust and fell in
      love with this programming language 💖
    </p>
    <p>
      I love to design and build amazing apps with great functionality and
      beautiful interfaces for everyone, taking advantage of the cutting-edge
      technologies and best practices. I am a constant learner who creates apps
      with attention to every detail and with a big picture in mind. I always
      try to deliver the best user experience possible.
    </p>
    <p>
      In <Link to='/articles'>my articles</Link> written for this blog dedicated
      to the web development, I'd like to share a little bit of my knowledge
      with fellow dev nerds and would be glad to receive their constructive and
      friendly feedback 😉
    </p>
    <p>
      I have also worked as an{' '}
      <Link to='/resume/interpreter'>
        interpreter of Italian, Spanish and English languages
      </Link>
      , primarily in the realm of international adoptions in Ukraine, helping
      Ukrainian orphan children to join loving families from foreign countries.
    </p>
    <p>
      My first job was a teacher of Italian as a foreign language at the First
      Kyiv State Foreign Languages Courses.
    </p>
    <p>
      My other interests include (but are not limited to) spending time with my
      loved ones; communicating with kind and interesting people; walking,
      hiking, biking, swimming, traveling; learning new things, especially
      related to cognitive, social and other sciences.
    </p>
    <p>
      I adore drinking latte ☕ and eating delicious food, especially fruit
      🍒🍏🍑 and (a little bit of) pastries 😋
    </p>
    <p>
      I love animals 🐢🐈🦔, forests 🌲🌳🍁🍂, mountains 🌄 and the sea 🌊🐬
    </p>
  </section>
);

export default About;
