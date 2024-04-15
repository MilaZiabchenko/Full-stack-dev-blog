import type { Comment } from './Article';

const ArticleComments = ({ comments }: { comments: Comment[] }) => (
  <section className='comments'>
    <h3>Comments ({comments?.length ?? 0})</h3>
    <ul>
      {comments?.map(({ postedBy, text }) => (
        <li className='comment' key={postedBy + ': ' + text}>
          <article>
            <h4>{postedBy}</h4>
            <p>{text}</p>
          </article>
        </li>
      ))}
    </ul>
  </section>
);

export default ArticleComments;
