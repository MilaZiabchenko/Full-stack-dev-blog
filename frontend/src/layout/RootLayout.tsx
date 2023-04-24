import { Outlet } from 'react-router-dom';
import routesData from '../data/routes-data';
import useDocumentTitle from '../hooks/useDocumentTitle';
import ScrollToTop from '../components/ScrollToTop';
import NavBar from './NavBar';
import Footer from './Footer';

const RootLayout = () => {
  useDocumentTitle(routesData);

  return (
    <ScrollToTop>
      <NavBar />
      <main className='page-body'>
        <Outlet />
      </main>
      <Footer />
    </ScrollToTop>
  );
};

export default RootLayout;
