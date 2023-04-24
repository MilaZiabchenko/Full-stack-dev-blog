import type { ArticleData } from '../data/articles-data';

type ArticleCardProps = {
  article: ArticleData;
  index: number;
};

const ArticleCard = ({ article, index }: ArticleCardProps) => (
  <article className='article-card'>
    <h3>{article.title}</h3>
    <div className='article-card-image-container'>
      <img src={`/images/animated-cats/cat_${index + 2}.jpg`} alt='Cat' />
    </div>
    <h5>
      Written by <strong>Mila Ziabchenko</strong>
    </h5>
    <span className='nested-link'>Read article →</span>
  </article>
);

export default ArticleCard;
