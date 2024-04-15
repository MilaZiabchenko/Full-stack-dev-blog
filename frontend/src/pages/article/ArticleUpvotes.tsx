import axios from 'axios';
import useUser from '../../hooks/useUser';
import type { ArticleData } from '../../data/articles-data';
import type { ArticleInfo } from './Article';
import { getUserTokenAndHeaders } from '../../helpers/getUserTokenAndHeaders';
import { getAxiosErrorMessage } from '../../helpers/getAxiosErrorMessage';
import LogInButton from './LogInButton';

type UpvotesProps = {
  articleName: ArticleData['name'];
  onUpvotedArticle: (updatedArticle: ArticleInfo) => void;
  canUpvote: ArticleInfo['canUpvote'];
  upvotes: ArticleInfo['upvotes'];
  onError: (error: string) => void;
};

const ArticleUpvotes = ({
  articleName,
  onUpvotedArticle,
  canUpvote,
  upvotes,
  onError
}: UpvotesProps) => {
  const { user } = useUser();

  const addUpvote = async () => {
    try {
      const response = await axios.patch<ArticleInfo>(
        `/api/articles/${articleName}/upvote`,
        null,
        { headers: await getUserTokenAndHeaders(user) }
      );

      const updatedArticle = response.data;

      onUpvotedArticle(updatedArticle);
    } catch (error) {
      onError(getAxiosErrorMessage(error));
    }
  };

  return (
    <section className='upvotes-section'>
      {user ? (
        <button onClick={addUpvote}>
          {canUpvote ? 'Upvote' : 'Already Upvoted'}
        </button>
      ) : (
        <LogInButton>Log in to upvote</LogInButton>
      )}
      <p>
        <span>{upvotes === 1 ? `1 upvote` : `${upvotes ?? 0} upvotes`}</span>
      </p>
    </section>
  );
};

export default ArticleUpvotes;
