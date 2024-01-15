import React from 'react';
import './MenuItem.css';

const MenuItem = ({ title, price, tags }) => {
  return (
    <div className="app__menuitem">
      <div className="app__menuitem--head p__cormorant">
        <p className="app__menuitem--title">{title}</p>
        <div className="app__menuitem--line"></div>
        <p className="app__menuitem--price">{price}</p>
      </div>
      <div className="app__menuitem--tags">
        <p className="app__menuitem--tag">{tags}</p>
      </div>
    </div>

  )
}

export default MenuItem