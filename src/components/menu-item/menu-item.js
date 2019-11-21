import React from 'react';
import '../menu-item/menu-item.scss';

const MenuItem = ({ title, imageUrl, size }) => {
  const menuItemStyle = { backgroundImage: `url(${imageUrl})` };
  return (
    <div className={` ${size} menu-item`}>
      <div style={menuItemStyle} className='background-image'></div>
      <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='subtitle'>Shop</span>
      </div>
    </div>
  );
};

export default MenuItem;
