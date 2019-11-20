import React from 'react';
import '../menu-item/menu-item.scss';

const MenuItem = ({ title, imageUrl, size }) => {
  const menuItemStyle = { backgroundImage: `url(${imageUrl})` };
  return (
    <div style={menuItemStyle} className={` ${size} menu-item`}>
      <div className='content'>
        <h1 className='title'>{title}</h1>
        <span className='subtitle'>Shop</span>
      </div>
    </div>
  );
};

export default MenuItem;
