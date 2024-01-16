import React from 'react';
import './AwardCard.css';

const AwardCard = ({award}) => {
  return (
    <div className="awards-card">
      <img className="awards-card__img" src={award.imgUrl} alt="" />
      <div className="awards-card__content">
        <p className="p__cormorant awards-card__title">{award.title}</p>
        <p className="p__opensans awards-card__subtitle">{award.subtitle}</p>
      </div>
    </div>
  )
}

export default AwardCard