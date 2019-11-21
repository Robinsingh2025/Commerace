import React from 'react';
import '../menu-item/menu-item.scss';
import { useHistory, useRouteMatch } from 'react-router-dom';
const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  let history = useHistory();
  let match = useRouteMatch();
  const menuItemStyle = { backgroundImage: `url(${imageUrl})` };
  return (
    <div
      className={` ${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div style={menuItemStyle} className='background-image'></div>
      <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='subtitle'>Shop</span>
      </div>
    </div>
  );
};

export default MenuItem;
