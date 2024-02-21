import { Outlet } from 'react-router-dom';
import routesData from '../data/routes-data';
import useDocumentTitle from '../hooks/useDocumentTitle';
import ScrollTo from '../components/ScrollTo';
import Header from '../components/header/Header';
import Footer from '../components/Footer';

const RootLayout = () => {
  useDocumentTitle(routesData);

  return (
    <ScrollTo>
      <div className='full-screen'>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </ScrollTo>
  );
};

export default RootLayout;
