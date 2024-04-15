import type { ArticleData } from '../../data/articles-data';
import { capitalizeFirstLetter } from '../../utils/capitalizeFirstLetter';

type ArticleHeaderProps = {
  title: ArticleData['title'];
  updated: ArticleData['updated'];
};

const ArticleHeader = ({ title, updated }: ArticleHeaderProps) => (
  <header>
    <h1 className='article-heading'>{capitalizeFirstLetter(title)}</h1>
    <div className='article-metadata'>
      <h5>
        Written by <strong>Mila Ziabchenko</strong>
      </h5>
      <h5>Last updated {updated}</h5>
    </div>
  </header>
);

export default ArticleHeader;
