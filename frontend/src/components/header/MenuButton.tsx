import type { MouseEventHandler } from 'react';

type MenuButtonProps = {
  mobileNavListIsVisible: boolean;
  toggleMobileNavListIsVisible: MouseEventHandler<HTMLButtonElement>;
};

const MenuButton = ({
  mobileNavListIsVisible,
  toggleMobileNavListIsVisible
}: MenuButtonProps) => (
  <button className='menu-btn' onClick={toggleMobileNavListIsVisible}>
    <img
      src={`/icons/${mobileNavListIsVisible ? 'close' : 'menu'}.svg`}
      alt='Menu'
      height='26px'
    />
  </button>
);

export default MenuButton;
