import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import useUser from '../../hooks/useUser';
import { getAxiosErrorMessage } from '../../utils/getAxiosErrorMessage';
import { capitalizeFirstLetter } from '../../utils/capitalizeFirstLetter';
import articlesData from '../../data/articles-data';
import ArticleContent from './ArticleContent';
import CommentForm from './CommentForm';
import Comments from './Comments';

type Comment = Record<'postedBy' | 'text', string>;

type ArticleInfo = {
  upvotes: number;
  canUpvote: boolean;
  comments: Comment[];
};

const Article = () => {
  const { articleName } = useParams();
  const navigate = useNavigate();

  const [articleInfo, setArticleInfo] = useState<ArticleInfo>({
    upvotes: 0,
    canUpvote: false,
    comments: []
  });
  const [error, setError] = useState('');
  const { user, isLoading } = useUser();

  useEffect(() => {
    const loadArticleInfo = async () => {
      const token = user && (await user.getIdToken());
      const headers = token ? { authtoken: token } : {};

      try {
        const response = await axios.get<ArticleInfo>(
          `/api/articles/${articleName}`,
          {
            headers
          }
        );

        setArticleInfo(response.data);
      } catch (error) {
        setError(getAxiosErrorMessage(error));
      }
    };

    if (!isLoading) {
      loadArticleInfo();
    }
  }, [articleName, user, isLoading]);

  const addUpvote = async () => {
    const token = user && (await user.getIdToken());
    const headers = token ? { authtoken: token } : {};

    try {
      const response = await axios.patch<ArticleInfo>(
        `/api/articles/${articleName}/upvote`,
        null,
        { headers }
      );

      const updatedArticle = response.data;

      setArticleInfo(updatedArticle);
    } catch (error) {
      setError(getAxiosErrorMessage(error));
    }
  };

  const articleData = articlesData.find(
    article => article.name === articleName
  );

  if (!articleData) return <h1>{error}</h1>;

  const { name, title, updated, content } = articleData;
  const { upvotes, canUpvote, comments } = articleInfo;

  return (
    <div className='container'>
      <p className='text-center'>
        <Link to='/articles'>← Back to Articles</Link>
      </p>
      <h1 className='article-heading'>{capitalizeFirstLetter(title)}</h1>

      <section className='article-metadata'>
        <h5>
          Written by <strong>Mila Ziabchenko</strong>
        </h5>
        <h5>Last updated {updated}</h5>
      </section>

      <section className='upvotes-section'>
        {user ? (
          <button onClick={addUpvote}>
            {canUpvote ? 'Upvote' : 'Already Upvoted'}
          </button>
        ) : (
          <button onClick={() => navigate('/login')}>Log in to upvote</button>
        )}
        <p>
          <span>{upvotes === 1 ? `1 upvote` : `${upvotes ?? 0} upvotes`}</span>
        </p>
      </section>

      <section className='article-body'>
        <ArticleContent content={content} />
      </section>

      {user ? (
        <CommentForm
          articleName={name}
          onAddedComment={updatedArticle => setArticleInfo(updatedArticle)}
        />
      ) : (
        <button onClick={() => navigate('/login')}>
          Log in to add a comment
        </button>
      )}

      <section className='comments'>
        <h3>Comments ({comments?.length ?? 0})</h3>
        <Comments comments={comments} />
      </section>
    </div>
  );
};

export type { Comment, ArticleInfo };
export default Article;
