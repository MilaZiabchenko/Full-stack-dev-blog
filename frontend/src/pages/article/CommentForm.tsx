import {
  type FormEvent,
  type FocusEvent,
  type ChangeEvent,
  useState
} from 'react';
import axios from 'axios';
import useUser from '../../hooks/useUser';
import type { ArticleData } from '../../data/articles-data';
import type { ArticleInfo } from './Article';
import { getAxiosErrorMessage } from '../../utils/getAxiosErrorMessage';

type AddCommentFormProps = {
  articleName: ArticleData['name'];
  onAddedComment: (updatedArticle: ArticleInfo) => void;
};

const CommentForm = ({ articleName, onAddedComment }: AddCommentFormProps) => {
  const { user } = useUser();
  const [error, setError] = useState('');
  const [comment, setComment] = useState({ author: '', text: '' });

  const addComment = async (e: FormEvent) => {
    e.preventDefault();

    const token = user && (await user.getIdToken());
    const headers = token ? { authtoken: token } : {};

    if (comment.author === '' || comment.text === '') {
      setError('Name and comment fields cannot be empty!');

      throw new Error('Name and comment fields cannot be empty!');
    }

    try {
      const response = await axios.put<ArticleInfo>(
        `/api/articles/${articleName}/comments`,
        {
          postedBy: comment.author,
          text: comment.text
        },
        {
          headers
        }
      );

      const updatedArticle = response.data;

      onAddedComment(updatedArticle);

      setComment({ author: '', text: '' });
      setError('');
    } catch (error) {
      setError(getAxiosErrorMessage(error));
    }
  };

  const handleBlur = (_e: FocusEvent<HTMLFormElement>) => {
    setError('');
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setComment({ ...comment, [e.target.name]: e.target.value });
  };

  return (
    <form
      onSubmit={addComment}
      onBlur={handleBlur}
      className='add-comment-form'
    >
      <h3>Add a Comment</h3>
      <div>
        <label>
          Name:
          <input
            type='text'
            name='author'
            value={comment.author}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Comment:
          <textarea
            cols={50}
            rows={5}
            name='text'
            value={comment.text}
            onChange={handleChange}
          ></textarea>
        </label>
      </div>
      {error && <p className='error'>{error}</p>}
      <button type='submit'>Add Comment</button>
    </form>
  );
};

export default CommentForm;
