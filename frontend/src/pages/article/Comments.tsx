import type { Comment } from './Article';

const Comments = ({ comments }: { comments: Comment[] }) => (
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
);

export default Comments;
