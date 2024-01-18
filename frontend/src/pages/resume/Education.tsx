import type { ReactElement } from 'react';

const Education = ({
  children
}: {
  children?: ReactElement | ReactElement[];
}) => (
  <section className='education'>
    <h3>Education</h3>
    <article>
      <h4>👩‍🎓 Vinnytsia National Technical University</h4>
      <h5>1999 - 2003</h5>
      <p>Bachelor's degree in Management and English Language</p>
    </article>
    {children}
  </section>
);

export default Education;
