import { useLayoutEffect, type ReactElement } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = ({
  children
}: {
  children: ReactElement | ReactElement[];
}) => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [pathname]);

  return children;
};

export default ScrollToTop;
