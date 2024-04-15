import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useScreenWidth from '../../hooks/useScreenWidth';
import Logo from './Logo';
import DesktopNavList from './DesktopNavList';
import MobileNavList from './MobileNavList';
import MenuButton from './MenuButton';

const Header = () => {
  const [mobileNavListIsVisible, setMobileNavListIsVisible] = useState(false);
  const screenWidth = useScreenWidth();
  const { pathname } = useLocation();

  useEffect(() => {
    if (screenWidth > 800) {
      setMobileNavListIsVisible(false);
    }

    setMobileNavListIsVisible(false);
  }, [pathname, screenWidth]);

  const toggleMobileNavListIsVisible = () => {
    setMobileNavListIsVisible(!mobileNavListIsVisible);
  };

  return (
    <header className='app-header'>
      <nav className='main-navigation'>
        <Logo />
        {screenWidth > 800 ? (
          <DesktopNavList />
        ) : (
          <>
            {mobileNavListIsVisible && <MobileNavList />}
            <MenuButton
              mobileNavListIsVisible={mobileNavListIsVisible}
              toggleMobileNavListIsVisible={toggleMobileNavListIsVisible}
            />
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
