import { Link } from 'react-router-dom';
import articlesData from '../data/articles-data';
import ArticleCard from './ArticleCard';

const ArticleCards = () => (
  <ul>
    {articlesData.map((article, index) => (
      <li key={article.name}>
        <Link to={`/articles/${article.name}`}>
          <ArticleCard article={article} index={index} />
        </Link>
      </li>
    ))}
  </ul>
);

export default ArticleCards;
