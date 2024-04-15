import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import useUser from '../../hooks/useUser';
import { getUserTokenAndHeaders } from '../../helpers/getUserTokenAndHeaders';
import { getAxiosErrorMessage } from '../../helpers/getAxiosErrorMessage';
import articlesData from '../../data/articles-data';
import ArticleHeader from './ArticleHeader';
import ArticleUpvotes from './ArticleUpvotes';
import ArticleContent from './ArticleContent';
import CommentForm from './CommentForm';
import ArticleComments from './ArticleComments';
import LogInButton from './LogInButton';

type Comment = Record<'postedBy' | 'text', string>;

type ArticleInfo = {
  upvotes: number;
  canUpvote: boolean;
  comments: Comment[];
};

const Article = () => {
  const { articleName } = useParams();

  const [articleInfo, setArticleInfo] = useState<ArticleInfo>({
    upvotes: 0,
    canUpvote: false,
    comments: []
  });
  const [error, setError] = useState('');
  const { user, isLoading } = useUser();

  useEffect(() => {
    const loadArticleInfo = async () => {
      try {
        const response = await axios.get<ArticleInfo>(
          `/api/articles/${articleName}`,
          { headers: await getUserTokenAndHeaders(user) }
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
      <ArticleHeader title={title} updated={updated} />
      <ArticleUpvotes
        articleName={name}
        onUpvotedArticle={updatedArticle => setArticleInfo(updatedArticle)}
        onError={error => setError(error)}
        canUpvote={canUpvote}
        upvotes={upvotes}
      />
      <ArticleContent content={content} />
      {user ? (
        <CommentForm
          articleName={name}
          onAddedComment={updatedArticle => setArticleInfo(updatedArticle)}
        />
      ) : (
        <LogInButton>Log in to add a comment</LogInButton>
      )}
      <ArticleComments comments={comments} />
    </div>
  );
};

export type { Comment, ArticleInfo };
export default Article;
