import { useLayoutEffect, type ReactElement } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollTo = ({
  children
}: {
  children: ReactElement | ReactElement[];
}) => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    if (
      pathname === '/resume/web-developer' ||
      pathname === '/resume/interpreter'
    ) {
      const element = document.querySelector('.roles');

      element?.scrollIntoView({ behavior: 'smooth' });
    } else {
      document.documentElement.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });
    }
  }, [pathname]);

  return children;
};

export default ScrollTo;
