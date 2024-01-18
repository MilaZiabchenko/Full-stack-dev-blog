import type { ReactElement } from 'react';
import { Link } from 'react-router-dom';

const Experience = ({
  children
}: {
  children?: ReactElement | ReactElement[];
}) => (
  <section className='experience'>
    <h3>Experience</h3>
    <article>
      <h4>🔆 Technical Writer</h4>
      <h5>2023 - present</h5>
      <p>
        Write original articles about web development in{' '}
        <Link to='/articles'>my blog →</Link>
      </p>
    </article>
    {children}
    <article>
      <h4>🔆 English | Italian | Ukrainian Interpreter & Translator</h4>
      <h5>2012 - present</h5>
      <p>
        Work as a freelance interpreter and translator in various domains —
        technology, media, tourism, healthcare, and others spheres...
      </p>
    </article>
    <article>
      <h4>🔆 Specialist in the realm of International Adoptions in Ukraine</h4>
      <h5>2003 - 2012</h5>
      <p>
        Worked as an interpreter for Italian and Spanish adoptive couples who
        went through a long and hard process of adoption in Ukraine.
      </p>
      <p>
        Facilitated communication between adoptive parents and their adoptive
        children and preparation of all the documents related to the adoption.
      </p>
      <p>
        Represented adoptive parents in various institutions — local
        administrations, courts, ministries, embassies, and others.
      </p>
      <p>
        Helped dozens of Ukrainian orphans from institutions to join permanent,
        loving families 👨‍👩‍👧‍👦
      </p>
    </article>
    <article>
      <h4>🔆 Teacher of Italian as a Foreign Language</h4>
      <h5>2000 - 2003</h5>
      <p>
        Taught Italian language at the First State Kyiv Foreign Languages
        Courses in an innovative and creative way, making learning process
        engaging, fun and effective 👩‍🏫
      </p>
    </article>
  </section>
);

export default Experience;
