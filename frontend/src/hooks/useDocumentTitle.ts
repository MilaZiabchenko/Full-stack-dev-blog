import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import type { RouteData } from '../data/routes-data';

const useDocumentTitle = (
  routesData: RouteData[],
  originalTitle = 'Mila Ziabchenko'
) => {
  const { pathname } = useLocation();

  const currentRoute = routesData.find(route => route.path === pathname);

  useEffect(() => {
    document.title = currentRoute?.title
      ? `${currentRoute.title} | ${originalTitle}`
      : originalTitle;

    return () => {
      document.title = originalTitle;
    };
  }, [pathname]);
};

export default useDocumentTitle;
