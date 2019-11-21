import React, { useState } from 'react';
import Menu from '../menu-item/menu-item';
import '../directory/directory.scss';
import sectionData from './section.data';
export default function Directory() {
  const [section, setSection] = useState(sectionData);

  return (
    <div className='directory-menu'>
      {section.map(({ id, ...sectionProps }) => (
        <Menu key={id} {...sectionProps} />
      ))}
    </div>
  );
}
