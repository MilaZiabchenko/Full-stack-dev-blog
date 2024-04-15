import React from 'react';
import type { ArticleData } from '../../data/articles-data';

const ArticleContent = ({ content }: { content: ArticleData['content'] }) => (
  <section className='article-body'>
    {content?.map((element, i) => (
      <React.Fragment key={i}>
        {Object.hasOwn(element, 'p') && <p>{element['p']}</p>}
        {Object.hasOwn(element, 'h3') && <h3>{element['h3']}</h3>}
        {Object.hasOwn(element, 'h4') && <h4>{element['h4']}</h4>}
        {Object.hasOwn(element, 'img') && (
          <div className={`image-${element['img']?.['width']}-container`}>
            <img
              src={`${element['img']?.['src']}`}
              alt={element['img']?.['alt']}
              width={`${element['img']?.['width']}%`}
              className={`image-${element['img']?.['width']}`}
            />
          </div>
        )}
      </React.Fragment>
    ))}
  </section>
);

export default ArticleContent;
