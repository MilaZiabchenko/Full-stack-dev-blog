import Hero from './Hero';
import ArticleCards from '../../components/ArticleCards';

const Home = () => (
  <div className='container'>
    <section>
      <Hero />
    </section>
    <section>
      <h2>Latest articles</h2>
      <ArticleCards />
    </section>
  </div>
);

export default Home;
